import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import { toggleSideBar } from '../actions/displayActions';
import { getUserPhotos } from '../actions/storageActions';
import { getUserHouse } from '../actions/usersActions';

function DashboardContainer({ isOpen, toggleSideBar, getUserHouse, username, children, getUserPhotos }) {
  useEffect(() => {
    if (username !== '') {
      getUserHouse(username);
      getUserPhotos();
    }
  }, [getUserHouse, getUserPhotos, username]); // get house data from AWS server on first render
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
  { toggleSideBar, getUserHouse, getUserPhotos }
)(DashboardContainer);
