import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
      setCount(prevCount => prevCount + 1);
    }
    
    const decrease = () => {
      setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <button onClick={increase}>+</button>
            {count}
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;