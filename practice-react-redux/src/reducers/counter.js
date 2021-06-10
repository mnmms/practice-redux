import React from 'react';
import { SET_DIFF, INCREASE, DECREASE } from '../actions/counter';

const initialState = {
  number: 0,
  diff: 1
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      };
      case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      };
      case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      };
      default: 
      return state;
  }
}

export default counter;