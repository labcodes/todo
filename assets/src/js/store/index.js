import { createStore } from 'redux';
import todoApp from '../reducers';

const store = createStore(
  todoApp,
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-disable no-underscore-dangle */
);

export default store;
