import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { houseReducer } from './houseReducer';
import { userReducer } from './userReducer';
import { playgroundReducer } from './playgroundReducer';
import { landingpageReducer } from './landingpageReducer';
import { displayReducer } from './displayReducer';
import { storageReducer } from './storageReducer';

export default combineReducers({
  authReducer,
  houseReducer,
  userReducer,
  playgroundReducer,
  landingpageReducer,
  displayReducer,
  storageReducer
});
