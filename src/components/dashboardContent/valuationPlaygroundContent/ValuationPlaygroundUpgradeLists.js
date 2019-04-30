import React from 'react';
import { connect } from 'react-redux';
import {
  setCurrentCounterTop,
  setCurrentRoof,
  setCurrentSiding,
  setCurrentAC,
  setCurrentFurnace,
  setCurrentFlooring,
  setCurrentAddingSqFt,
  setCurrentPainting
} from '../../../actions/playgroundActions';
import ValuationPlaygroundSelector from './ValuationPlaygroundSelector';

function ValuationPlaygroundUpgradeLists({
  upgradeList,
  setCurrentCounterTop,
  setCurrentRoof,
  setCurrentSiding,
  setCurrentAC,
  setCurrentFurnace,
  setCurrentFlooring,
  setCurrentAddingSqFt,
  setCurrentPainting
}) {
  return (
    <div className="valuation_playground_upgrades_container">
      <ValuationPlaygroundSelector upgradeList={upgradeList.counterTops} setCurrentUpgrade={setCurrentCounterTop} />
      <ValuationPlaygroundSelector upgradeList={upgradeList.roof} setCurrentUpgrade={setCurrentRoof} />
      <ValuationPlaygroundSelector upgradeList={upgradeList.siding} setCurrentUpgrade={setCurrentSiding} />
      <ValuationPlaygroundSelector upgradeList={upgradeList.AC} setCurrentUpgrade={setCurrentAC} />
      <ValuationPlaygroundSelector upgradeList={upgradeList.furnace} setCurrentUpgrade={setCurrentFurnace} />
      <ValuationPlaygroundSelector upgradeList={upgradeList.flooring} setCurrentUpgrade={setCurrentFlooring} />
      <ValuationPlaygroundSelector upgradeList={upgradeList.addingSqFt} setCurrentUpgrade={setCurrentAddingSqFt} />
      <ValuationPlaygroundSelector upgradeList={upgradeList.painting} setCurrentUpgrade={setCurrentPainting} />
    </div>
  );
}

const mapStateToProps = ({ playgroundReducer }) => {
  return playgroundReducer;
};

export default connect(
  mapStateToProps,
  { setCurrentCounterTop, setCurrentRoof, setCurrentSiding, setCurrentAC, setCurrentFurnace, setCurrentFlooring, setCurrentAddingSqFt, setCurrentPainting }
)(ValuationPlaygroundUpgradeLists);
