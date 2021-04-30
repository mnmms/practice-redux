import { ADDTODO, TOGGLETODO } from '../actions';

const initialState = {
    id: 1,
    text: '',
}

const TodosReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADDTODO:
            return {
                ...state,
                text: action.text
            }
        case TOGGLETODO:
            return {
                ...state,
                id: action.id
            }
        default:
            return state;
    }
}

export default TodosReducer;