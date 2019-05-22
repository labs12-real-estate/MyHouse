import { TOGGLE_SIDEBAR_DRAWER, CLOSE_SIDEBAR_DRAWER, OPEN_GALLERY_MODAL, CLOSE_GALLERY_MODAL } from '.';

export const toggleSideBar = () => ({
  type: TOGGLE_SIDEBAR_DRAWER
});

export const closeSideBar = () => ({
  type: CLOSE_SIDEBAR_DRAWER
});

export const openGalleryModal = imageURL => ({
  type: OPEN_GALLERY_MODAL,
  payload: imageURL
});

export const closeGalleryModal = () => ({
  type: CLOSE_GALLERY_MODAL
});
