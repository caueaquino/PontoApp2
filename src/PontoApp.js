import React from 'react';
import Router from './Router';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import {composeWithDevTools} from 'remote-redux-devtools';

import rootReducer from './reducers';

const enhance = composeWithDevTools({
  realtime: true,
  hostname: 'localhost',
  port: 8000,
});

const store = createStore(rootReducer, enhance(applyMiddleware(reduxThunk)));

const PontoApp = prop => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default PontoApp;
