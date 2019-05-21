import {
  IMAGE_UPLOAD_FETCH,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAIL,
  IMAGE_DOWNLOAD_FETCH,
  IMAGE_DOWNLOAD_SUCCESS,
  IMAGE_DOWNLOAD_FAIL,
  LIST_GALLERY_FETCH,
  LIST_GALLERY_FAIL,
  LIST_GALLERY_SUCCESS,
  GALLERY_UPLOAD_FETCH,
  GALLERY_UPLOAD_SUCCESS,
  GALLERY_UPLOAD_FAIL,
  GALLERY_IMAGE_DELETE_FETCH,
  GALLERY_IMAGE_DELETE_SUCCESS,
  GALLERY_IMAGE_DELETE_FAIL,
  SIGN_OUT_SUCCESS
} from '../actions';
import sortBy from 'lodash/fp/sortBy';

const initialState = {
  photoURLs: {
    house: null,
    profile: null,
    gallery: []
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
      return { ...state, gallery: sortBy(['lastModified'], action.payload) };
    case GALLERY_UPLOAD_FETCH:
      return { ...state, gallery: [...state.gallery, { ...action.payload, isSpinner: true }] };
    case GALLERY_UPLOAD_SUCCESS:
      return { ...state, gallery: state.gallery.map(object => (object.key === action.payload.key ? action.payload : object)) };
    case GALLERY_IMAGE_DELETE_FETCH:
      return { ...state, gallery: state.gallery.filter(object => object.key !== action.payload) };
    default:
      return state;
  }
};

export const storageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_UPLOAD_FETCH:
    case GALLERY_UPLOAD_FETCH:
    case GALLERY_IMAGE_DELETE_FETCH:
      return { ...state, fetching: true, photoURLs: photoURLs(state.photoURLs, action) };
    case LIST_GALLERY_FETCH:
    case IMAGE_DOWNLOAD_FETCH:
      return { ...state, fetching: true };
    case IMAGE_UPLOAD_SUCCESS:
      return { ...state, fetching: false };
    case IMAGE_DOWNLOAD_SUCCESS:
    case LIST_GALLERY_SUCCESS:
    case GALLERY_UPLOAD_SUCCESS:
      return { ...state, fetching: false, photoURLs: photoURLs(state.photoURLs, action) };
    case IMAGE_DOWNLOAD_FAIL:
    case IMAGE_UPLOAD_FAIL:
    case LIST_GALLERY_FAIL:
    case GALLERY_UPLOAD_FAIL:
    case GALLERY_IMAGE_DELETE_FAIL:
      return { ...state, fetching: false, error: action.payload };
    // Clear storage when a user signs out
    case SIGN_OUT_SUCCESS:
      return initialState;
    case GALLERY_IMAGE_DELETE_SUCCESS:
    default:
      return state;
  }
};
