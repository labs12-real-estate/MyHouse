import { Auth } from 'aws-amplify';
import { OPEN_MODAL, CLOSE_MODAL, SIGN_IN_FAIL, SIGN_IN_FETCH, SIGN_IN_SUCCESS, SIGN_UP_FAIL, SIGN_UP_FETCH, SIGN_UP_SUCCESS, SIGN_OUT } from './index';

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
  console.log(creds);
  e.preventDefault();
  dispatch({
    type: SIGN_IN_FETCH
  });

  Auth.signIn(creds)
    .then(user => {
      console.log(user);
      // Auth.currentSession().then(console.log);
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: user.username
      });
    })
    .catch(error => {
      dispatch({
        type: SIGN_IN_FAIL,
        payload: error
      });
    });
};
