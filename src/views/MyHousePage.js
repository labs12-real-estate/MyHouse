import React from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import MyHouseContent from '../components/dashboardContent/homeProfileContent/MyHouseContent';

function MyHousePage() {
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <MyHouseContent />
      </div>
    </div>
  );
}

export default MyHousePage;
