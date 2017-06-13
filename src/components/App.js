import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Video from './Video';

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
          <Route path='/video/:id' component={Video} />
        </div>
      </Router>
    );
}

export default App;
