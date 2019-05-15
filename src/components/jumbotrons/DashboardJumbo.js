import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { commaSeparator } from '../../helper-functions/display-functions';

function DashboardJumbo({ address, valuation, fetching }) {
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
          <h1>{fetching ? <Loader height={25} width={25} type="TailSpin" color="#22ab00" /> : commaSeparator(valuation)}</h1>
        </div>
      </div>
    </div>
  );
}

export default connect(
  ({ houseReducer: { fetching } }) => {
    return {
      fetching
    };
  },
  {}
)(DashboardJumbo);
