import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserHouse } from '../actions/usersActions';
import DashboardContainer from './DashboardContainer';
import OverviewContent from '../components/dashboardContent/overviewContent/OverviewContent';

function OverviewPage({ username, error, house, getUserHouse }) {
  useEffect(() => {
    username !== '' && getUserHouse(username);
  }, [getUserHouse, username]); // get house data from AWS server on first render
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
