import React from 'react';
import { connect } from 'react-redux';
import { getUserHouse } from '../actions/usersActions';
import DashboardContainer from './DashboardContainer';
import OverviewContent from '../components/dashboardContent/overviewContent/OverviewContent';

function OverviewPage({ username, error, house, getUserHouse }) {
  return (
    <DashboardContainer>
      <OverviewContent {...house} />
    </DashboardContainer>
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
