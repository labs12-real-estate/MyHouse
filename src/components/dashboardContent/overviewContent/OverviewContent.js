import React from 'react';
import DashboardJumbo from '../../jumbotrons/DashboardJumbo';
import CardsContainer from './CardsContainer';

function OverviewContent(house) {
  console.log(house);
  return (
    <div className="dashboard_content_container">
      <h1>Overview</h1>
      <DashboardJumbo />
      <CardsContainer />
    </div>
  );
}
export default OverviewContent;
