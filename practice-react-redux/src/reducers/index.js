import React from 'react';
import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter // 상태명 ex) state.counter
})

export default rootReducer;