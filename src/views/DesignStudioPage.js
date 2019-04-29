import React from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import DesignStudioContent from '../components/dashboardContent/designStudioContent/DesignStudioContent';

function DesignStudioPage() {
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <DesignStudioContent />
      </div>
    </div>
  );
}

export default DesignStudioPage;
