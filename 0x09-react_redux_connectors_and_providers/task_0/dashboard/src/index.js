import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App';
import { createStore } from 'redux';
import { uiReducer } from './reducers/uiActionTypes';
import { Provider } from 'react-redux';
import { FromJS } from 'immutable';
import { configureStore } from '@reduxjs/toolkit';

const store = createStore(uiReducer, {});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
