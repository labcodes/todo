import { createStore } from 'redux';
import todoApp from '../reducers';

let store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);  // Create store from reducers

export default store;
