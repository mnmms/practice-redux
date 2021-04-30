// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Counter from './Counter';
// import { setDiff, increment, decrement } from './actions';

// const CounterContainer = () => {


//     const { number, diff } = useSelector(state => ({
//         number: state.number,
//         diff: state.diff
//     }))

//     const dispatch = useDispatch();

//     const onIncrement = () => dispatch(increment());
//     const onDecrement = () => dispatch(decrement());
//     const onSetDiff = diff => dispatch(setDiff(diff));

//     return (
//         <Counter number={number} diff={diff} onIncrement={onIncrement} onDecrement={onDecrement} onSetDiff={onSetDiff} />
//     )
// }

// export default CounterContainer;

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';
import Counter from '../components/Counter';

const CounterContainer = () => {
    // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일

    const { number } = useSelector(state => ({
        number: state.number
    }))
    
    const dispatch = useDispatch();

    const onIncrement = () => dispatch(increment());
    const onDecrement = () => dispatch(decrement());

    return (
        <Counter number={number} onIncrement={onIncrement} onDecrement={onDecrement} />
    )
}

export default CounterContainer;