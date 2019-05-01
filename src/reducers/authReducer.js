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
  SIGN_OUT
} from '../actions/index';

const initialState = {
  isOpen: false,
  error: null,
  fetching: false,
  pendingConfirmation: false,
  name: '',
  username: ''
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: action.payload };
    case CLOSE_MODAL:
      return { ...state, isOpen: action.payload };
    case SIGN_IN_SUCCESS:
      return { ...state, fetching: false, name: action.payload.name, username: action.payload.username, pendingConfirmation: false };
    case SIGN_UP_SUCCESS:
      return { ...state, fetching: false, pendingConfirmation: false };
    case SIGN_IN_FAIL:
    case SIGN_UP_FAIL:
    case CONFIRM_FAIL:
      return { ...state, fetching: true, error: action.payload };
    case SIGN_IN_FETCH:
    case SIGN_UP_FETCH:
    case CONFIRM_FETCH:
      return { ...state, fetching: true };
    case SIGN_UP_PENDING:
      return { ...state, fetching: false, pendingConfirmation: true };
    default:
      return state;
  }
};
