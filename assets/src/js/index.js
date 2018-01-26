
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './containers/App';
import store from './store';

import '../scss/index.scss'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('react-app')
);
