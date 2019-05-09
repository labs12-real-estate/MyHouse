import { TOGGLE_SIDEBAR_DRAWER } from '../actions';

const initialState = {
  isOpen: false
};

export const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_DRAWER:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
