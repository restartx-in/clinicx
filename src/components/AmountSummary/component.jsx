import React from 'react';
import './style.scss';

const AmountSummary = ({ 
  total = 0, 
  received = 0, 
  pending = 0,
  totalLabel = 'Total Amount',
  receivedLabel = 'Received Amount',
  pendingLabel = 'Pending Amount',
}) => {
  const formatValue = (value) => {
    return `₹${Number(value || 0).toLocaleString('en-IN')}`;
  };

  return (
    <div className="amount-summary">
      <div className="amount-summary__card amount-summary__card--total">
        <p className="amount-summary__label fs12 fw600">{totalLabel}</p>
        <h3 className="amount-summary__value fs14 fw600">{formatValue(total)}</h3>
      </div>
      <div className="amount-summary__card amount-summary__card--received">
        <p className="amount-summary__label fs12 fw600">{receivedLabel}</p>
        <h3 className="amount-summary__value fs14 fw600">{formatValue(received)}</h3>
      </div>
      <div className="amount-summary__card amount-summary__card--pending">
        <p className="amount-summary__label fs12 fw600">{pendingLabel}</p>
        <h3 className="amount-summary__value fs14 fw600">{formatValue(pending)}</h3>
      </div>
    </div>
  );
};

export default AmountSummary;