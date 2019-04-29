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
  currentUpgrade: {
    name: 'Select An Upgrade',
    upgrade_cost: null,
    ROI_percentage: null
  }
};

export const playgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_COUNTER_TOP:
      const filteredCounterTop = state.upgradeList.counterTops.filter(upgrade => upgrade.name === action.payload);
      return { ...state, currentUpgrade: { ...filteredCounterTop[0] } };
    case SET_CURRENT_ROOF:
      const filteredRoof = state.upgradeList.roof.filter(upgrade => upgrade.name === action.payload);
      return { ...state, currentUpgrade: { ...filteredRoof[0] } };
    case SET_CURRENT_SIDING:
      const filteredSiding = state.upgradeList.siding.filter(upgrade => upgrade.name === action.payload);
      return { ...state, currentUpgrade: { ...filteredSiding[0] } };
    case SET_CURRENT_AC:
      const filteredAC = state.upgradeList.AC.filter(upgrade => upgrade.name === action.payload);
      return { ...state, currentUpgrade: { ...filteredAC[0] } };
    case SET_CURRENT_FURNACE:
      const filteredFurnace = state.upgradeList.furnace.filter(upgrade => upgrade.name === action.payload);
      return { ...state, currentUpgrade: { ...filteredFurnace[0] } };
    case SET_CURRENT_FLOORING:
      const filteredFlooring = state.upgradeList.flooring.filter(upgrade => upgrade.name === action.payload);
      return { ...state, currentUpgrade: { ...filteredFlooring[0] } };
    case SET_CURRENT_ADDING_SQFT:
      const filteredAddingSqFt = state.upgradeList.roof.filter(upgrade => upgrade.name === action.payload);
      return { ...state, currentUpgrade: { ...filteredAddingSqFt[0] } };
    case SET_CURRENT_PAINTING:
      const filteredPainting = state.upgradeList.painting.filter(upgrade => upgrade.name === action.payload);
      return { ...state, currentUpgrade: { ...filteredPainting[0] } };
    default:
      return state;
  }
};
