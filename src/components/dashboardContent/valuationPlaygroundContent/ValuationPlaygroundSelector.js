import React from 'react';
import { connect } from 'react-redux';

function ValuationPlaygroundSelector({ currentUpgrade, upgradeList, setCurrentUpgrade, upgradeType }) {
  const changeHandler = e => {
    setCurrentUpgrade(e.target.value);
  };

  const selectedValue = () => {
    return upgradeList.some(upgrade => upgrade.name === currentUpgrade.name) ? undefined : '';
  };

  return (
    <div className="valuation_playground_selector_container">
      <h1 className="valuation_playground_upgradeType_title">{upgradeType}</h1>
      <select value={selectedValue()} onChange={changeHandler} className="valuation_playground_selector">
        {upgradeList[0] && <option value="">{upgradeList[0].name}</option>}
        {upgradeList[1] && <option>{upgradeList[1].name}</option>}
        {upgradeList[2] && <option>{upgradeList[2].name}</option>}
        {upgradeList[3] && <option>{upgradeList[3].name}</option>}
        {upgradeList[4] && <option>{upgradeList[4].name}</option>}
        {upgradeList[5] && <option>{upgradeList[5].name}</option>}
        {upgradeList[6] && <option>{upgradeList[6].name}</option>}
      </select>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUpgrade: state.playgroundReducer.currentUpgrade
});

export default connect(
  mapStateToProps,
  null
)(ValuationPlaygroundSelector);
