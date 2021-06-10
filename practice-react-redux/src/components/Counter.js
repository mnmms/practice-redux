import React from 'react';

const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {

  const onChange = e => {
    onSetDiff(parseInt(e.target.value, 10)); // e.target.value는 문자열... 숫자로 변환
    // parseInt(x, base)
    // parseInt('1001', 2) -> 9, parseInt('0xf', 16) -> 15
  }

  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <input type="number" value={diff} onChange={onChange} min="1"/>
    </div>
  )
}

export default Counter;