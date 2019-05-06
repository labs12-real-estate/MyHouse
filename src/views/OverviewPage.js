import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserHouse } from '../actions/usersActions';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import OverviewContent from '../components/dashboardContent/overviewContent/OverviewContent';

function OverviewPage({ username, error, house, getUserHouse }) {
  useEffect(() => {
    getUserHouse(username);
  }, [getUserHouse, username]); // get house data from AWS server on first render
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <div className="dashboard_content_container">
          <OverviewContent {...house} />
        </div>
      </div>
    </div>
  );
}

export default connect(
  ({ authReducer, houseReducer }) => ({
    house: houseReducer.house,
    error: houseReducer.error,
    username: authReducer.username
  }),
  { getUserHouse }
)(OverviewPage);
