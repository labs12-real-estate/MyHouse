import React from 'react';
import { commaSeparator } from '../../helper-functions/display-functions';

function DashboardJumbo({ address, valuation, houseBackgroundPhoto }) {
  return (
    <div className="dashboard_jumbo">
      <div className="house_image" />
      <div className="address_value_flex">
        <div className="address">
          <i className="fas fa-map-marker-alt" />
          <h3>{address}</h3>
        </div>
        <div className="value">
          <h4>Valuation</h4>
          <h1>{commaSeparator(valuation)}</h1>
        </div>
      </div>
    </div>
  );
}

export default DashboardJumbo;
