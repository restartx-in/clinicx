import { useState, useEffect, forwardRef, useRef,useMemo} from 'react'
import { useAccounts } from '@/hooks/api/account/useAccounts'
import AddAccount from '@/apps/user/pages/List/AccountList/components/AddAccount'
import { HiPencil } from 'react-icons/hi2' 

import './style.scss'

const AccountAutoCompleteWithAddOption = forwardRef(
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
      is_edit = true, 
    },
    ref,
  ) => {
    const {
      data: accounts,
      isLoading,
      isError,
      error,
      refetch,
    } = useAccounts(filters)
    const [accountOptions, setAccountOptions] = useState([])

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalMode, setModalMode] = useState('add') // State for modal mode (add/edit)
    const [selectedAccountInModal, setSelectedAccountInModal] = useState(null) // State for account being edited/added

    useEffect(() => {
      if (accounts) {
        const options = accounts.map((account) => ({
          value: account.id,
          label: account.name,
        }))
        setAccountOptions(options)
      }
    }, [accounts])

    const handleAddNew = (typedValue) => {
      setSelectedAccountInModal({ name: typedValue })
      setModalMode('add')
      setIsModalOpen(true)
    }

    const handleEdit = (option) => {
      const accountToEdit = accounts.find(
        (account) => account.id === option.value,
      )
      if (accountToEdit) {
        setSelectedAccountInModal(accountToEdit)
        setModalMode('edit')
        setIsModalOpen(true)
      }
    }

    const handleCloseModal = () => {
      setIsModalOpen(false)
      setSelectedAccountInModal(null) 
    }

    const onAccountCreated = (newAccount) => {
      if (newAccount && newAccount.id) {
        refetch()

        onChange({ target: { name, value: newAccount.id } })

        handleCloseModal()
      }
    }

    const onAccountUpdated = () => {
      refetch() // Refetch the account list to reflect updated data
      handleCloseModal() // Close the modal
    }

    if (isLoading) {
      return (
        <div className="input_wrapper">
          {label && <label className="input_label">{label}</label>}
          <input
            className="input_field"
            placeholder="Loading accounts..."
            disabled
          />
        </div>
      )
    }

    if (isError) {
      console.error('Failed to load accounts:', error)
      return (
        <div className="input_wrapper">
          {label && <label className="input_label">{label}</label>}
          <input
            className="input_field"
            placeholder="Error loading accounts"
            disabled
          />
        </div>
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
          is_edit={is_edit && !disabled} 
        />
        <AddAccount
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          mode={modalMode} 
          selectedAccount={selectedAccountInModal} 
          onAccountCreated={onAccountCreated} 
          onAccountUpdated={onAccountUpdated} 
        />
      </>
    )
  },
)

export default AccountAutoCompleteWithAddOption

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
      ...rest
    },
    ref,
  ) => {
    const [showDropdown, setShowDropdown] = useState(false)
    // const [filteredOptions, setFilteredOptions] = useState([])
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
    }, [activeIndex]);

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
      onChange({ target: { name, value: option.value } })
      setInputValue(option.label)
      setShowDropdown(false)
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
      if (disabled || !showDropdown) return

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
      <div className={`input_wrapper autocomplete ${className}`}>
        {label && (
          <label htmlFor={name} className="input_label">
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
          className="input_field"
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
                  className={`autocomplete__option ${
                    index === activeIndex ? 'active' : ''
                  }`}
                >
                    <div className="account_select_autocomplete_input-option_content">
                      <span>{opt.label}</span>
                      {is_edit && !disabled && ( 
                      <button
                        type="button"
                        className="account_select_autocomplete_input-option_content-edit_button"
                        onMouseDown={(e) => handleEditClick(e, opt)}
                      >
                        <HiPencil />
                      </button>
                    )}
                    </div>
                </li>
              ))
              : inputValue &&
                onAddNew ? (
              <li
                onMouseDown={handleAddNew}
                className={`autocomplete__option autocomplete__option--add ${
                  activeIndex === 0 ? 'active' : ''
                }`}
              >
                + Add "{inputValue}"
              </li>
            ) : null}
          </ul>
        )}
      </div>
    )
  },
)
