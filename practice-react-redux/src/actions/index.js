export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADDTODO = 'addTodo';
export const TOGGLETODO = 'toggleTodo';



export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

export const addTodo = text => ({ type: ADDTODO, text });
export const toggleTodo = id => ({ type: TOGGLETODO, id });
