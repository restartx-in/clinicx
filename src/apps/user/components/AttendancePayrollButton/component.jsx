import React from 'react'
import './style.scss'

const AttendancePayrollButton = ({ icon, children, className, ...rest }) => {
  return (
    <button className={`action-button-component ${className || ''}`} {...rest}>
      {icon}
      <span>{children}</span>
    </button>
  )
}

export default AttendancePayrollButton
