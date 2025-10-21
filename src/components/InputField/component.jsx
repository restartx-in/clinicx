import React from 'react';
import './style.scss';

const InputField = ({
  name,
  value = '',
  onChange,
  placeholder = '',
  type = 'text',
  required = false,
  disabled = false,
  className = '',
  label,
  isLabel = true, 
  ...rest
}) => {
  return (
    <div className={`input_wrapper ${className} ${disabled ? 'disabled' : ''}`}>
      {isLabel && label && (
        <label htmlFor={name} className="input_label">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        value={value ?? ''}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        disabled={disabled}
        className="input_field" 
        {...rest}
      />
    </div>
  );
};

export default InputField;