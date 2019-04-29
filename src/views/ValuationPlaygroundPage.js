import React from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import ValuationPlaygroundContent from '../components/dashboardContent/valuationPlaygroundContent/ValuationPlaygroundContent';

function ValuationPlaygroundPage() {
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <ValuationPlaygroundContent />
      </div>
    </div>
  );
}

export default ValuationPlaygroundPage;
