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
  TOGGLE_FORGOT_PASSWORD,
  FORGOT_PASSWORD_FETCH,
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_PENDING,
  FORGOT_PASSWORD_SUCCESS,
  GET_USER_SESSION_FAIL,
  GET_USER_SESSION_SUCCESS,
  GET_USER_SESSION_FETCH,
  SEND_REGISTER_ERROR
} from '../actions/index';

const initialState = {
  isOpen: false,
  error: null,
  fetching: false,
  pendingConfirmation: false,
  submittedConfirmation: false,
  forgotPassword: false,
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
      return { ...state, fetching: false, pendingConfirmation: false, isLoggedIn: true, user: action.payload, error: null };
    case SIGN_UP_SUCCESS:
      return { ...state, fetching: false, pendingConfirmation: false, isLoggedIn: true, error: null };
    case SIGN_OUT_SUCCESS:
      return { ...state, fetching: false, pendingConfirmation: false, submittedConfirmation: false, isLoggedIn: false, user: initialState.user, error: null };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, fetching: false, pendingConfirmation: false, submittedConfirmation: false, forgotPassword: false, error: null };
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL:
      return { ...state, fetching: false, pendingConfirmation: false, isLoggedIn: false, error: action.payload };
    case SIGN_OUT_FAIL:
    case CONFIRM_FAIL:
    case FORGOT_PASSWORD_FAIL:
      return { ...state, fetching: false, error: action.payload };
    case SIGN_UP_FETCH:
      return { ...state, fetching: true, pendingConfirmation: true, isLoggedIn: false };
    case SEND_REGISTER_ERROR:
      return { ...state, fetching: false, pendingConfirmation: false, isLoggedIn: false, error: action.payload };
    case SIGN_IN_FETCH:
    case SIGN_OUT_FETCH:
    case CONFIRM_FETCH:
    case GET_USER_SESSION_FETCH:
    case FORGOT_PASSWORD_FETCH:
      return { ...state, fetching: true, submittedConfirmation: true };
    case SIGN_UP_PENDING:
    case FORGOT_PASSWORD_PENDING:
      return { ...state, fetching: false, pendingConfirmation: true, error: null };
    case IS_LOGGED_IN:
    case GET_USER_SESSION_SUCCESS:
      return { ...state, isLoggedIn: true, user: action.payload, fetching: false, error: null };
    case IS_LOGGED_OUT:
      return { ...state, isLoggedIn: false, username: '' };
    case TOGGLE_FORGOT_PASSWORD:
      return { ...state, forgotPassword: !state.forgotPassword, error: null };
    case GET_USER_SESSION_FAIL:
      return { ...state, isLoggedIn: false, user: initialState.user, fetching: false, error: action.payload };
    default:
      return state;
  }
};
