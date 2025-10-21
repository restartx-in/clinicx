import { useState, useEffect, forwardRef, useRef, useMemo } from 'react';
import { useExpenseTypes } from '@/hooks/api/expenseType/useExpenseTypes';
import AddExpenseType from '@/apps/user/pages/List/ExpenseTypeList/components/AddExpenseType';
import { HiPencil } from 'react-icons/hi2';

import './style.scss';

const ExpenseTypeAutoCompleteWithAddOption = forwardRef(
  (
    {
      name,
      value,
      onChange,
      label,
      placeholder = 'Select or add an expense type',
      required = false,
      disabled = false,
      className = '',
      filters = {},
      is_edit = true,
    },
    ref,
  ) => {
    const { data: expenseTypes, isLoading, isError, error, refetch } = useExpenseTypes(filters);
    const [expenseTypeOptions, setExpenseTypeOptions] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [selectedExpenseTypeInModal, setSelectedExpenseTypeInModal] = useState(null);

    useEffect(() => {
      if (expenseTypes) {
        const options = expenseTypes.map((expenseType) => ({
          value: expenseType.id,
          label: expenseType.name,
        }));
        setExpenseTypeOptions(options);
      }
    }, [expenseTypes]);

    const handleAddNew = (typedValue) => {
      setSelectedExpenseTypeInModal({ name: typedValue });
      setModalMode('add');
      setIsModalOpen(true);
    };

    const handleEdit = (option) => {
      const expenseTypeToEdit = expenseTypes.find(
        (type) => type.id === option.value,
      );
      if (expenseTypeToEdit) {
        setSelectedExpenseTypeInModal(expenseTypeToEdit);
        setModalMode('edit');
        setIsModalOpen(true);
      }
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedExpenseTypeInModal(null);
    };

    const handleExpenseTypeCreated = (newExpenseType) => {
      if (newExpenseType && newExpenseType.id) {
        refetch();
        onChange({ target: { name, value: newExpenseType.id } });
      }
      handleCloseModal();
    };

    const handleExpenseTypeUpdated = () => {
      refetch();
      handleCloseModal();
    };

    if (isLoading) {
      return (
        <InputField
          label={label}
          placeholder="Loading expense types..."
          disabled
        />
      );
    }

    if (isError) {
      console.error('Failed to load expense types:', error);
      return (
        <InputField
          label={label}
          placeholder="Error loading expense types"
          disabled
        />
      );
    }

    return (
      <>
        <ExpenseTypeSelectAutocompleteInput
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          options={expenseTypeOptions}
          label={label}
          placeholder={placeholder}
          required={required}
          disabled={disabled || isLoading}
          className={className}
          onAddNew={handleAddNew}
          onEdit={handleEdit}
          is_edit={is_edit && !disabled}
        />
        <AddExpenseType
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          mode={modalMode}
          selectedExpenseType={selectedExpenseTypeInModal}
          onExpenseTypeCreated={handleExpenseTypeCreated}
          onExpenseTypeUpdated={handleExpenseTypeUpdated}
        />
      </>
    );
  },
);
ExpenseTypeAutoCompleteWithAddOption.displayName = 'ExpenseTypeAutoCompleteWithAddOption';

const InputField = ({ label, ...props }) => (
  <div className="input_wrapper">
    {label && <label className="input_label">{label}</label>}
    <input className="input_field" {...props} />
  </div>
);

export default ExpenseTypeAutoCompleteWithAddOption;

const ExpenseTypeSelectAutocompleteInput = forwardRef(
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
    const [showDropdown, setShowDropdown] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(-1);
    const dropdownRef = useRef(null);
    const hasBeenFocused = useRef(false);

    useEffect(() => {
      const selectedOption = options.find((opt) => opt.value === value);
      setInputValue(selectedOption ? selectedOption.label : '');
    }, [value, options]);

    useEffect(() => {
      if (activeIndex >= 0 && dropdownRef.current) {
        const activeItem = dropdownRef.current.children[activeIndex];
        if (activeItem) {
          activeItem.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
          });
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
      const currentInput = e.target.value;
      setInputValue(currentInput);
      setActiveIndex(-1);
      setShowDropdown(true);

      if (currentInput.length === 0) {
        onChange({ target: { name, value: '' } });
      }
    };

    const handleSelectOption = (option) => {
      onChange({ target: { name, value: option.value } });
      setInputValue(option.label);
      setShowDropdown(false);
    };

    const handleAddNew = () => {
      if (onAddNew) {
        onAddNew(inputValue);
      }
      setShowDropdown(false);
    };

    const handleEditClick = (e, option) => {
      e.stopPropagation();
      if (onEdit) {
        onEdit(option);
        setShowDropdown(false);
      }
    };

    const handleFocus = () => {
      if (hasBeenFocused.current) {
        setShowDropdown(true);
      }
      hasBeenFocused.current = true;
    };

    const handleKeyDown = (e) => {
      if (disabled || !showDropdown) return;

      const itemsCount = filteredOptions.length + (showAddNewOption ? 1 : 0);
      if (itemsCount === 0) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prevIndex) => (prevIndex + 1) % itemsCount);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex(
            (prevIndex) => (prevIndex - 1 + itemsCount) % itemsCount,
          );
          break;
        case 'Enter':
          if (activeIndex < 0) return;
          e.preventDefault();
          if (activeIndex < filteredOptions.length) {
            handleSelectOption(filteredOptions[activeIndex]);
          } else if (showAddNewOption) {
            handleAddNew();
          }
          break;
        case 'Escape':
          setShowDropdown(false);
          break;
        default:
          break;
      }
    };

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
            setShowDropdown(true);
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
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt, index) => (
                <li
                  key={opt.value}
                  onMouseDown={() => handleSelectOption(opt)}
                  className={`autocomplete__option ${
                    index === activeIndex ? 'active' : ''
                  }`}
                >
                  <div className="expensetype_select_autocomplete_input-option_content">
                    <span>{opt.label}</span>
                    {is_edit && !disabled && (
                      <button
                        type="button"
                        className="expensetype_select_autocomplete_input-option_content-edit_button"
                        onMouseDown={(e) => handleEditClick(e, opt)}
                      >
                        <HiPencil />
                      </button>
                    )}
                  </div>
                </li>
              ))
            ) : showAddNewOption ? (
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
    );
  },
);

ExpenseTypeSelectAutocompleteInput.displayName = 'ExpenseTypeSelectAutocompleteInput';