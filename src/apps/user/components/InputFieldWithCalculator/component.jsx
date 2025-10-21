import React, { useState, useRef, useEffect } from 'react';
import { IoCalculator } from 'react-icons/io5';
import { BsArrowReturnLeft } from 'react-icons/bs';
import './style.scss';

const InputFieldWithCalculator = ({
  value: valueProp,
  onChange,
  name,
  label,
  disabled = false,
  maxLength = 11,
  decimalLength = 2,
  ...rest
}) => {
  const [calc, setCalc] = useState('');
  const [showPopover, setShowPopover] = useState(false);

  const wrapperRef = useRef(null);
  const popoverInputRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setShowPopover(false);
    }
  }, [disabled]);
  const handleCalculate = () => {
    if (calc.trim() === '') return
    try {
      // eslint-disable-next-line no-eval
      const result = eval(calc)
      if (typeof result === 'number' && !isNaN(result)) {
        const formattedResult = Number(result.toFixed(decimalLength)).toString()
        // Call parent's onChange directly. Do not set local state.
        onChange?.({ target: { name, value: formattedResult } })
        setCalc('')
        setShowPopover(false)
      }
    } catch (error) {
      console.error('Invalid calculation:', error)
    }
  }

  const handleMainChange = (event) => {
    let val = event.target.value

    // Allow only digits and at most one decimal point
    if (!/^\d*\.?\d*$/.test(val)) {
      return // reject invalid input
    }

    if (val === '') {
      onChange?.({ target: { name, value: '' } })
      return
    }

    // Prevent leading zeros unless decimal
    if (!val.startsWith('0.') && val.length > 1 && val.startsWith('0')) {
      val = val.slice(1)
    }

    // Enforce decimal length
    val = val
      .toString()
      .split('.')
      .slice(0, 2)
      .map((el, i) => (i ? el.slice(0, decimalLength) : el))
      .join('.')

    // Call parent's onChange directly with the formatted value.
    onChange?.({ target: { name, value: val } })
  }

  const handleCalcKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleCalculate()
    }
  }

  const handleIconClick = () => {
    if (disabled) return
    setShowPopover((prev) => !prev)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowPopover(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (showPopover) {
      popoverInputRef.current?.focus()
    }
  }, [showPopover])

  return (
   <div
      className={`calc-input-wrapper ${disabled ? 'disabled' : ''}`}
      ref={wrapperRef}
    >      {label && (
        <label htmlFor={name} className="input-label fw600">
          {label}
        </label>
      )}

      <div className="main-input-container">
        <input
          {...rest} // Spread the rest of the props here
          inputMode="decimal"
          pattern="[0-9]*"
          value={valueProp ?? ''}
          maxLength={maxLength}
          onChange={handleMainChange}
          name={name}
          id={name}
          disabled={disabled}
          type="text"
          className="input_field_with_calc"
        />
        <IoCalculator
          className={`calculator-icon ${disabled ? 'disabled' : ''}`}
          onClick={handleIconClick}
        />
      </div>

      {showPopover && (
        <div className="popover">
          <input
            ref={popoverInputRef}
            type="text"
            value={calc}
            placeholder="e.g. 10+5*2"
            onChange={(e) => {
              const newVal = e.target.value
              if (/^[0-9+\-*/().\s]*$/.test(newVal)) {
                setCalc(newVal)
              }
            }}
            onKeyDown={handleCalcKeyDown}
            className="popover-input"
          />
          <button
            type="button"
            className="calculate-btn"
            onClick={handleCalculate}
            aria-label="Calculate"
          >
            <BsArrowReturnLeft />
          </button>
        </div>
      )}
    </div>
  )
}

export default InputFieldWithCalculator
