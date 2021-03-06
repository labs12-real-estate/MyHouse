import React from 'react';
import { connect } from 'react-redux';
import { commaSeparator } from '../../helper-functions/display-functions';

function ValuationPlaygroundJumbo({ newValue, upgradeROI, currentValue, currentUpgrade: { upgrade_cost, name }, address }) {
  return (
    <div className="valuation_playground_jumbo_container">
      <div alt="house" className="valuation_playground_jumbo_img" />
      <h2 className="valuation_playground_jumbo_title">
        <i className="fas fa-map-marker-alt" /> {address}
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
        <div className="valuation_playground_jumbo_row">
          <span className="valuation_playground_jumbo_upgrade_info">Valuation Effect</span>
          <span className="valuation_playground_jumbo_upgrade_numbers">{newValue ? commaSeparator(newValue - currentValue) : '--'}</span>
        </div>

        <div className="valuation_playground_jumbo_row">
          <span className="valuation_playground_jumbo_upgrade_info">Return on Investment</span>

          <span className="valuation_playground_jumbo_upgrade_numbers">{upgradeROI ? `${Math.round(upgradeROI * 100)}%` : '--'}</span>
        </div>
        <div className="valuation_playground_jumbo_row">
          <span className="valuation_playground_jumbo_upgrade_info">New Valuation Estimate</span>
          <span className="valuation_playground_jumbo_upgrade_numbers">{newValue ? commaSeparator(newValue) : '--'}</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({
  playgroundReducer: {
    newValue,
    upgradeROI,
    currentValue,
    currentUpgrade: { upgrade_cost, name }
  },
  houseReducer
}) => {
  return {
    newValue,
    upgradeROI,
    currentValue,
    currentUpgrade: { upgrade_cost, name },
    address: houseReducer.house.address
  };
};

export default connect(
  mapStateToProps,
  {}
)(ValuationPlaygroundJumbo);
