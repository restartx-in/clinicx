import { useState, useEffect, forwardRef, useRef, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccounts } from '@/hooks/api/account/useAccounts'
import AddAccount from '@/apps/user/pages/List/AccountList/components/AddAccount'
import CashBook from '@/apps/user/pages/Transactions/CashBook'
import { useToast } from '@/context/ToastContext'
import { TOASTTYPE, TOASTSTATUS } from '@/constants/object/toastType'
import { HiPencil } from "react-icons/hi2";
import './style.scss'


const AccountAutoCompleteWithAddOptionWithBalance = forwardRef(
  (
    {
      name,
      value,
      onChange,
      label,
      placeholder = 'Select an Account',
      required = false,
      disabled = false,
      className = '',
      filters = {},
      debitAmount,
      is_edit = true,
    },
    ref,
  ) => {
    const { data: accounts, isLoading, isError, error } = useAccounts(filters)
    const [accountOptions, setAccountOptions] = useState([])
    const showToast = useToast()
    const navigate = useNavigate()

    const [isAccountModalOpen, setIsAccountModalOpen] = useState(false)
    const [modalMode, setModalMode] = useState('add')
    const [selectedAccount, setSelectedAccount] = useState(null)

    const [isOpenCashBookModal, setIsOpenCashBookModal] = useState(false)
    const [selectedCashBookEntry, setSelectedCashBookEntry] = useState(null)
    const [cashBookMode, setCashBookMode] = useState('add')

    const handleDepositClick = useCallback((account) => {
      setIsAccountModalOpen(false)
      setSelectedCashBookEntry({
        account_id: account.id,
        transaction_type: 'deposit',
      })
      setCashBookMode('add')
      setIsOpenCashBookModal(true)
    }, [])

    const handleWithdrawalClick = useCallback((account) => {
      setIsAccountModalOpen(false)
      setSelectedCashBookEntry({
        account_id: account.id,
        transaction_type: 'withdrawal',
      })
      setCashBookMode('add')
      setIsOpenCashBookModal(true)
    }, [])

    const handleShowTransactions = useCallback(
      (account) => {
      setIsOpenCashBookModal(false)
      setIsAccountModalOpen(false)

        navigate('/cash-book-report', { state: { accountName: account.name } })
      },
      [navigate],
    )

    useEffect(() => {
      if (accounts) {
        const options = accounts.map((account) => ({
          value: account.id,
          label: account.name,
          amount: account.amount,
        }))
        setAccountOptions(options)
      }
    }, [accounts])

    const handleAddNew = (typedValue) => {
      setSelectedAccount({ name: typedValue })
      setModalMode('add')
      setIsAccountModalOpen(true)
    }

    const handleEdit = (option) => {
      const accountToEdit = accounts.find((acc) => acc.id === option.value)
      if (accountToEdit) {
        setSelectedAccount(accountToEdit)
        setModalMode('edit')
        setIsAccountModalOpen(true)
      }
    }

    const handleCloseModal = () => {
      setIsAccountModalOpen(false)
      setSelectedAccount(null)
    }

    if (isLoading) {
      return (
          <input
          className="autocomplete__input"
            placeholder="Loading accounts..."
            disabled
          />
      )
    }

    if (isError) {
      console.error('Failed to load accounts:', error)
      return (
          <input
          className="autocomplete__input"
            placeholder="Error loading accounts"
            disabled
          />
      )
    }

    return (
      <>
        <AccountSelectAutocompleteInput
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          options={accountOptions}
          label={label}
          placeholder={placeholder}
          required={required}
          disabled={disabled || isLoading}
          className={className}
          onAddNew={handleAddNew}
          onEdit={handleEdit}
          is_edit={is_edit}
          debitAmount={debitAmount}
          showToast={showToast}
        />
        <AddAccount
          isOpen={isAccountModalOpen}
          onClose={handleCloseModal}
          mode={modalMode}
          selectedAccount={selectedAccount}
          onDeposit={handleDepositClick}
          onWithdrawal={handleWithdrawalClick}
          onShowTransactions={handleShowTransactions}
        />
        <CashBook
          isOpen={isOpenCashBookModal}
          onClose={() => setIsOpenCashBookModal(false)}
          mode={cashBookMode}
          selectedEntry={selectedCashBookEntry}
          onSuccess={() => {}}
        />
      </>
    )
  },
)

export default AccountAutoCompleteWithAddOptionWithBalance

