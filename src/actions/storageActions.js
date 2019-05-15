import { Storage } from 'aws-amplify';
import { IMAGE_UPLOAD_FETCH, IMAGE_UPLOAD_SUCCESS, IMAGE_UPLOAD_FAIL, IMAGE_DOWNLOAD_FETCH, IMAGE_DOWNLOAD_SUCCESS, IMAGE_DOWNLOAD_FAIL } from '.';

export const downloadPhoto = key => dispatch => {
  dispatch({
    type: IMAGE_DOWNLOAD_FETCH
  });
  Storage.get(key)
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

export const uploadPhoto = e => dispatch => {
  const [file] = e.target.files;
  const key = e.target.name;
  const tempURL = URL.createObjectURL(file);
  if (file.size >= 2e6) {
    dispatch({
      type: IMAGE_UPLOAD_FAIL,
      payload: 'File size should be less than 2 MB'
    });
  } else {
    dispatch({
      type: IMAGE_UPLOAD_FETCH,
      payload: {
        photoURL: tempURL,
        key
      }
    });
    Storage.put(key, file)
      .then(_response => {
        dispatch({
          type: IMAGE_UPLOAD_SUCCESS
        });
        downloadPhoto(key)(dispatch);
      })
      .catch(error => {
        dispatch({
          type: IMAGE_UPLOAD_FAIL,
          payload: error
        });
      });
  }
};

export const getUserPhotos = () => dispatch => {
  downloadPhoto('house')(dispatch);
  // downloadPhoto('profile')(dispatch);
};
