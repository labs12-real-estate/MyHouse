import { GET_HOUSE_FETCH, GET_HOUSE_SUCCESS, GET_HOUSE_FAIL } from '../actions';

const initialState = {
  error: null,
  fetching: false,
  house: null
};

export const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOUSE_FETCH:
      return { ...state, fetching: true };
    case GET_HOUSE_SUCCESS:
      return { ...state, fetching: false, house: action.payload };
    case GET_HOUSE_FAIL:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