const AccountSelectAutocompleteInput = forwardRef(
  (
    {
      name,
      value,
      onChange,
      options,
      label,
      placeholder = '',
      required = false,
      disabled = false,
      className = '',
      onAddNew,
      onEdit,
      is_edit,
      debitAmount,
      showToast,
      ...rest
    },
    ref,
  ) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [activeIndex, setActiveIndex] = useState(-1)
    const dropdownRef = useRef(null)
    const hasBeenFocused = useRef(false)

    useEffect(() => {
      const selectedOption = options.find((opt) => opt.value === value)
      setInputValue(selectedOption ? selectedOption.label : '')
    }, [value, options])

    useEffect(() => {
      if (activeIndex >= 0 && dropdownRef.current) {
        const activeItem = dropdownRef.current.children[activeIndex]
        if (activeItem) {
          activeItem.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
          })
        }
      }
    }, [activeIndex])

    const filteredOptions = useMemo(() => {
      if (!inputValue) {
        return options;
      }
      return options.filter((opt) =>
        opt.label.toLowerCase().includes(inputValue.toLowerCase()),
      );
    }, [inputValue, options]);

    const exactMatchExists = useMemo(
      () =>
        options.some(
          (opt) => opt.label.toLowerCase() === inputValue.toLowerCase().trim(),
        ),
      [inputValue, options],
    );

    const showAddNewOption = inputValue && !exactMatchExists && onAddNew;


    const handleInputChange = (e) => {
      const currentInput = e.target.value
      setInputValue(currentInput)
      setActiveIndex(-1)
      setShowDropdown(true)

      if (currentInput.length === 0) {
        setFilteredOptions(options)
        onChange({ target: { name, value: '' } })
      } else {
        const matches = options.filter((opt) =>
          opt.label.toLowerCase().includes(currentInput.toLowerCase()),
        )
        setFilteredOptions(matches)
      }
    }

    const handleSelectOption = (option) => {
      const amountToDebit = parseFloat(debitAmount) || 0
      const accountBalance = parseFloat(option.amount)

      if (amountToDebit > 0 && accountBalance < amountToDebit) {
        showToast({
          type: TOASTTYPE.GENARAL,
          message: `Insufficient funds in ${option.label}. Balance is ${accountBalance}.`,
          status: TOASTSTATUS.ERROR,
        })
        setShowDropdown(false)
        setInputValue('')
        onChange({ target: { name, value: '' } })

        return
      } else {
        onChange({ target: { name, value: option.value } })
        setInputValue(option.label)
        setShowDropdown(false)
      }
    }
    const handleAddNew = () => {
      if (onAddNew) {
        onAddNew(inputValue)
      }
      setShowDropdown(false)
    }

    const handleEditClick = (e, option) => {
      e.stopPropagation()
      if (onEdit) {
        onEdit(option)
        setShowDropdown(false)
      }
    }

    const handleFocus = () => {
      if (hasBeenFocused.current) {
        setFilteredOptions(options)
        setShowDropdown(true)
      }
      hasBeenFocused.current = true
    }

    const handleKeyDown = (e) => {
      if (!showDropdown) return
      const showAddNew = filteredOptions.length === 0 && inputValue && onAddNew
      const itemsCount = filteredOptions.length + (showAddNew ? 1 : 0)
      if (itemsCount === 0) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setActiveIndex((prevIndex) => (prevIndex + 1) % itemsCount)
          break
        case 'ArrowUp':
          e.preventDefault()
          setActiveIndex(
            (prevIndex) => (prevIndex - 1 + itemsCount) % itemsCount,
          )
          break
        case 'Enter':
          if (activeIndex < 0) return
          e.preventDefault()
          if (activeIndex < filteredOptions.length) {
            handleSelectOption(filteredOptions[activeIndex])
          } else if (showAddNew) {
            handleAddNew()
          }
          break
        case 'Escape':
          setShowDropdown(false)
          break
        default:
          break
      }
    }

    return (
      <div className={`autocomplete ${className}`}>
        {label && (
          <label htmlFor={name} className="autocomplete__label">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onClick={() => {
            // setFilteredOptions(options)
            setShowDropdown(true)
          }}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete="off"
          className="autocomplete__input"
          {...rest}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
        />
        {showDropdown && (
          <ul className="autocomplete__dropdown" ref={dropdownRef}>
            {filteredOptions.length > 0
              ? filteredOptions.map((opt, index) => (
                <li
                  key={opt.value}
                  onMouseDown={() => handleSelectOption(opt)}
                  className={`accountautocompletewithaddoptionwithbalance__option ${
                    index === activeIndex ? 'active' : ''
                  }`}
                >
                  <div className="accountautocompletewithaddoptionwithbalance__option-content">
                    <span>{opt.label}</span>
                    <span className="fs14">₹{opt.amount}</span>
                  </div>
                    {is_edit && (
                    <button
                      type="button"
                      className="accountautocompletewithaddoptionwithbalance__option-edit_button"
                      onMouseDown={(e) => handleEditClick(e, opt)}
                    >
                      <HiPencil />
                    </button>
                  )}
                </li>
              ))
              : inputValue &&
                onAddNew && (
              <li
                onMouseDown={handleAddNew}
                className={`autocomplete__option autocomplete__option--add ${
                  activeIndex === 0 ? 'active' : ''
                }`}
              >
                + Add "{inputValue}"
              </li>
                )}
          </ul>
        )}
      </div>
    )
  },
)