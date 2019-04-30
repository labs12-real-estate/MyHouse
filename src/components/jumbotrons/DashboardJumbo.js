import React from 'react';
import { ReactComponent as LocationLogo } from '../../assets/icons/location.svg';

function DashboardJumbo(props) {
  return (
    <div className="dashboard_jumbo">
      <div className="house_image" />
      <div className="address_value_flex">
        <div className="address">
          <LocationLogo className="logo" />
          <h3>{props.props.parcel_data_address}</h3>
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
