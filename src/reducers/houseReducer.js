import {
  MAKE_HOUSE_FETCH,
  MAKE_HOUSE_SUCCESS,
  MAKE_HOUSE_FAIL,
  GET_USERHOUSE_FETCH,
  GET_USERHOUSE_SUCCESS,
  GET_USERHOUSE_FAIL,
  EDIT_HOUSE_INFO,
  SAVE_HOUSE_INFO
} from '../actions';
import { houseProfileData } from '../dummy-data-structures/house-profile-dummy-data';

const initialState = {
  error: null,
  fetching: false,
  house: { parcelData: {} },
  isEditing: false,
  houseProfileData
};

export const houseReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_HOUSE_FETCH:
    case GET_USERHOUSE_FETCH:
      return { ...state, fetching: true };
    case MAKE_HOUSE_SUCCESS:
    case GET_USERHOUSE_SUCCESS:
      return { ...state, fetching: false, house: action.payload };
    case MAKE_HOUSE_FAIL:
    case GET_USERHOUSE_FAIL:
      return { ...state, fetching: false, error: action.payload };
    case EDIT_HOUSE_INFO:
      return {
        ...state,
        isEditing: action.payload
      };
    default:
      return state;
  }
};

/* export const houseProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_HOUSE_INFO:
      return {
        ...state,
        isEditing: houseProfileData.some(info => info.id === action.payload)
      };
    default:
      return state;
  }
}; */
