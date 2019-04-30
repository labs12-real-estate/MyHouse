import React from 'react';
import { ReactComponent as LocationLogo } from '../../assets/icons/location.svg';

function DashboardJumbo() {
  return (
    <div className="dashboard_jumbo">
      <div className="house_image" />
      <div className="address_value_flex">
        <div className="address">
          <LocationLogo className="logo" />
          <h3>48592 Jeorome, Shelby Township, MI 48315</h3>
        </div>
        <div className="value">
          <h4>Valuation</h4>
          <h1>$505,777</h1>
        </div>
      </div>
    </div>
  );
}

export default DashboardJumbo;
