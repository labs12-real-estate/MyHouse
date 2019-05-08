import { GET_DESIGNS_FETCH, GET_DESIGNS_SUCCESS, GET_DESIGNS_FAIL } from '../actions/index';

const initialState = {
  searchResults: []
};

export const designStudioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESIGNS_SUCCESS:
      return { ...state, searchResults: action.payload };
    default:
      return state;
  }
};
