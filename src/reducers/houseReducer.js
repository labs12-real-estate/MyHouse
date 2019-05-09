import {
  MAKE_HOUSE_FETCH,
  MAKE_HOUSE_SUCCESS,
  MAKE_HOUSE_FAIL,
  GET_USERHOUSE_FETCH,
  GET_USERHOUSE_SUCCESS,
  GET_USERHOUSE_FAIL,
  EDIT_HOUSE_INFO,
  SAVE_HOUSE_INFO_FETCH,
  SAVE_HOUSE_INFO_SUCCESS,
  SAVE_HOUSE_INFO_FAIL,
  CANCEL_SAVE_HOUSE_INFO
} from '../actions';

const initialState = {
  error: null,
  fetching: false,
  house: { parcelData: {} },
  editingFields: []
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
    case SAVE_HOUSE_INFO_FAIL:
      return { ...state, fetching: false, error: action.payload };
    case EDIT_HOUSE_INFO:
      return {
        ...state,
        editingFields: [...state.editingFields, action.payload]
      };
    case SAVE_HOUSE_INFO_FETCH:
      return {
        ...state,
        house: { ...state.house, ...action.payload.changes },
        editingFields: state.editingFields.filter(field => field !== action.payload.field)
      };
      case SAVE_HOUSE_INFO_SUCCESS:
      return {
        ...state,
        house:  action.payload 
      };
    case CANCEL_SAVE_HOUSE_INFO:
      return {
        ...state,
        editingFields: state.editingFields.filter(field => field !== action.payload)
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
