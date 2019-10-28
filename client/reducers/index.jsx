import { combineReducers } from 'redux';
import user from './user';
import comment from './comment';

const rooReducer = combineReducers({
  user,
  comment
});

export default rooReducer;
