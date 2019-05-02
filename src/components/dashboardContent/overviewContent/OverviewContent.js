import React from 'react';
import DashboardJumbo from '../../jumbotrons/DashboardJumbo';
import CardsContainer from './CardsContainer';

function OverviewContent(house) {
  return (
    <div>
      <h1 className="dashboard_content_title">Overview</h1>
      <DashboardJumbo houseBackgroundPhoto={house.houseBackgroundPhoto} address={house.address} valuation={house.valuation} />
      <CardsContainer countertops={house.countertops} parcelData={house.parcelData} />
    </div>
  );
}
export default OverviewContent;
