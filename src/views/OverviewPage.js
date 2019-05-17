import React from 'react';
import { connect } from 'react-redux';
import { steps, useSteps } from '../helper-functions/react-joyride-steps-data';
import { getUserHouse } from '../actions/usersActions';
import ReactJoyRide from 'react-joyride';
import DashboardContainer from './DashboardContainer';
import OverviewContent from '../components/dashboardContent/overviewContent/OverviewContent';

function OverviewPage({ username, error, house, getUserHouse }) {
  const [step, run, handleJoyrideCallback] = useSteps(steps);
  return (
    <DashboardContainer>
      <ReactJoyRide
        callback={handleJoyrideCallback}
        continuous
        run={run}
        showSkipButton
        steps={step}
        styles={{ options: { zIndex: 10000 }, buttonClose: { display: 'none' } }}
        disableOverlayClose
      />
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
