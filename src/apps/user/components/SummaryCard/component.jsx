import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const SummaryCard = ({ icon: Icon, label, value, theme, subStats }) => {
  return (
    <div className={`summary-card summary-card--${theme}`}>
      <div className="summary-card__header">
        <div className="summary-card__icon-wrapper">
          {Icon && <Icon className="summary-card__icon" />}
        </div>
        <span className="summary-card__label fs14">{label}</span>
        <span className="summary-card__value fs18 fw600">{value}</span>
      </div>

      {subStats && subStats.length > 0 && (
        <div className="summary-card__sub-stats">
          {subStats.map((stat, index) => (
            <div
              key={index}
              className={`
                summary-card__stat-item 
                ${stat.onClick ? 'summary-card__stat-item--clickable' : ''}
                ${stat.align === 'end' ? 'summary-card__stat-item--align-end' : ''}
                ${stat.align === 'center' ? 'summary-card__stat-item--align-center' : ''}
              `}
              onClick={stat.onClick}
            >
              <span className="summary-card__stat-item-label fs12">{stat.label}</span>
              <span className="summary-card__stat-item-value fs14 fw500">{stat.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

SummaryCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  theme: PropTypes.string.isRequired,
  subStats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      onClick: PropTypes.func,
      align: PropTypes.oneOf(['start', 'center', 'end']),
    })
  ),
}

SummaryCard.defaultProps = {
  subStats: [],
}

export default SummaryCard