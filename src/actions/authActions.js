import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createHouse } from '../graphql/mutations';
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
  SIGN_OUT
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

export const signIn = (creds, makeHouse = undefined, e) => dispatch => {
  e.preventDefault();
  dispatch({
    type: SIGN_IN_FETCH
  });

  return Auth.signIn(creds)
    .then(user => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: {
          username: user.username,
          name: user.attributes.name
        }
      });
      makeHouse && makeHouse().catch(console.error);
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
    .then(_user => {
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

export const confirmSignUp = ({ username, password, code }, houseInput, e) => dispatch => {
  e.preventDefault();
  dispatch({
    type: CONFIRM_FETCH
  });

  return Auth.confirmSignUp(username, code)
    .then(_user => {
      // Need to make this a thunk so that it is not invoked _until_
      // the user is successfully signed in
      const makeHouse = () => API.graphql(graphqlOperation(createHouse, { input: houseInput }));
      dispatch({
        type: SIGN_UP_SUCCESS
      });
      return signIn({ username, password }, makeHouse, e)(dispatch);
    })
    .catch(error => {
      dispatch({
        type: CONFIRM_FAIL,
        payload: error
      });
    });
};
