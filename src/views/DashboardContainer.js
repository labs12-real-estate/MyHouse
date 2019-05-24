import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import { toggleSideBar, closeSideBar } from '../actions/displayActions';
import { getUserPhotos } from '../actions/storageActions';
import { getUserHouse } from '../actions/usersActions';

function DashboardContainer({ isOpen, toggleSideBar, closeSideBar, getUserHouse, username, children, getUserPhotos }) {
  useEffect(() => {
    if (username !== '') {
      getUserHouse(username);
      getUserPhotos();
      window.scrollTo(0, 0);
    }
  }, [getUserHouse, getUserPhotos, username]); // get house data from AWS server on first render
  useEffect(() => {
    // I think this could be refactored:
    // Currently this container gets re-rendered on every route change.
    // If we nest the routes _inside_ of the container we would only re-render what changes
    // (what is inside the container), but that would break this `closeSideBar` logic.
    closeSideBar();
  }, []); // eslint-disable-line
  useEffect(() => {
    // Clear wizard form data when user finish registering
    localStorage.removeItem('wizardForm');
    localStorage.removeItem('initialData');
  }, []);
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
  { toggleSideBar, closeSideBar, getUserHouse, getUserPhotos }
)(DashboardContainer);
