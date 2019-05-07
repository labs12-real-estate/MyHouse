import React, { useEffect } from 'react';
import { getUserHouse } from '../actions/usersActions';
import { connect } from 'react-redux';
import DashboardContainer from './DashboardContainer';
import ValuationPlaygroundContent from '../components/dashboardContent/valuationPlaygroundContent/ValuationPlaygroundContent';

function ValuationPlaygroundPage({ error, house, username, getUserHouse }) {
  useEffect(() => {
    getUserHouse(username);
  }, [getUserHouse]);
  return (
    <DashboardContainer>
      <ValuationPlaygroundContent {...house} />
    </DashboardContainer>
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
