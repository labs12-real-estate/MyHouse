import { TOGGLE_SIDEBAR_DRAWER, CLOSE_SIDEBAR_DRAWER } from '../actions';

const initialState = {
  isOpen: false
};

export const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_SIDEBAR_DRAWER:
      return { ...state, isOpen: false };
    case TOGGLE_SIDEBAR_DRAWER:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
