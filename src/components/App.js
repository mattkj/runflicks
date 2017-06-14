import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import {youTube} from '../utils/gapi';
import Home from './Home';
import About from './About';
import Video from './Video';

const allVids = [
  'https://www.youtube.com/watch?v=yg-TqEFYcfM',
  'https://www.youtube.com/watch?v=jTi7VtrLL0k'
];
const costanzaVids = [
  'https://www.youtube.com/watch?v=A66ierfTCUQ',
  'https://www.youtube.com/watch?v=8DoARSlv-HU'
];
const kramerVids = [
  'https://www.youtube.com/watch?v=VyNWVdExM24'
];

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: '',
      loading: true,
    }
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
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/video/:id' component={Video} />
        </div>
      </Router>
    );
  }
}

export default App;
