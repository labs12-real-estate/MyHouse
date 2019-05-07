import {
  SET_CURRENT_COUNTER_TOP,
  SET_CURRENT_ROOF,
  SET_CURRENT_SIDING,
  SET_CURRENT_AC,
  SET_CURRENT_FURNACE,
  SET_CURRENT_FLOORING,
  SET_CURRENT_ADDING_SQFT,
  SET_CURRENT_PAINTING,
  SET_MOBILE_UPGRADE
} from './index';

export const setCurrentCounterTop = upgrade => {
  return {
    type: SET_CURRENT_COUNTER_TOP,
    payload: upgrade
  };
};

export const setCurrentRoof = upgrade => {
  return {
    type: SET_CURRENT_ROOF,
    payload: upgrade
  };
};

export const setCurrentSiding = upgrade => {
  return {
    type: SET_CURRENT_SIDING,
    payload: upgrade
  };
};

export const setCurrentAC = upgrade => {
  return {
    type: SET_CURRENT_AC,
    payload: upgrade
  };
};

export const setCurrentFurnace = upgrade => {
  return {
    type: SET_CURRENT_FURNACE,
    payload: upgrade
  };
};

export const setCurrentFlooring = upgrade => {
  return {
    type: SET_CURRENT_FLOORING,
    payload: upgrade
  };
};

export const setCurrentAddingSqFt = upgrade => {
  return {
    type: SET_CURRENT_ADDING_SQFT,
    payload: upgrade
  };
};

export const setCurrentPainting = upgrade => {
  return {
    type: SET_CURRENT_PAINTING,
    payload: upgrade
  };
};

export const setMobileUpgrade = upgrade => {
  return {
    type: SET_MOBILE_UPGRADE,
    payload: upgrade
  };
};
