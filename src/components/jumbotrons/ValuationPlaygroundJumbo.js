import React from 'react';
import { connect } from 'react-redux';
import { commaSeparator } from '../../helper-functions/display-functions';

import houseBG from '../../assets/images/house-bg.jpg';

function ValuationPlaygroundJumbo({ newValue, upgradeROI, currentValue, currentUpgrade: { upgrade_cost, name } }) {
  return (
    <div className="valuation_playground_jumbo_container">
      <img src={houseBG} alt="house" className="valuation_playground_jumbo_img" />
      <h2 className="valuation_playground_jumbo_title">
        <i className="fas fa-map-marker-alt" /> 48592 Jerome, Shelby Township, MI 48315
      </h2>
      <div className="valuation_playground_jumbo_prices_container">
        <div className="valuation_playground_jumbo_row">
          <span className="valuation_playground_jumbo_upgrade_info">Valuation</span>
          <span className="valuation_playground_jumbo_upgrade_numbers">{commaSeparator(currentValue)}</span>
        </div>
        <span className="valuation_playground_jumbo_upgrade_type">{name}</span>
        <div className="valuation_playground_jumbo_row">
          <span className="valuation_playground_jumbo_upgrade_info">Upgrade Cost Estimate</span>
          <span className="valuation_playground_jumbo_upgrade_numbers">{upgrade_cost ? commaSeparator(upgrade_cost) : '--'}</span>
        </div>
        {/* <span className="valuation_playground_jumbo_upgrade_type">{name}</span> */}
        <div className="valuation_playground_jumbo_row">
          <span className="valuation_playground_jumbo_upgrade_info">Return on Invetsment</span>
          <span className="valuation_playground_jumbo_upgrade_numbers">{upgradeROI ? commaSeparator(upgradeROI) : '--'}</span>
        </div>
        {/* <span className="valuation_playground_jumbo_upgrade_type">{name}</span> */}
        <div className="valuation_playground_jumbo_row">
          <span className="valuation_playground_jumbo_upgrade_info">New Valuation Estimate</span>
          <span className="valuation_playground_jumbo_upgrade_numbers">{newValue ? commaSeparator(newValue) : '--'}</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ playgroundReducer }) => {
  return playgroundReducer;
};

export default connect(
  mapStateToProps,
  {}
)(ValuationPlaygroundJumbo);
