import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import {youTube} from '../utils/gapi';
import Home from './Home';
import About from './About';
import Video from './Video';

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: '',
      loading: true,
    }
    this.filterVideos = this.filterVideos.bind(this);
  }

  async filterVideos(ids){
    const videos = await youTube.getVideos(ids);
    this.setState({
      videos: videos.result.items,
      loading: false,
    });
  }

  render(){
    return (
      <Router>
        <div>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          <Route exact path='/' render={() => <Home videos={this.state.videos} loading={this.state.loading} filterVideos={this.filterVideos} />} />
          <Route path='/about' component={About} />
          <Route path='/video/:id' component={Video} />
        </div>
      </Router>
    );
  }
}

export default App;
