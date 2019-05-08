import React, { useState, useEffect } from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import {getUserHouse} from '../actions/usersActions';
import {connect} from 'react-redux';



 function DashboardContainer ({getUserHouse, username, children }) {
  useEffect(() => {
    username !== '' && getUserHouse(username);
  }, [getUserHouse, username]); // get house data from AWS server on first render
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

export default connect(
  ({ authReducer }) => ({
    username: authReducer.username
  }),
  { getUserHouse }
)(DashboardContainer);