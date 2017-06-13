import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import Home from './Home';
import About from './About';

const App = () => {
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
}

export default App;
