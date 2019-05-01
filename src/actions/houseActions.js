import { GET_HOUSE_FETCH, GET_HOUSE_SUCCESS, GET_HOUSE_FAIL } from './index';
import { API, graphqlOperation } from 'aws-amplify';
import { listHouses } from '../graphql/queries';

export const getHouse = () => dispatch => {
  dispatch({
    type: GET_HOUSE_FETCH
  });
  API.graphql(graphqlOperation(listHouses))
    .then(({ data }) => {
      const house = data.listHouses.items[0];
      dispatch({
        type: GET_HOUSE_SUCCESS,
        payload: house
      });
    })
    .catch(error => {
      dispatch({
        type: GET_HOUSE_FAIL,
        payload: error
      });
    });
};
