import { Auth } from 'aws-amplify';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SIGN_IN_FAIL,
  SIGN_IN_FETCH,
  SIGN_IN_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_UP_FETCH,
  SIGN_UP_PENDING,
  CONFIRM_FETCH,
  CONFIRM_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_OUT_FETCH,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  IS_LOGGED_IN,
  IS_LOGGED_OUT
} from './index';

export const openModal = e => {
  e.preventDefault();
  return {
    type: OPEN_MODAL,
    payload: true
  };
};

export const closeModal = e => {
  e.preventDefault();
  return {
    type: CLOSE_MODAL,
    payload: false
  };
};

export const signIn = (creds, e) => dispatch => {
  e.preventDefault();
  dispatch({
    type: SIGN_IN_FETCH
  });

  Auth.signIn(creds)
    .then(user => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {
          username: user.username,
          name: user.attributes.name
        }
      });
    })
    .catch(error => {
      dispatch({
        type: SIGN_IN_FAIL,
        payload: error
      });
    });
};

export const signUp = (user, e) => dispatch => {
  e.preventDefault();
  dispatch({
    type: SIGN_UP_FETCH
  });

  Auth.signUp(user)
    .then(user => {
      dispatch({
        type: SIGN_UP_PENDING
      });
    })
    .catch(error => {
      dispatch({
        type: SIGN_UP_FAIL,
        payload: error
      });
    });
};

export const confirmSignUp = ({ username, password, code }, e) => dispatch => {
  e.preventDefault();
  dispatch({
    type: CONFIRM_FETCH
  });

  Auth.confirmSignUp(username, code)
    .then(user => {
      dispatch({
        type: SIGN_UP_SUCCESS
      });
      signIn({ username, password }, e)(dispatch);
    })
    .catch(error => {
      dispatch({
        type: CONFIRM_FAIL,
        payload: error
      });
    });
};

export const signOut = e => dispatch => {
  e.preventDefault();
  dispatch({
    type: SIGN_OUT_FETCH
  });

  Auth.signOut()
    .then(data => {
      dispatch({
        type: SIGN_OUT_SUCCESS
      });
    })
    .catch(error => {
      dispatch({
        type: SIGN_OUT_FAIL,
        payload: error
      });
    });
};

export const isLoggedInAction = () => dispatch => {
  Auth.currentSession()
    .then(data => {
      dispatch({
        type: IS_LOGGED_IN
      });
    })
    .catch(error => {
      dispatch({
        type: IS_LOGGED_OUT
      });
    });
};
