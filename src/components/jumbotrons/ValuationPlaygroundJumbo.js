import React from 'react';
import { connect } from 'react-redux';

function ValuationPlaygroundJumbo({ newValue, upgradeROI, currentValue, currentUpgrade: { upgrade_cost, name } }) {
  return (
    <div className="valuation_playground_jumbo_container">
      <img src="" alt="" className="valuation_playground_jumbo_img" />
      <h2 className="valuation_playground_jumbo_title">48592 Jerome, Shelby Township, MI 48315</h2>
      <div className="valuation_playground_jumbo_prices_container">
        <span className="valuation_playground_jumbo_upgrade_info">Valuation</span>
        <span className="valuation_playground_jumbo_upgrade_numbers">{currentValue}</span>
        <span className="valuation_playground_jumbo_upgrade_info">Upgrade Cost Estimate</span>
        <span className="valuation_playground_jumbo_upgrade_numbers">{upgrade_cost}</span>
        <span className="valuation_playground_jumbo_upgrade_type">{name}</span>
        <span className="valuation_playground_jumbo_upgrade_info">Return on Invetsment</span>
        <span className="valuation_playground_jumbo_upgrade_numbers">{upgradeROI}</span>
        <span className="valuation_playground_jumbo_upgrade_type">{name}</span>
        <span className="valuation_playground_jumbo_upgrade_info">New Valuation Estimate</span>
        <span className="valuation_playground_jumbo_upgrade_numbers">{newValue}</span>
        <span className="valuation_playground_jumbo_upgrade_type">{name}</span>
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
