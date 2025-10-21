import React, { useState, useEffect, useRef, forwardRef } from 'react';
import useEmployees from '@/hooks/api/employee/useEmployees';
import AddEmployee from '@/apps/user/pages/List/EmployeeList/components/AddEmployee'; // Adjust path if needed
import { HiPencil } from 'react-icons/hi2';
import HStack from '@/components/HStack';
import './style.scss';  
const EmployeeAutocompleteWithAddOption = forwardRef(
(
{
name,
value,
onChange,
label,
placeholder = 'Select an Employee',
required = false,
disabled = false,
className = '',
filters = {},
is_edit = true,
},
ref,
) => {
const { data: employees, isLoading, isError, error } = useEmployees(filters);
const [employeeOptions, setEmployeeOptions] = useState([]);
const [isModalOpen, setIsModalOpen] = useState(false);
const [modalMode, setModalMode] = useState('add');
const [selectedEmployee, setSelectedEmployee] = useState(null);

useEffect(() => {
  if (employees) {
    const options = employees.map((emp) => ({
      value: emp.id,
      label: emp.name,
    }));
    setEmployeeOptions(options);
  }
}, [employees]);

const handleAddNew = (typedValue) => {
  setSelectedEmployee({ name: typedValue });
  setModalMode('add');
  setIsModalOpen(true);
};

const handleEdit = (option) => {
  const employeeToEdit = employees.find((emp) => emp.id === option.value);
  if (employeeToEdit) {
    setSelectedEmployee(employeeToEdit);
    setModalMode('edit');
    setIsModalOpen(true);
  }
};

const handleCloseModal = () => {
  setIsModalOpen(false);
  setSelectedEmployee(null);
};

if (isLoading) {
  return (
    <input
      className="autocomplete__input"
      placeholder="Loading employees..."
      disabled
    />
  );
}

if (isError) {
  console.error('Failed to load employees:', error);
  return (
    <input
      className="autocomplete__input"
      placeholder="Error loading employees"
      disabled
    />
  );
}

return (
  <>
    <EmployeeSelectAutocompleteInput
      ref={ref}
      name={name}
      value={value}
      onChange={onChange}
      options={employeeOptions}
      label={label}
      placeholder={placeholder}
      required={required}
      disabled={disabled || isLoading}
      className={className}
      onAddNew={handleAddNew}
      onEdit={handleEdit}
      is_edit={is_edit}
    />
    <AddEmployee
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      mode={modalMode}
      selectedEmployee={selectedEmployee}
    />
  </>
);
},
);
EmployeeAutocompleteWithAddOption.displayName = 'EmployeeAutocompleteWithAddOption';
export default EmployeeAutocompleteWithAddOption;
const EmployeeSelectAutocompleteInput = forwardRef(
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
const [filteredOptions, setFilteredOptions] = useState([]);
const [inputValue, setInputValue] = useState('');
const [activeIndex, setActiveIndex] = useState(-1);
const dropdownRef = useRef(null);

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

const handleInputChange = (e) => {
  const currentInput = e.target.value;
  setInputValue(currentInput);
  setActiveIndex(-1);
  setShowDropdown(true);

  if (currentInput.length === 0) {
    setFilteredOptions(options);
    onChange({ target: { name, value: '' } });
  } else {
    const matches = options.filter((opt) =>
      opt.label.toLowerCase().includes(currentInput.toLowerCase()),
    );
    setFilteredOptions(matches);
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

const handleKeyDown = (e) => {
  if (disabled || !showDropdown) return;

  const showAddNew = filteredOptions.length === 0 && inputValue && onAddNew;
  const itemsCount = filteredOptions.length + (showAddNew ? 1 : 0);

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
      } else if (showAddNew) {
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
      onClick={() => {
        setFilteredOptions(options);
        setShowDropdown(true);
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
        {filteredOptions.length > 0 ? (
          filteredOptions.map((opt, index) => (
            <li
              key={opt.value}
              onMouseDown={() => handleSelectOption(opt)}
              className={`autocomplete__option ${
                index === activeIndex ? 'active' : ''
              }`}
            >
              <HStack justifyContent="space-between">
                <div className="employee_select_autocomplete_input-option_content">
                  <span>{opt.label}</span>
                </div>
                {is_edit && (
                  <button
                    type="button"
                    className="employee_select_autocomplete_input-option_content-edit_button"
                    onMouseDown={(e) => handleEditClick(e, opt)}
                  >
                    <HiPencil />
                  </button>
                )}
              </HStack>
            </li>
          ))
        ) : (
          inputValue &&
          onAddNew && (
            <li
              onMouseDown={handleAddNew}
              className={`autocomplete__option autocomplete__option--add ${
                activeIndex === 0 ? 'active' : ''
              }`}
            >
              + Add "{inputValue}"
            </li>
          )
        )}
      </ul>
    )}
  </div>
);
},
);
EmployeeSelectAutocompleteInput.displayName = 'EmployeeSelectAutocompleteInput';