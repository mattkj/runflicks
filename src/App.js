import React, { Component } from 'react';
import logo from './logo.svg';
import {search} from './youtube';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: '',
      loading: true,
    }
  }

  async componentDidMount(){
    const videos = await search('3', 'trail running', 'video');
    this.setState({
      videos: videos.result.items,
      loading: false
    });
  }
  
  render() {
    let content;
    const videos = this.state.videos;
    const loading = this.state.loading;

    if (loading === true) {
      content = 'Loading'
    } else {
      content = videos.map(item => {
        return (
          <div key={item.id.videoId}>
            <h3>{item.snippet.title}</h3>
            <div className='video-responsive'>
              <iframe width="640" height="360" src={`https://www.youtube.com/embed/${item.id.videoId}`} frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        )
      });
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {content}
        </div>
      </div>
    );
  }
}

export default App;
