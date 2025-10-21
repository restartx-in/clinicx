import { useState, useEffect, forwardRef, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccounts } from '@/hooks/api/account/useAccounts'
import AddAccount from '@/apps/user/pages/List/AccountList/components/AddAccount'
import CashBook from '@/apps/user/pages/Transactions/CashBook'
import HStack from '@/components/HStack'
import './style.scss'

const AccountAutoComplete = forwardRef(
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
     
    },
    ref,
  ) => {
    const { data: accounts, isLoading, isError, error } = useAccounts(filters)
    const [accountOptions, setAccountOptions] = useState([])
    const navigate = useNavigate()

    const [isAccountModalOpen, setIsAccountModalOpen] = useState(false)
    // The modalMode can still exist for 'add' but 'edit' functionality is removed
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
        navigate('/cash-book-report', { state: { accountName: account.name } })
      },
      [navigate],
    )

    useEffect(() => {
      if (accounts) {
        const options = accounts.map((account) => ({
          value: account.id,
          label: account.name,
        }))
        setAccountOptions(options)
      }
    }, [accounts])

   

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

export default AccountAutoComplete

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
      ...rest
    },
    ref,
  ) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredOptions, setFilteredOptions] = useState([])
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
      onChange({ target: { name, value: option.value } })
      setInputValue(option.label)
      setShowDropdown(false)
    }

    // Removed handleEditClick function

    const handleFocus = () => {
      if (hasBeenFocused.current) {
        setFilteredOptions(options)
        setShowDropdown(true)
      }
      hasBeenFocused.current = true
    }

    const handleKeyDown = (e) => {
      if (!showDropdown) return
      const itemsCount = filteredOptions.length

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
            setFilteredOptions(options)
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
          <ul className="table_search__menu" ref={dropdownRef}> {/* Changed class to table_search__menu */}
            {filteredOptions.length > 0
              ? filteredOptions.map((opt, index) => (
                  <li
                    key={opt.value}
                    onMouseDown={() => handleSelectOption(opt)}
                    className={`table_search__item ${ 
                      index === activeIndex ? 'active' : ''
                    }`}
                  >
                    <HStack justifyContent="space-between" >
                      <div className="account_select_autocomplete_input-option_content">
                        <span>{opt.label}</span>
                      </div>
                      {/* Removed the edit button entirely */}
                    </HStack>
                  </li>
                ))
              : null}
          </ul>
        )}
      </div>
    )
  },
)