import { OPEN_MODAL, CLOSE_MODAL } from '../actions/index';

const initialState = {
  isOpen: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: action.payload };
    case CLOSE_MODAL:
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};
