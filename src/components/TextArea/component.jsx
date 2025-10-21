import React from 'react';
import './style.scss';

const TextArea = ({
  name,
  value = '',
  onChange,
  placeholder = '',
  required = false,
  disabled = false,
  label,
  isLabel = false,
  className = '', 
  ...rest
}) => (
  <div className={`textarea_wrapper ${className} ${disabled ? 'disabled' : ''}`}>
    {isLabel && label && (
      <label htmlFor={name} className="text_area-label">
        {label}
      </label>
    )}
    <textarea
      id={name}
      name={name}
      value={value ?? ''}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled} 
      className="text_area" 
      {...rest}
    />
  </div>
);

export default TextArea;