import { createStore } from 'redux';

const initialState = {
    counter: 0,
    text: '',
    list: []
}

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => {
    return {
        type: INCREASE
    };
}

const decrease = () => {
    return {
        type: DECREASE
    };
}

const changeText = text => {
    return {
        type: CHANGE_TEXT,
        text
    }
}

const addToList = item => {
    return {
        type: ADD_TO_LIST,
        item
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };

        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };

        default:
            return state;
    }
}

const store = createStore(reducer);

console.log(store.getState());

const listener = () => {
    const state = store.getState();
    console.log(state);
}

// 구독 해제시 unsubscribe() 호출
const unsubscribe = store.subscribe(listener);

// 액션들을 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('hello'));
store.dispatch(addToList({ id: 1, text: 'Wow' }));
