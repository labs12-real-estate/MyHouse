import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getHouse } from '../actions/houseActions';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import OverviewContent from '../components/dashboardContent/overviewContent/OverviewContent';

function OverviewPage({ error, house, getHouse }) {
  useEffect(getHouse, []); // get house data from AWS server on first render
  return (
    <div>
      <DashboardTopBar />
      <div className="dashboard_page_container">
        <SideBar />
        <div className="dashboard_content_container">
          <OverviewContent />
        </div>
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
