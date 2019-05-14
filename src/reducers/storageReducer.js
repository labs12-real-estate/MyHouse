import { IMAGE_UPLOAD_FETCH, IMAGE_UPLOAD_SUCCESS, IMAGE_UPLOAD_FAIL, IMAGE_DOWNLOAD_FETCH, IMAGE_DOWNLOAD_SUCCESS, IMAGE_DOWNLOAD_FAIL } from '../actions';

const initialState = {
  photoURLs: {
    house: '',
    profile: '',
    other: []
  },
  fetching: false,
  error: '',
  message: ''
};

const photoURLs = (state = initialState.photoURLs, { key, photoURL }) => ({
  ...state,
  [key]: photoURL
});

export const storageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_FETCH:
      return { ...state, fetching: true, photoURLs: photoURLs(state.photoURLs, action.payload) };
    case IMAGE_DOWNLOAD_FETCH:
      return { ...state, fetching: true };
    case IMAGE_UPLOAD_SUCCESS:
      return { ...state, fetching: false };
    case IMAGE_DOWNLOAD_SUCCESS:
      return { ...state, fetching: false, photoURLs: photoURLs(state.photoURLs, action.payload) };
    case IMAGE_DOWNLOAD_FAIL:
    case IMAGE_UPLOAD_FAIL:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
