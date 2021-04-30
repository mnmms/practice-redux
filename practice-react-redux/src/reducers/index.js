import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer';
import TodosReducer from './TodosReducer';

const rootReducer = combineReducers({
    CounterReducer,
    TodosReducer
})

export default rootReducer;