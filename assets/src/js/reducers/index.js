import { combineReducers } from 'redux';

import { user } from './user';
import { todo } from './todo';


const todoApp = combineReducers({
    user,
    todo
});

export default todoApp;
