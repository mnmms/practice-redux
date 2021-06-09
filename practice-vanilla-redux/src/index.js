// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import './exercise';

// ReactDOM.render(
//   <Provider>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// reportWebVitals();

// TODO: --------------------- Vanilla Redux

import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// let count = 0;

// number.innerText = count;

// const updateNumber = () => {
//   number.innerText = count;
// }

// const handleAdd = () => {
//   console.log('add');
//   count++;
//   updateNumber();
// }

// const handleMinus = () => {
//   console.log('minus');
//   count--;
//   updateNumber();
// }

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  // if(action.type === "ADD") {
  //   return count + 1;
  // } else if(action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }

  switch(action.type) {
    case ADD: 
      return count + 1;
    case MINUS:
      return count - 1;

    default:
      return count
  }
};

const countStore = createStore(countModifier);

// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);


// TODO: Vanilla Redux ------------------------