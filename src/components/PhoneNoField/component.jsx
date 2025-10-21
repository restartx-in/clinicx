import React, { useState, forwardRef, useEffect } from 'react'; 
import './style.scss'; 

const PhoneNoField = forwardRef(
  (
    {
      name,
      value = '',
      onChange,
      placeholder = '',
      required = false,
      disabled = false,
    },
    ref,
  ) => {
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
      if (disabled) {
        setErrorMessage('');
      }
    }, [disabled]);

    const handleInputChange = (event) => {
      let newValue = event.target.value;
      newValue = newValue.replace(/\D/g, '');

      if (newValue.length > 10) {
        newValue = newValue.slice(0, 10);
      }

      onChange({
        target: { value: newValue, name },
      });

      if (newValue && newValue.length !== 10) {
        setErrorMessage('Please enter exactly 10 digits.');
      } else {
        setErrorMessage('');
      }
    };

    return (
      <div className={`phone_no_field ${disabled ? 'disabled' : ''}`}>
        <input
          ref={ref}
          type="text"
          id="mobilephone"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          required={required}
          disabled={disabled}
          inputMode="numeric"
          maxLength={10}
          className={`${errorMessage ? 'phone_no_field__input-error' : ''}`}
        />
        {!disabled && errorMessage && (
          <div className="phone_no_field-error_message fs12 ">
            <span>!</span>
            {errorMessage}
          </div>
        )}
      </div>
    );
  },
);

PhoneNoField.displayName = 'PhoneNoField';

export default PhoneNoField;