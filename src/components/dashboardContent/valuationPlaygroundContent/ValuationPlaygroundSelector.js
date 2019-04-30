import React from 'react';

function ValuationPlaygroundSelector({ upgradeList, setCurrentUpgrade, upgradeType }) {
  const changeHandler = e => {
    setCurrentUpgrade(e.target.value);
  };

  return (
    <div className="valuation_playground_selector_container">
      <h1 className="valuation_playground_upgradeType_title">{upgradeType}</h1>
      <select onChange={changeHandler} className="valuation_playground_selector">
        {upgradeList[0] && <option>{upgradeList[0].name}</option>}
        {upgradeList[1] && <option>{upgradeList[1].name}</option>}
        {upgradeList[2] && <option>{upgradeList[2].name}</option>}
        {upgradeList[3] && <option>{upgradeList[3].name}</option>}
        {upgradeList[4] && <option>{upgradeList[4].name}</option>}
        {upgradeList[5] && <option>{upgradeList[5].name}</option>}
      </select>
    </div>
  );
}

export default ValuationPlaygroundSelector;
