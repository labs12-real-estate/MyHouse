import React from 'react';
import { connect } from 'react-redux';

function ValuationPlaygroundSelector({ currentUpgrade, upgradeList, setCurrentUpgrade, upgradeType }) {
  const changeHandler = e => {
    setCurrentUpgrade(e.target.value);
  };

  const selectHandler = upgrade => (upgradeList.some(upgrade => upgrade.name === currentUpgrade.name) ? true : false);

  return (
    <div className="valuation_playground_selector_container">
      <h1 className="valuation_playground_upgradeType_title">{upgradeType}</h1>
      <select onChange={changeHandler} className="valuation_playground_selector">
        {upgradeList[0] && <option selected={selectHandler(upgradeList[0])}>{upgradeList[0].name}</option>}
        {upgradeList[1] && <option selected={selectHandler(upgradeList[1])}>{upgradeList[1].name}</option>}
        {upgradeList[2] && <option selected={selectHandler(upgradeList[2])}>{upgradeList[2].name}</option>}
        {upgradeList[3] && <option selected={selectHandler(upgradeList[3])}>{upgradeList[3].name}</option>}
        {upgradeList[4] && <option selected={selectHandler(upgradeList[4])}>{upgradeList[4].name}</option>}
        {upgradeList[5] && <option selected={selectHandler(upgradeList[5])}>{upgradeList[5].name}</option>}
        {upgradeList[6] && <option selected={selectHandler(upgradeList[6])}>{upgradeList[6].name}</option>}
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
