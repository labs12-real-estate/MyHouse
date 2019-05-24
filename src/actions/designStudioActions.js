import { GET_DESIGNS_FETCH, GET_DESIGNS_SUCCESS, GET_DESIGNS_FAIL, NEXT_PAGE_FETCH, NEXT_PAGE_SUCCESS, NEXT_PAGE_FAIL } from './index';
import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
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
