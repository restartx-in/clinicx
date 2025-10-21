import React, { useState, useEffect, useRef, forwardRef } from 'react';
import './style.scss';

const Select = forwardRef((
  {
    name,
    value,
    onChange,
    options,
    required = false,
    disabled = false,
    className = '',
    placeholder = 'Select',
    label,
  },
  ref,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // To track highlighted option
  const wrapperRef = useRef(null);
  const listRef = useRef(null); // Ref for the dropdown list to manage scrolling

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // When the dropdown opens, highlight the currently selected item or the first item
  useEffect(() => {
    if (isOpen) {
      const currentIndex = options.findIndex((opt) => opt.value === value);
      setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    }
  }, [isOpen, options, value]);

  // Scroll the highlighted item into view
  useEffect(() => {
    if (isOpen && activeIndex >= 0 && listRef.current) {
      const activeItem = listRef.current.children[activeIndex];
      if (activeItem) {
        activeItem.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }, [activeIndex, isOpen]);

  const handleOptionClick = (optionValue) => {
    setIsOpen(false);
    if (onChange) {
      const syntheticEvent = {
        target: { name, value: optionValue },
      };
      onChange(syntheticEvent);
    }
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setActiveIndex((prevIndex) =>
            prevIndex < options.length - 1 ? prevIndex + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setActiveIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : options.length - 1
          );
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (isOpen) {
          if (activeIndex >= 0) {
            handleOptionClick(options[activeIndex].value);
          }
        } else {
          setIsOpen(true);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const getSelectedLabel = () => {
    const selectedOption = options.find((opt) => opt.value === value);
    return selectedOption ? selectedOption.label : placeholder;
  };

  return (
    <div
      className={`custom_select_wrapperr ${className} ${disabled ? 'disabled' : ''}`}
      ref={wrapperRef}
    >
      {label && <label className="custom_select_label">{label}</label>}
      <div
        ref={ref}
        className="custom_select_headerr"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown} // Attach keydown listener
        role="button"
        tabIndex={0}
      >
        <span className="custom_select_headerr_title fs14">{getSelectedLabel()}</span>
        <span className={`custom_select_chevronn ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && (
        <ul className="custom_select_listt" ref={listRef}>
          {options.map((opt, index) => (
            <li
              key={opt.value}
              className={`custom_select_list_itemm ${
                value === opt.value ? 'selected' : ''
              } ${index === activeIndex ? 'active' : ''}`} // Add active class for highlight
              onClick={() => handleOptionClick(opt.value)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;