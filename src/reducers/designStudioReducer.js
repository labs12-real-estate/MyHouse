import { GET_DESIGNS_FETCH, GET_DESIGNS_SUCCESS, NEXT_PAGE_FETCH, NEXT_PAGE_SUCCESS } from '../actions/index';

const initialState = {
  searchResults: [],
  currentSearch: '',
  currentPage: 2,
  fetching: false
};

export const designStudioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DESIGNS_SUCCESS:
      return { ...state, searchResults: action.payload.data, currentSearch: action.payload.term, currentPage: 1 };
    case NEXT_PAGE_FETCH:
    case GET_DESIGNS_FETCH:
      return { ...state, fetching: true };
    case NEXT_PAGE_SUCCESS:
      return {
        ...state,
        searchResults: [...state.searchResults, ...action.payload.data],
        currentPage: action.payload.page,
        fetching: false
      };
    default:
      return state;
  }
};
