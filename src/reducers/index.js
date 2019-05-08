import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { houseReducer } from './houseReducer';
import { userReducer } from './userReducer';
import { playgroundReducer } from './playgroundReducer';
import { displayReducer } from './displayReducer';

export default combineReducers({
  authReducer,
  houseReducer,
  userReducer,
  playgroundReducer,
  displayReducer
});
