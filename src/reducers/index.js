import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { houseReducer } from './houseReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  authReducer,
  houseReducer,
  userReducer
});
