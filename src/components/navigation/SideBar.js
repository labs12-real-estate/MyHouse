import React from 'react';
import SideBarNavItem from './SideBarNavItem';
import { dashboardSidebarData } from '../../dummy-data-structures/dashboard-sidebar-data';

function SideBar() {
  return (
    <div className="dashboard_sidebar_container">
      {dashboardSidebarData.map(navItem => {
        return <SideBarNavItem key={navItem.id} navItem={navItem} />;
      })}
    </div>
  );
}

export default SideBar;
