import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SIGN_IN_FAIL,
  SIGN_IN_FETCH,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_FETCH,
  SIGN_UP_SUCCESS,
  SIGN_OUT
} from '../actions/index';

const initialState = {
  isOpen: false,
  error: null,
  fetching: false,
  username: ''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: action.payload };
    case CLOSE_MODAL:
      return { ...state, isOpen: action.payload };
    case SIGN_IN_SUCCESS:
      return { ...state, fetching: false, username: action.payload };
    case SIGN_IN_FAIL:
      return { ...state, fetching: true, error: action.payload };
    case SIGN_IN_FETCH:
      return { ...state, fetching: true };
    default:
      return state;
  }
};
