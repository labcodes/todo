import { combineReducers } from 'redux';

import { alert } from './alert-message';
import { todo } from './todo';
import { user } from './user';


const todoApp = combineReducers({
  alert,
  todo,
  user,
});

export default todoApp;
