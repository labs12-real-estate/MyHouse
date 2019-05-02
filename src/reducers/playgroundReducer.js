import {
  SET_CURRENT_COUNTER_TOP,
  SET_CURRENT_ROOF,
  SET_CURRENT_SIDING,
  SET_CURRENT_AC,
  SET_CURRENT_FURNACE,
  SET_CURRENT_FLOORING,
  SET_CURRENT_ADDING_SQFT,
  SET_CURRENT_PAINTING
} from '../actions/index';
import { upgradeList } from '../dummy-data-structures/valuation-playground-upgrade-list';

const initialState = {
  upgradeList: upgradeList,
  currentValue: 505777,
  newValue: null,
  upgradeROI: null,
  currentUpgrade: {
    name: 'Select An Upgrade',
    upgrade_cost: null,
    ROI_percentage: null
  }
};

export const playgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_COUNTER_TOP:
      const filteredCounterTop = state.upgradeList.counterTops.filter(upgrade => upgrade.name === action.payload)[0];
      return {
        ...state,
        currentUpgrade: { ...filteredCounterTop },
        upgradeROI: (filteredCounterTop.upgrade_cost * filteredCounterTop.ROI_percentage - filteredCounterTop.upgrade_cost) / filteredCounterTop.upgrade_cost,
        newValue: filteredCounterTop.upgrade_cost * filteredCounterTop.ROI_percentage + state.currentValue,
        total_remodel_cost: { ...state.total_remodel_cost, counterTops: filteredCounterTop.upgrade_cost }
      };
    case SET_CURRENT_ROOF:
      const filteredRoof = state.upgradeList.roof.filter(upgrade => upgrade.name === action.payload)[0];
      return {
        ...state,
        currentUpgrade: { ...filteredRoof },
        upgradeROI: (filteredRoof.upgrade_cost * filteredRoof.ROI_percentage - filteredRoof.upgrade_cost) / filteredRoof.upgrade_cost,
        newValue: filteredRoof.upgrade_cost * filteredRoof.ROI_percentage + state.currentValue,
        total_remodel_cost: { ...state.total_remodel_cost, roof: filteredRoof.upgrade_cost }
      };
    case SET_CURRENT_SIDING:
      const filteredSiding = state.upgradeList.siding.filter(upgrade => upgrade.name === action.payload)[0];
      return {
        ...state,
        currentUpgrade: { ...filteredSiding },
        upgradeROI: (filteredSiding.upgrade_cost * filteredSiding.ROI_percentage - filteredSiding.upgrade_cost) / filteredSiding.upgrade_cost,
        newValue: filteredSiding.upgrade_cost * filteredSiding.ROI_percentage + state.currentValue,
        total_remodel_cost: { ...state.total_remodel_cost, siding: filteredSiding.upgrade_cost }
      };
    case SET_CURRENT_AC:
      const filteredAC = state.upgradeList.AC.filter(upgrade => upgrade.name === action.payload)[0];
      return {
        ...state,
        currentUpgrade: { ...filteredAC },
        upgradeROI: (filteredAC.upgrade_cost * filteredAC.ROI_percentage - filteredAC.upgrade_cost) / filteredAC.upgrade_cost,
        newValue: filteredAC.upgrade_cost * filteredAC.ROI_percentage + state.currentValue,
        total_remodel_cost: { ...state.total_remodel_cost, ac: filteredAC.upgrade_cost }
      };
    case SET_CURRENT_FURNACE:
      const filteredFurnace = state.upgradeList.furnace.filter(upgrade => upgrade.name === action.payload)[0];
      return {
        ...state,
        currentUpgrade: { ...filteredFurnace },
        upgradeROI: (filteredFurnace.upgrade_cost * filteredFurnace.ROI_percentage - filteredFurnace.upgrade_cost) / filteredFurnace.upgrade_cost,
        newValue: filteredFurnace.upgrade_cost * filteredFurnace.ROI_percentage + state.currentValue,
        total_remodel_cost: { ...state.total_remodel_cost, furnace: filteredFurnace.upgrade_cost }
      };
    case SET_CURRENT_FLOORING:
      const filteredFlooring = state.upgradeList.flooring.filter(upgrade => upgrade.name === action.payload)[0];
      return {
        ...state,
        currentUpgrade: { ...filteredFlooring },
        upgradeROI: (filteredFlooring.upgrade_cost * filteredFlooring.ROI_percentage - filteredFlooring.upgrade_cost) / filteredFlooring.upgrade_cost,
        newValue: filteredFlooring.upgrade_cost * filteredFlooring.ROI_percentage + state.currentValue,
        total_remodel_cost: { ...state.total_remodel_cost, flooring: filteredFlooring.upgrade_cost }
      };
    case SET_CURRENT_ADDING_SQFT:
      const filteredAddingSqFt = state.upgradeList.addingSqFt.filter(upgrade => upgrade.name === action.payload)[0];
      return {
        ...state,
        currentUpgrade: { ...filteredAddingSqFt },
        upgradeROI: (filteredAddingSqFt.upgrade_cost * filteredAddingSqFt.ROI_percentage - filteredAddingSqFt.upgrade_cost) / filteredAddingSqFt.upgrade_cost,
        newValue: filteredAddingSqFt.upgrade_cost * filteredAddingSqFt.ROI_percentage + state.currentValue,
        total_remodel_cost: { ...state.total_remodel_cost, sqft: filteredAddingSqFt.upgrade_cost }
      };
    case SET_CURRENT_PAINTING:
      const filteredPainting = state.upgradeList.painting.filter(upgrade => upgrade.name === action.payload)[0];
      return {
        ...state,
        currentUpgrade: { ...filteredPainting },
        upgradeROI: (filteredPainting.upgrade_cost * filteredPainting.ROI_percentage - filteredPainting.upgrade_cost) / filteredPainting.upgrade_cost,
        newValue: filteredPainting.upgrade_cost * filteredPainting.ROI_percentage + state.currentValue,
        total_remodel_cost: { ...state.total_remodel_cost, painting: filteredPainting.upgrade_cost }
      };
    default:
      return state;
  }
};
