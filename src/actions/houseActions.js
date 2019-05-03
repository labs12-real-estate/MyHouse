import { GET_HOUSE_FETCH, GET_HOUSE_SUCCESS, GET_HOUSE_FAIL, MAKE_HOUSE_FETCH, MAKE_HOUSE_SUCCESS, MAKE_HOUSE_FAIL, SET_CURRENT_VALUE } from './index';
import { API, graphqlOperation } from 'aws-amplify';
import { listHouses } from '../graphql/queries';
import { createHouse } from '../graphql/mutations';

export const makeHouse = (houseInput, history) => dispatch => {
  dispatch({ type: MAKE_HOUSE_FETCH, payload: houseInput });
  return API.graphql(graphqlOperation(createHouse, { input: houseInput }))
    .then(({ data }) => {
      const house = data.createHouse;
      dispatch({ type: MAKE_HOUSE_SUCCESS, payload: house });
      history.push('/overview');
    })
    .catch(error => {
      dispatch({ type: MAKE_HOUSE_FAIL, payload: error });
    });
};

export const getHouse = () => dispatch => {
  dispatch({
    type: GET_HOUSE_FETCH
  });
  return API.graphql(graphqlOperation(listHouses))
    .then(({ data }) => {
      const house = data.listHouses.items[0];
      dispatch({
        type: GET_HOUSE_SUCCESS,
        payload: house
      });
      dispatch({
        type: SET_CURRENT_VALUE,
        payload: house.valuation
      });
    })
    .catch(error => {
      dispatch({
        type: GET_HOUSE_FAIL,
        payload: error
      });
    });
};
