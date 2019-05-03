import React, { useEffect } from 'react';
import { getHouse } from '../actions/houseActions';
import { connect } from 'react-redux';
import DashboardTopBar from '../components/navigation/DashboardTopBar';
import SideBar from '../components/navigation/SideBar';
import ValuationPlaygroundContent from '../components/dashboardContent/valuationPlaygroundContent/ValuationPlaygroundContent';

function ValuationPlaygroundPage({ error, house, getHouse }) {
  useEffect(() => {
    getHouse();
  }, [getHouse]);
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
  ({ houseReducer }) => ({
    house: houseReducer.house,
    error: houseReducer.error
  }),
  { getHouse }
)(ValuationPlaygroundPage);
