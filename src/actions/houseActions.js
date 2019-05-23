import {
  MAKE_HOUSE_FETCH,
  MAKE_HOUSE_SUCCESS,
  MAKE_HOUSE_FAIL,
  EDIT_HOUSE_INFO,
  CANCEL_SAVE_HOUSE_INFO,
  SAVE_HOUSE_INFO_FETCH,
  SAVE_HOUSE_INFO_SUCCESS,
  SAVE_HOUSE_INFO_FAIL
} from './index';
import { API, graphqlOperation } from 'aws-amplify';
import { makeUser } from './usersActions';
import { createHouse, updateHouse } from '../graphql/mutations';
import axios from 'axios';
import { toast } from 'react-toastify';

export const makeHouse = ({ id, houseInput }, history) => dispatch => {
  return axios
    .post('https://labs12-real-estate.herokuapp.com/api/houses/getprecisevalue', {
      address: houseInput.address,
      countertops: houseInput.countertops,
      flooring: houseInput.flooring,
      roofAge: houseInput.roofAge,
      furnaceAge: houseInput.furnaceAge
    })
    .then(data => {
      houseInput.valuation = Math.round(data.data.value);
      dispatch({ type: MAKE_HOUSE_FETCH, payload: houseInput });
      return API.graphql(graphqlOperation(createHouse, { input: houseInput }))
        .then(({ data }) => {
          const house = data.createHouse;
          dispatch({ type: MAKE_HOUSE_SUCCESS, payload: house });
          makeUser(id, history)(dispatch);
        })
        .catch(error => {
          dispatch({ type: MAKE_HOUSE_FAIL, payload: error });
        });
    })
    .catch(error => {
      dispatch({ type: MAKE_HOUSE_FAIL, payload: error });
    });
};

export const saveHouseInfo = ({ field, changes, id }) => dispatch => {
  if (changes.description === '') {
    changes.description = null;
  }
  if (changes.recentRemodel === '') {
    changes.recentRemodel = null;
  }
  dispatch({ type: SAVE_HOUSE_INFO_FETCH, payload: { changes, field, id } });
  return API.graphql(graphqlOperation(updateHouse, { input: { ...changes, id } }))
    .then(({ data }) => {
      const house = data.updateHouse;
      dispatch({ type: SAVE_HOUSE_INFO_SUCCESS, payload: house });
    })
    .catch(error => {
      dispatch({ type: SAVE_HOUSE_INFO_FAIL, payload: error });
      toast.error('Something went wrong. You may have entered an invalid value.', { className: 'toastify_error', autoClose: 3000 });
    });
};

export const isEditing = field => {
  return {
    type: EDIT_HOUSE_INFO,
    payload: field
  };
};

export const cancelSaveHouseInfo = field => {
  return {
    type: CANCEL_SAVE_HOUSE_INFO,
    payload: field
  };
};
