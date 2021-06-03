import React from 'react';
import { Route, Link } from 'react-router-dom';
import Counter from './Counter';
import InputSample from './InputSample';

import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

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
    </div>
  );
}

export default App;
