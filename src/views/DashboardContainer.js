import React, { useState } from 'react';
import { connect } from 'react-redux';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import { toggleSideBar } from '../actions/displayActions';

function DashboardContainer({ isOpen, toggleSideBar, children }) {
  return (
    <div>
      <DashboardTopBar toggleSideBar={toggleSideBar} />
      <div className="dashboard_page_container">
        <SideBar hide={!isOpen} />
        {children}
      </div>
    </div>
  );
}

export default connect(
  ({ displayReducer }) => ({ isOpen: displayReducer.isOpen }),
  { toggleSideBar }
)(DashboardContainer);
