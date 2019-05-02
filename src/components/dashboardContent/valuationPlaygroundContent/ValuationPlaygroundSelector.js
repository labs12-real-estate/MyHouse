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
        {upgradeList.map((upgrade, index) => {
          return index === 0 ? (
            <option key={index} value="">
              {upgrade.name}
            </option>
          ) : (
            <option key={index}>{upgrade.name}</option>
          );
        })}
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
