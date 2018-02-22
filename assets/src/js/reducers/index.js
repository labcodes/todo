import { combineReducers } from 'redux';

import { alert } from './alert-message';
import { todo } from './todo';
import { user } from './user';
import { todo } from './todo';


const todoApp = combineReducers({
  alert,
  todo,
  user,
});

export default todoApp;
