import { TOGGLE_SIDEBAR_DRAWER, CLOSE_SIDEBAR_DRAWER, OPEN_GALLERY_MODAL, CLOSE_GALLERY_MODAL } from '../actions';

const initialState = {
  isOpen: false,
  galleryModalImageURL: '',
  isGalleryModalOpen: false
};

export const displayReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_GALLERY_MODAL:
      return { ...state, isGalleryModalOpen: true, galleryModalImageURL: action.payload };
    case CLOSE_GALLERY_MODAL:
      return { ...state, isGalleryModalOpen: false, galleryModalImageURL: '' };
    case CLOSE_SIDEBAR_DRAWER:
      return { ...state, isOpen: false };
    case TOGGLE_SIDEBAR_DRAWER:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
