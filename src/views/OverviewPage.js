import React, { useEffect } from 'react';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import OverviewContent from '../components/dashboardContent/overviewContent/OverviewContent';
import { connect } from 'react-redux';
import { getHouse } from '../actions/houseActions';

function OverviewPage({ error, house, getHouse }) {
  useEffect(getHouse, []);
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <OverviewContent {...house} />
      </div>
    </div>
  );
}

export default connect(
  ({ houseReducer }) => ({
    house: houseReducer.house,
    error: houseReducer.error
  }),
  { getHouse }
)(OverviewPage);
