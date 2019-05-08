import React from 'react';
import MortgageCalculator from './MortgageCalculator';

function MortgageCalculatorContent() {
  return (
    <div className="dashboard_content_container">
      <h1 className="dashboard_content_title">Mortgage Calculator</h1>
      <MortgageCalculator />
    </div>
  );
}

export default MortgageCalculatorContent;
