import React from 'react';
import DashboardContainer from './DashboardContainer';
import MortgageCalculatorContent from '../components/dashboardContent/mortgageCalculatorContent/MortgageCalculatorContent';

function MortgageCalculatorPage() {
  return (
    <DashboardContainer>
      <MortgageCalculatorContent />
    </DashboardContainer>
  );
}

export default MortgageCalculatorPage;
