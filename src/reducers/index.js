import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { houseReducer } from './houseReducer';
import { userReducer } from './userReducer';
import { playgroundReducer } from './playgroundReducer';
import { designStudioReducer } from './designStudioReducer';

export default combineReducers({
  authReducer,
  designStudioReducer,
  houseReducer,
  userReducer,
  playgroundReducer
});
