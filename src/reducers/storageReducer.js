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
  SIGN_OUT_SUCCESS
} from '../actions';

const initialState = {
  photoURLs: {
    house: '',
    profile: '',
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
      return { ...state, gallery: [...state.gallery, ...action.payload] };
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
    case GALLERY_UPLOAD_FAIL:
      return { ...state, fetching: false, error: action.payload };
    // Clear storage when a user signs out
    case SIGN_OUT_SUCCESS:
      return initialState;
    // Not sure if we want to optimistically update the gallery here,
    // it would mean finding and deleting that temporary image when
    // we get a successfully uploaded image from S3.
    // For now, just going to handle this with no UI update.
    case GALLERY_UPLOAD_FETCH:
    case GALLERY_UPLOAD_SUCCESS:
    default:
      return state;
  }
};
