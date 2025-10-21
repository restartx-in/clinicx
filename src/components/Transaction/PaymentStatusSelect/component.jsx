import React, { useState, useEffect, useRef } from 'react';
import './style.scss';

const defaultPaymentStatuses = [
  { value: '', label: 'Select Status' },
  { value: 'paid', label: 'Paid' },
  { value: 'partial', label: 'Partial' },
  { value: 'pending', label: 'Pending' },
];

const PaymentStatusSelect = ({
  label,
  name,
  value,
  onChange,
  required = false,
  options = defaultPaymentStatuses,
  disabled = false,
  className = ''
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // State to track highlighted option
  const wrapperRef = useRef(null); // Ref for the component's outer div
  const listRef = useRef(null); // Ref for the dropdown list

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    if (open) {
      const currentIndex = options.findIndex((opt) => opt.value === value);
      setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
    }
  }, [open, options, value]);

  useEffect(() => {
    if (open && activeIndex >= 0 && listRef.current) {
      const activeItem = listRef.current.children[activeIndex];
      if (activeItem) {
        activeItem.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }, [activeIndex, open]);

  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });
    setOpen(false);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) {
          setOpen(true);
        } else {
          setActiveIndex((prevIndex) =>
            prevIndex < options.length - 1 ? prevIndex + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) {
          setOpen(true);
        } else {
          setActiveIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : options.length - 1
          );
        }
        break;
      case 'Enter':
      case ' ': // Allow spacebar to open/select
        e.preventDefault();
        if (open) {
          if (activeIndex >= 0) {
            handleSelect(options[activeIndex].value);
          }
        } else {
          setOpen(true);
        }
        break;
      case 'Escape':
        setOpen(false);
        break;
      default:
        break;
    }
  };

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || 'Select Status';

  return (
    <div
      ref={wrapperRef}
      className={`PaymentStatusSelect_form_group ${disabled ? 'disabled' : ''} ${className}`}
    >
      {label && (
        <label htmlFor={name} className="PaymentStatusSelect_label">
          {label}
        </label>
      )}
      <div
        className={`PaymentStatusSelect_container ${open ? 'open' : ''}`}
        onClick={() => !disabled && setOpen(!open)}
        onKeyDown={handleKeyDown} // Listen for key presses
        tabIndex={0} // Make the element focusable
        role="button"
      >
        <div className="PaymentStatusSelect_header">
          <span>{selectedLabel}</span>
          <span className="PaymentStatusSelect_chevron" />
        </div>

        {open && (
          <ul className="PaymentStatusSelect_list" ref={listRef}>
            {options.map((option, index) => (
              <li
                key={option.value}
                className={`PaymentStatusSelect_list_item ${
                  index === activeIndex ? 'active' : '' // Add 'active' class for highlighting
                }`}
                onMouseDown={() => handleSelect(option.value)}
                onMouseEnter={() => setActiveIndex(index)} // Sync hover with highlight
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PaymentStatusSelect;