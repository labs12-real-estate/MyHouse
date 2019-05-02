import React from 'react';
import { connect } from 'react-redux';

function ValuationPlaygroundSelector({ currentUpgrade, upgradeList, setCurrentUpgrade, upgradeType }) {
  const changeHandler = e => {
    setCurrentUpgrade(e.target.value);
  };

  const selectedValue = () => {
    return upgradeList.some(upgrade => upgrade.name === currentUpgrade.name) ? undefined : '';
  };

  const upgradeNames = upgradeList.map(i => {
    // return i.name.includes('Select');
    return i.name;
  });
  console.log(upgradeNames);
  console.log(upgradeNames.includes(currentUpgrade.name));

  return (
    <div className="valuation_playground_selector_container" style={{ background: upgradeNames.includes(currentUpgrade.name) ? 'white' : 'grey' }}>
      <h1 className="valuation_playground_upgradeType_title">{upgradeType}</h1>
      <select value={selectedValue()} onChange={changeHandler} className="valuation_playground_selector">
        {upgradeList.map((upgrade, index) => {
          return index === 0 ? (
            <option key={index} value={upgrade.name}>
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
