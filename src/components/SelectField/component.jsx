import React, { useState, useRef, useEffect } from 'react'
import './style.scss'

const SelectField = ({
  name,
  value,
  onChange,
  options = [],
  label,
  placeholder = 'Select...',
  disabled = false,
  className = '',
  // We are not using `required` as it's a native attribute, but keeping it for prop compatibility
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  // Close dropdown when clicking outside of the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  // Find the label for the currently selected value
  const getSelectedLabel = () => {
    if (!value) {
      return placeholder
    }
    const selectedOption = options.find((opt) =>
      typeof opt === 'string' ? opt === value : opt.value === value
    )
    // Return the option's label or the option itself if it's a string
    return selectedOption
      ? typeof selectedOption === 'string'
        ? selectedOption
        : selectedOption.label
      : placeholder
  }

  const handleOptionClick = (optionValue) => {
    // To maintain compatibility with standard form handlers,
    // we simulate the event object that a native <select> would provide.
    const simulatedEvent = {
      target: {
        name: name,
        value: optionValue,
      },
    }
    onChange(simulatedEvent)
    setIsOpen(false) // Close dropdown after selection
  }

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  // Combine all necessary class names
  const wrapperClasses = [
    'custom_select_wrapper',
    className,
    isOpen ? 'open' : '',
    disabled ? 'disabled' : '',
  ]
    .join(' ')
    .trim()

  return (
    <div className={wrapperClasses} ref={wrapperRef} {...rest}>
      {label && (
        <label htmlFor={name} className="custom_select_label">
          {label}
        </label>
      )}

      <div
        className="custom_select_header"
        onClick={toggleDropdown}
        tabIndex={disabled ? -1 : 0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="custom_select_header_title">{getSelectedLabel()}</span>
        {/* The chevron is created with CSS borders */}
        <i className="custom_select_chevron" />
      </div>

      {isOpen && (
        <ul className="custom_select_list" role="listbox">
          {options.map((opt) => {
            const optionValue = typeof opt === 'string' ? opt : opt.value
            const optionLabel = typeof opt === 'string' ? opt : opt.label

            return (
              <li
                key={optionValue}
                className={`custom_select_list_item ${
                  value === optionValue ? 'selected' : ''
                }`}
                onClick={() => handleOptionClick(optionValue)}
                role="option"
                aria-selected={value === optionValue}
              >
                {optionLabel}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default SelectField