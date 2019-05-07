import React, { useState } from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';

export default ({ children }) => {
  const [hideSideBar, setHideSideBar] = useState(true);
  const toggleSideBar = _e => setHideSideBar(h => !h);
  return (
    <div>
      <DashboardTopBar toggleSideBar={toggleSideBar} />
      <div className="dashboard_page_container">
        <SideBar hide={hideSideBar} />
        {children}
      </div>
    </div>
  );
};
