import { GET_DESIGNS_FETCH, GET_DESIGNS_SUCCESS, GET_DESIGNS_FAIL, NEXT_PAGE_FETCH, NEXT_PAGE_SUCCESS, NEXT_PAGE_FAIL } from '../actions/index';

const initialState = {
  searchResults: [],
  currentSearch: '',
  page: 2
};

export const designStudioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESIGNS_SUCCESS:
      return { ...state, searchResults: action.payload.data.results, currentSearch: action.payload.term };
    case NEXT_PAGE_SUCCESS:
      return {
        ...state,
        currentSearch: action.payload.term,
        searchResults: [...state.searchResults, ...action.payload.data.results],
        page: action.payload.page
      };
    default:
      return state;
  }
};
