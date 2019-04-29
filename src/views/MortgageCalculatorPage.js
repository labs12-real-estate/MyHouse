import React from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import MortgageCalculatorContent from '../components/dashboardContent/mortgageCalculatorContent/MortgageCalculatorContent';

function MortgageCalculatorPage() {
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <MortgageCalculatorContent />
      </div>
    </div>
  );
}

export default MortgageCalculatorPage;
