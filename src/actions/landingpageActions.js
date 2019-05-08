import { GET_VALUATION_FETCH, GET_VALUATION_SUCCESS, GET_VALUATION_FAIL } from './index';
import axios from 'axios';

export const getValuation = (address, history) => dispatch => {
  dispatch({ type: GET_VALUATION_FETCH });
  return axios
    .post('https://labs12-real-estate.herokuapp.com/api/houses/getvalue', {
      address
    })
    .then(data => {
      dispatch({ type: GET_VALUATION_SUCCESS });
      localStorage.setItem('initialData', JSON.stringify(data));
      history.push('/wizard-form');
    })
    .catch(error => {
      dispatch({ type: GET_VALUATION_FAIL, payload: error });
    });
};
