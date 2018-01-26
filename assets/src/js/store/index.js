import { createStore } from 'redux';
import todoApp from '../reducers';

let store = createStore(todoApp);  // Create store from reducers

export default store;
