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
      <ValuationPlaygroundSelector upgradeList={upgradeList.counterTops} setCurrentUpgrade={setCurrentCounterTop} upgradeType="Countertops" />
      <ValuationPlaygroundSelector upgradeList={upgradeList.roof} setCurrentUpgrade={setCurrentRoof} upgradeType="New Roof" />
      <ValuationPlaygroundSelector upgradeList={upgradeList.siding} setCurrentUpgrade={setCurrentSiding} upgradeType="New Siding" />
      <ValuationPlaygroundSelector upgradeList={upgradeList.AC} setCurrentUpgrade={setCurrentAC} upgradeType="New A/C Unit" />
      <ValuationPlaygroundSelector upgradeList={upgradeList.furnace} setCurrentUpgrade={setCurrentFurnace} upgradeType="New Furnace" />
      <ValuationPlaygroundSelector upgradeList={upgradeList.flooring} setCurrentUpgrade={setCurrentFlooring} upgradeType="New Flooring" />
      <ValuationPlaygroundSelector upgradeList={upgradeList.addingSqFt} setCurrentUpgrade={setCurrentAddingSqFt} upgradeType="Add Sq. Footage" />
      <ValuationPlaygroundSelector upgradeList={upgradeList.painting} setCurrentUpgrade={setCurrentPainting} upgradeType="New Paint" />
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
