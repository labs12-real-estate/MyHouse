import { GET_USERHOUSE_FETCH, GET_USERHOUSE_SUCCESS, GET_USERHOUSE_FAIL, MAKE_USER_FETCH, MAKE_USER_SUCCESS, MAKE_USER_FAIL, SET_CURRENT_VALUE } from './index';
import { API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../graphql/queries';
import { createUser } from '../graphql/mutations';

export const makeUser = id => dispatch => {
  dispatch({ type: MAKE_USER_FETCH, payload: id });
  return API.graphql(graphqlOperation(createUser, { input: { id } }))
    .then(({ data }) => {
      const house = data.createUser;
      dispatch({ type: MAKE_USER_SUCCESS, payload: house });
    })
    .catch(error => {
      dispatch({ type: MAKE_USER_FAIL, payload: error });
    });
};

export const getUserHouse = id => dispatch => {
  dispatch({
    type: GET_USERHOUSE_FETCH
  });
  return API.graphql(graphqlOperation(getUser, { id }))
    .then(({ data }) => {
      const house = data.getUser.houses.items[0];
      dispatch({
        type: GET_USERHOUSE_SUCCESS,
        payload: house
      });
    })
    .catch(error => {
      dispatch({
        type: GET_USERHOUSE_FAIL,
        payload: error
      });
    });
};
