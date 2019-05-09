import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import { toggleSideBar } from '../actions/displayActions';
import { getUserHouse, getUserSession } from '../actions/usersActions';

function DashboardContainer({ isOpen, toggleSideBar, getUserHouse, username, children, getUserSession }) {
  useEffect(() => {
    username !== '' && getUserHouse(username);
  }, [getUserHouse, username]); // get house data from AWS server on first render
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
  ({ authReducer, displayReducer }) => ({ isOpen: displayReducer.isOpen, username: authReducer.user.username }),
  { toggleSideBar, getUserHouse, getUserSession }
)(DashboardContainer);
