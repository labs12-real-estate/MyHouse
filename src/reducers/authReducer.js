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
  IS_LOGGED_OUT,
  GET_USER_SESSION_FAIL,
  GET_USER_SESSION_SUCCESS,
  GET_USER_SESSION_FETCH
} from '../actions/index';

const initialState = {
  isOpen: false,
  error: null,
  fetching: false,
  pendingConfirmation: false,
  submittedConfirmation: false,
  isLoggedIn: false,
  user: {
    name: '',
    username: '',
    email: ''
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: action.payload };
    case CLOSE_MODAL:
      return { ...state, isOpen: action.payload };
    case SIGN_IN_SUCCESS:
      return { ...state, fetching: false, user: action.payload, pendingConfirmation: false, isLoggedIn: true };
    case SIGN_UP_SUCCESS:
      return { ...state, fetching: false, pendingConfirmation: false, isLoggedIn: true };
    case SIGN_OUT_SUCCESS:
      return { ...state, fetching: false, pendingConfirmation: false, submittedConfirmation: false, isLoggedIn: false, user: initialState.user };
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL:
    case SIGN_OUT_FAIL:
    case CONFIRM_FAIL:
      return { ...state, fetching: false, error: action.payload };
    case SIGN_IN_FETCH:
    case SIGN_UP_FETCH:
    case SIGN_OUT_FETCH:
    case CONFIRM_FETCH:
    case GET_USER_SESSION_FETCH:
      return { ...state, fetching: true, submittedConfirmation: true };
    case SIGN_UP_PENDING:
      return { ...state, fetching: false, pendingConfirmation: true };
    case IS_LOGGED_IN:
    case GET_USER_SESSION_SUCCESS:
      return { ...state, isLoggedIn: true, user: action.payload, fetching: false };
    case IS_LOGGED_OUT:
    case GET_USER_SESSION_FAIL:
      return { ...state, isLoggedIn: false, user: initialState.user, fetching: false };
    default:
      return state;
  }
};
