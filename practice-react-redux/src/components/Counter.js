// 훅스로 상태 관리하기

// import React, { useState } from 'react';

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const increase = () => {
//       setCount(prevCount => prevCount + 1);
//     }
    
//     const decrease = () => {
//       setCount(prevCount => prevCount - 1);
//     }

//     return (
//         <div>
//             <button onClick={increase}>+</button>
//             {count}
//             <button onClick={decrease}>-</button>
//         </div>
//     );
// }

// export default Counter;




// 리덕스로 상태 관리하기

// import React from 'react';

// const Counter = ({ number, diff, onIncrement, onDecrement, onSetDiff }) => {

//   const onChange = e => {
//     onSetDiff(parseInt(e.target.value, 10))
//   }
  
//   return (
//     <div>
//       <h1>{number}</h1>
//       <div>
//         <input type="number" value={diff} min="1" onChange={onChange} />
//         <button onClick={onIncrement}>+</button>
//         <button onClick={onDecrement}>-</button>
//       </div>
//     </div>
//   )
// };

// export default Counter;

const Counter = ({ number, onIncrement, onDecrement }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default Counter;