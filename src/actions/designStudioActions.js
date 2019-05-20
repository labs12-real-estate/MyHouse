import { GET_DESIGNS_FETCH, GET_DESIGNS_SUCCESS, GET_DESIGNS_FAIL, NEXT_PAGE_FETCH, NEXT_PAGE_SUCCESS, NEXT_PAGE_FAIL } from './index';
import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    // Authorization: 'Client-ID 532bf8ff02ed4d168a1cf59ae2511c9bdad059f443da2dcfc265dcc43210e122'
    // Authorization: 'Client-ID 5e2bb786c9c1fb26d4745702a96291fc60621889e9afa7e6df595b272849375e'
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
  }
});

export const designSearch = searchTerm => dispatch => {
  dispatch({ type: GET_DESIGNS_FETCH, payload: searchTerm });
  return unsplash
    .get('/search/photos', {
      params: { query: searchTerm, per_page: 15, page: 1 }
    })
    .then(res => {
      dispatch({ type: GET_DESIGNS_SUCCESS, payload: { data: res.data.results, term: searchTerm } });
    })
    .catch(err => {
      dispatch({ type: GET_DESIGNS_FAIL, payload: err });
    });
};

export const getNextPage = (searchTerm, page) => dispatch => {
  dispatch({ type: NEXT_PAGE_FETCH, payload: searchTerm });
  return unsplash
    .get('/search/photos', {
      params: { query: searchTerm, per_page: 15, page }
    })
    .then(res => {
      dispatch({ type: NEXT_PAGE_SUCCESS, payload: { data: res.data.results, page } });
    })
    .catch(err => {
      dispatch({ type: NEXT_PAGE_FAIL, payload: err });
    });
};
