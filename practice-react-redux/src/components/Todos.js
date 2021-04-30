import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
    return (
        <li style={{ textDecoration: todo.done? 'line-through':'none' }} onClick={() => onToggle(todo.id)}>
            {todo.text}
        </li>
    )
})

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
    return (
        <ul>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
            })}
        </ul>
    )
})

const Todos = ({ todos, onCreate, onToggle }) => {

    const [text, setText] = useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault(); // submit 이벤트 발생시 새로고침 방지
        onCreate(text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={text} onChange={onChange}/>
                <button type="submit">등록</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    )
}

export default Todos;