import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SIGN_IN_FAIL,
  SIGN_IN_FETCH,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_FETCH,
  SIGN_UP_SUCCESS,
  SIGN_UP_PENDING,
  CONFIRM_FETCH,
  CONFIRM_FAIL,
  SIGN_OUT_FETCH,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  IS_LOGGED_IN,
  IS_LOGGED_OUT
} from '../actions/index';

const initialState = {
  isOpen: false,
  error: null,
  fetching: false,
  pendingConfirmation: false,
  submittedConfirmation: false,
  name: '',
  username: '',
  isLoggedIn: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: action.payload };
    case CLOSE_MODAL:
      return { ...state, isOpen: action.payload };
    case SIGN_IN_SUCCESS:
      return { ...state, fetching: false, name: action.payload.name, username: action.payload.username, pendingConfirmation: false, isLoggedIn: true };
    case SIGN_UP_SUCCESS:
      return { ...state, fetching: false, pendingConfirmation: false, isLoggedIn: true };
    case SIGN_OUT_SUCCESS:
      return { ...state, fetching: false, isLoggedIn: false };
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL:
    case SIGN_OUT_FAIL:
    case CONFIRM_FAIL:
      return { ...state, fetching: true, error: action.payload };
    case SIGN_IN_FETCH:
    case SIGN_UP_FETCH:
    case SIGN_OUT_FETCH:
    case CONFIRM_FETCH:
      return { ...state, fetching: true, submittedConfirmation: true };
    case SIGN_UP_PENDING:
      return { ...state, fetching: false, pendingConfirmation: true };
    case IS_LOGGED_IN:
      return { ...state, isLoggedIn: true, username: action.payload };
    case IS_LOGGED_OUT:
      return { ...state, isLoggedIn: false, username: '' };
    default:
      return state;
  }
};
