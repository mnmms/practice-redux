import React from 'react';
import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Redux Extension 사용하기 위해
  );

console.log('@store: ', store.getState());

export default store;