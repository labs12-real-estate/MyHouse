import React from 'react';
import { connect } from 'react-redux';
import { setMobileUpgrade } from '../../../actions/playgroundActions';
import ValuationPlaygroundSelector from './ValuationPlaygroundSelector';

function ValuationPlaygroundMobileUpgradeList({ masterUpgradeList, setMobileUpgrade }) {
  return (
    <div className="valuation_playground_upgrades_container" style={{ marginBottom: '50px' }}>
      <ValuationPlaygroundSelector upgradeList={masterUpgradeList} setCurrentUpgrade={setMobileUpgrade} upgradeType="Select Upgrade" />
    </div>
  );
}

const mapStateToProps = ({ playgroundReducer: { masterUpgradeList } }) => {
  return {
    masterUpgradeList
  };
};

export default connect(
  mapStateToProps,
  { setMobileUpgrade }
)(ValuationPlaygroundMobileUpgradeList);
