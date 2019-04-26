import React from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';

function OverviewPage() {
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <h1>OverviewPageContent</h1>
      </div>
    </div>
  );
}

export default OverviewPage;
