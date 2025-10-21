import React from 'react'
import ActionsMenu from '@/apps/user/components/ActionsMenu' 

import './style.scss'

const ListItem = ({
  title,
  subtitle,
  statusText,
  statusVariant = 'default',
  amount,
  balanceText,
  onView,
  onEdit,
  onDelete,
  amountColor,
}) => {
  const hasActions = onView || onEdit || onDelete

  return (
    <div className="list-item">
      <div className="list-item__left">
        <div className="list-item__title fs18 fw600">{title}</div>
        <div className="list-item__subtitle fs18">{subtitle}</div>
        {statusText && (
          <div
            className={`list-item__status list-item__status fs12 fw500${statusVariant}`}
          >
            {statusText}
          </div>
        )}
      </div>

      <div className="list-item__right">
        {amount !== undefined && (
          <div className="list-item__amount fs13 fw400" style={{ color: amountColor }}>
            {amount}
          </div>
        )}
        {balanceText && (
          <div className="list-item__balance fs14 ">{balanceText}</div>
        )}
      </div>

      {/* Replace the old actions block with the new self-contained component */}
      {hasActions && (
        <ActionsMenu onView={onView} onEdit={onEdit} onDelete={onDelete} />
      )}
    </div>
  )
}

export default ListItem