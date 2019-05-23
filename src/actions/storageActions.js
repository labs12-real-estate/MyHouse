import { Storage } from 'aws-amplify';
import { toast } from 'react-toastify';
import uuidv4 from 'uuid/v4';
import zipWith from 'lodash/fp/zipWith';
import {
  IMAGE_UPLOAD_FETCH,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAIL,
  IMAGE_DOWNLOAD_FETCH,
  IMAGE_DOWNLOAD_SUCCESS,
  IMAGE_DOWNLOAD_FAIL,
  LIST_GALLERY_FETCH,
  LIST_GALLERY_SUCCESS,
  LIST_GALLERY_FAIL,
  GALLERY_UPLOAD_FETCH,
  GALLERY_UPLOAD_SUCCESS,
  GALLERY_UPLOAD_FAIL,
  GALLERY_IMAGE_DELETE_FETCH,
  GALLERY_IMAGE_DELETE_SUCCESS,
  GALLERY_IMAGE_DELETE_FAIL
} from '.';

const toUserKey = (username, key) => `${username}/${key}`;
const makeUserGalleryKey = username => `${username}/gallery/${uuidv4()}`;
const getUserGalleryPath = username => `${username}/gallery/`;

export const downloadPhoto = key => async (dispatch, getState) => {
  const { username } = getState().authReducer.user;
  const userKey = toUserKey(username, key);
  const objects = await Storage.list('');
  const keys = objects.map(({ key }) => key);
  dispatch({
    type: IMAGE_DOWNLOAD_FETCH
  });
  if (!keys.includes(userKey)) {
    dispatch({
      type: IMAGE_DOWNLOAD_SUCCESS,
      payload: {
        key,
        photoURL: ''
      }
    });
    return;
  }
  Storage.get(userKey)
    .then(response => {
      dispatch({
        type: IMAGE_DOWNLOAD_SUCCESS,
        payload: {
          key,
          photoURL: response
        }
      });
    })
    .catch(error => {
      dispatch({
        type: IMAGE_DOWNLOAD_FAIL,
        payload: error
      });
    });
};

export const uploadPhoto = e => (dispatch, getState) => {
  const [file] = e.target.files;
  const { username } = getState().authReducer.user;
  const key = e.target.name;
  const userKey = toUserKey(username, key);
  const tempURL = URL && URL.createObjectURL && URL.createObjectURL(file);
  if (file.size >= 3e6) {
    dispatch({
      type: IMAGE_UPLOAD_FAIL,
      payload: 'File size should be less than 3 MB'
    });
    toast.error('File size should be less than 3 MB', {
      className: 'toastify_error'
    });
  } else {
    dispatch({
      type: IMAGE_UPLOAD_FETCH,
      payload: {
        photoURL: tempURL,
        key
      }
    });
    Storage.put(userKey, file)
      .then(_response => {
        dispatch({
          type: IMAGE_UPLOAD_SUCCESS
        });
        downloadPhoto(key)(dispatch, getState);
      })
      .catch(error => {
        dispatch({
          type: IMAGE_UPLOAD_FAIL,
          payload: error
        });
        toast.error('Image failed to upload', {
          className: 'toastify_error'
        });
      });
  }
};

export const uploadToGallery = e => (dispatch, getState) => {
  const [file] = e.target.files;
  const { username } = getState().authReducer.user;
  const userKey = makeUserGalleryKey(username);
  const tempURL = URL && URL.createObjectURL && URL.createObjectURL(file);
  if (file.size >= 15e5) {
    dispatch({
      type: GALLERY_UPLOAD_FAIL,
      payload: 'File size should be less than 1.5 MB'
    });
    toast.error('File size should be less than 1.5 MB', { className: 'toastify_error' });
  } else {
    dispatch({
      type: GALLERY_UPLOAD_FETCH,
      payload: {
        photoURL: tempURL,
        key: userKey
      }
    });
    Storage.put(userKey, file)
      .then(_response => {
        dispatch({
          type: GALLERY_UPLOAD_SUCCESS,
          payload: { key: userKey }
        });
      })
      .catch(error => {
        dispatch({
          type: GALLERY_UPLOAD_FAIL,
          payload: error
        });
        toast.error('Image failed to upload', {
          className: 'toastify_error'
        });
      });
  }
};

export const deleteFromGallery = key => dispatch => {
  dispatch({
    type: GALLERY_IMAGE_DELETE_FETCH,
    payload: key
  });
  Storage.remove(key)
    .then(_response => {
      dispatch({
        type: GALLERY_IMAGE_DELETE_SUCCESS
      });
    })
    .catch(error => {
      dispatch({
        type: GALLERY_IMAGE_DELETE_FAIL,
        payload: error
      });
    });
};

export const listGallery = () => (dispatch, getState) => {
  const { username } = getState().authReducer.user;
  const gallery = getUserGalleryPath(username);
  dispatch({
    type: LIST_GALLERY_FETCH
  });
  Storage.list(gallery)
    .then(async objects => {
      const photoURLs = await Promise.all(objects.map(({ key }) => Storage.get(key)));
      // This pairs each URL with its key, which we'll need for deleting the image
      // Also get `lastModified` field for sorting
      const objectsWithURLs = zipWith((object, photoURL) => ({ ...object, photoURL }), objects, photoURLs);
      dispatch({
        type: LIST_GALLERY_SUCCESS,
        payload: objectsWithURLs
      });
    })
    .catch(error => {
      dispatch({
        type: LIST_GALLERY_FAIL,
        payload: error
      });
    });
};

export const getUserPhotos = () => (dispatch, getState) => {
  downloadPhoto('house')(dispatch, getState);
  downloadPhoto('profile')(dispatch, getState);
  listGallery()(dispatch, getState);
};
