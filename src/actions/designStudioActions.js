import { GET_DESIGNS_FETCH, GET_DESIGNS_SUCCESS, GET_DESIGNS_FAIL, NEXT_PAGE_FETCH, NEXT_PAGE_SUCCESS, NEXT_PAGE_FAIL } from './index';
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
      params: { query: searchTerm, per_page: 20, page: 1 }
    })
    .then(res => {
      dispatch({ type: GET_DESIGNS_SUCCESS, payload: { data: res.data, term: searchTerm } });
    })
    .catch(err => {
      dispatch({ type: GET_DESIGNS_FAIL, payload: err });
    });
};

export const getPage = (searchTerm, page) => dispatch => {
  dispatch({ type: NEXT_PAGE_FETCH, payload: searchTerm });
  return unsplash
    .get('/search/photos', {
      params: { query: searchTerm, per_page: 10, page }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: NEXT_PAGE_SUCCESS, payload: { data: res.data, term: searchTerm, page } });
    })
    .catch(err => {
      dispatch({ type: NEXT_PAGE_FAIL, payload: err });
    });
};
