import { Storage } from 'aws-amplify';
import { IMAGE_UPLOAD_FETCH, IMAGE_UPLOAD_SUCCESS, IMAGE_UPLOAD_FAIL, IMAGE_DOWNLOAD_FETCH, IMAGE_DOWNLOAD_SUCCESS, IMAGE_DOWNLOAD_FAIL } from '.';

export const downloadPhoto = key => (dispatch, getState) => {
  const { username } = getState().authReducer.user;
  const userKey = username + key;
  dispatch({
    type: IMAGE_DOWNLOAD_FETCH
  });
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
  const userKey = username + key;
  const tempURL = URL.createObjectURL(file);
  if (file.size >= 3e6) {
    dispatch({
      type: IMAGE_UPLOAD_FAIL,
      payload: 'File size should be less than 3 MB'
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
      });
  }
};

export const getUserPhotos = () => (dispatch, getState) => {
  downloadPhoto('house')(dispatch, getState);
  // downloadPhoto('profile')(dispatch);
};
