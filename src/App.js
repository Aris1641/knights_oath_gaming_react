import React from 'react';
import './App.css';
import Home from './Containers/Home';
import About from './Containers/About';
import Founders from './Containers/Founders';
import { Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/founders">Founders</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/founders" component={Founders} />

      </Switch>
    </div>

  );
}

export default App;

