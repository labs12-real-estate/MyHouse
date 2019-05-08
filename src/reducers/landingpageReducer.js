import { GET_VALUATION_FETCH, GET_VALUATION_SUCCESS, GET_VALUATION_FAIL } from '../actions';

const initialState = {
  error: null,
  fetching: false
};

export const landingpageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VALUATION_FETCH:
      return { ...state, fetching: true };
    case GET_VALUATION_SUCCESS:
      return { ...state, fetching: false };
    case GET_VALUATION_FAIL:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
