import React from 'react';
import MortgageCalculator from "mortgage-calculator-react";

function MortgageCalculatorContent() {
  return (
    <div className="dashboard_content_container">
      <h1 className="dashboard_content_title">Mortgage Calculator</h1>
      <div className="mortgage_content_div"> <MortgageCalculator /></div>
     
    </div>
  );
}

export default MortgageCalculatorContent;
