import React from 'react';
import { Route, Link } from 'react-router-dom';
import CounterContainer from './container/CounterContainer';
import TodoContainer from './container/TodoContainer';
import InputSample from './components/InputSample';

import Home from './components/Home';
import About from './components/About';
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';

function App() {

  return (
    <div>
      {/* <Counter />
      <InputSample /> */}
      
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">예제</Link>
        </li>
        <hr />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
      </ul>

      <CounterContainer/>
      {/* <TodoContainer /> */}
    </div>
  );
}

export default App;
