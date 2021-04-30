import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';
import Todos from '../components/Todos';

const TodoContainer = () => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

    return (
        <Todos todos={todos} onCreate={onCreate} onToggle={onToggle}/>
    )
}

export default TodoContainer;