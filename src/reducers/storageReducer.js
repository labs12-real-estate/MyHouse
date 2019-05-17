import {
  IMAGE_UPLOAD_FETCH,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAIL,
  IMAGE_DOWNLOAD_FETCH,
  IMAGE_DOWNLOAD_SUCCESS,
  IMAGE_DOWNLOAD_FAIL,
  LIST_GALLERY_FETCH,
  LIST_GALLERY_FAIL,
  LIST_GALLERY_SUCCESS
} from '../actions';

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

const photoURLs = (state = initialState.photoURLs, action) => {
  switch (action.type) {
    case IMAGE_DOWNLOAD_SUCCESS:
    case IMAGE_UPLOAD_FETCH:
      return {
        ...state,
        [action.payload.key]: action.payload.photoURL
      };
    case LIST_GALLERY_SUCCESS:
      return { ...state, other: [...state.other, ...action.payload] };
    default:
      return state;
  }
};

export const storageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_FETCH:
      return { ...state, fetching: true, photoURLs: photoURLs(state.photoURLs, action) };
    case LIST_GALLERY_FETCH:
    case IMAGE_DOWNLOAD_FETCH:
      return { ...state, fetching: true };
    case IMAGE_UPLOAD_SUCCESS:
      return { ...state, fetching: false };
    case IMAGE_DOWNLOAD_SUCCESS:
    case LIST_GALLERY_SUCCESS:
      return { ...state, fetching: false, photoURLs: photoURLs(state.photoURLs, action) };
    case IMAGE_DOWNLOAD_FAIL:
    case IMAGE_UPLOAD_FAIL:
    case LIST_GALLERY_FAIL:
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
};
