import { GET_DESIGNS_FETCH, GET_DESIGNS_SUCCESS, GET_DESIGNS_FAIL } from './index';
import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 5e2bb786c9c1fb26d4745702a96291fc60621889e9afa7e6df595b272849375e'
  }
});

export const designSearch = searchTerm => dispatch => {
  dispatch({ type: GET_DESIGNS_FETCH, payload: searchTerm });
  return unsplash
    .get('/search/photos', {
      params: { query: searchTerm }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: GET_DESIGNS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_DESIGNS_FAIL, payload: err });
    });
};
