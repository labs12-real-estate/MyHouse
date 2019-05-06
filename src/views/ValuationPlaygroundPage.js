import React, { useEffect } from 'react';
import { getUserHouse } from '../actions/usersActions';
import { connect } from 'react-redux';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import ValuationPlaygroundContent from '../components/dashboardContent/valuationPlaygroundContent/ValuationPlaygroundContent';

function ValuationPlaygroundPage({ error, username, house, getUserHouse }) {
  useEffect(() => {
    getUserHouse();
  }, [getUserHouse, username]);
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <ValuationPlaygroundContent {...house} />
      </div>
    </div>
  );
}

export default connect(
  ({ houseReducer, authReducer }) => ({
    house: houseReducer.house,
    error: houseReducer.error,
    username: authReducer.username
  }),
  { getUserHouse }
)(ValuationPlaygroundPage);
