import React, { useState } from 'react';

// const InputSample = () => {

//     const [text, setText] = useState('');

//     const handleChange = e => {
//         setText(e.target.value);
//     }

//     const handleReset = () => {
//         setText('');
//     }

//     return (
//         <div>
//             <input value={text} onChange={handleChange}/>
//             <button onClick={handleReset}>초기화</button>
//             <b>값: {text}</b>
//         </div>
//     );
// }

const InputSample = () => {

    const [info, setInfo] = useState({
        userName: '이름',
        userNickname: '닉네임'
    });

    const handleChange = e => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    }

    const handleReset = () => {
        setInfo({
            userName: '이름',
            userNickname: '닉네임'
        });
    }

    return (
        <div>
            <input onChange={handleChange} name="userName" value={info.userName} placeholder="이름"/>
            <input onChange={handleChange} name="userNickname" value={info.userNickname} placeholder="닉네임"/>
            <button onClick={handleReset}>초기화</button>
            <b>값: {info.userName} ({info.userNickname})</b>
        </div>
    );
}

 export default InputSample;


 /*
  setState는 shouldComponentUpsate(nextProps, nextState)를 트리거하는데,
  이 메소드의 boolean 반환값에 따라 render 호출 여부가 결정
  이 메소드를 재정의하지 않으면 setState 호출시마다 render가 호출
  최적화는 shouldComponentUpdate 재정의를 통해 render 호출 여부를 결정하는 것

  setState로 특정 state의 값이 실제로 변경되기 전 shouldComponentUpsate를 호출시켜
  개발자로 하여금 해당 state의 기존 값과 새로운 값을 비교하여 render 호출 여부를 결정하도록 기화를 줌
 */