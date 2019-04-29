import React from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import OverviewContent from '../components/dashboardContent/overviewContent/OverviewContent';

function OverviewPage() {
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <OverviewContent />
      </div>
    </div>
  );
}

export default OverviewPage;
