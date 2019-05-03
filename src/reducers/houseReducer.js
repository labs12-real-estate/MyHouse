import { GET_HOUSE_FETCH, GET_HOUSE_SUCCESS, GET_HOUSE_FAIL, MAKE_HOUSE_FETCH, MAKE_HOUSE_SUCCESS, MAKE_HOUSE_FAIL } from '../actions';

const initialState = {
  error: null,
  fetching: false,
  house: { parcelData: {} }
};

export const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_HOUSE_FETCH:
    case GET_HOUSE_FETCH:
      return { ...state, fetching: true };
    case MAKE_HOUSE_SUCCESS:
    case GET_HOUSE_SUCCESS:
      return { ...state, fetching: false, house: action.payload || state.house };
    case MAKE_HOUSE_FAIL:
    case GET_HOUSE_FAIL:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
