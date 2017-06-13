import React, { Component } from 'react';
import {youTube} from '../utils/gapi';
import Loading from './Loading';

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: '',
      loading: true,
    }
  }

  async componentDidMount(){
    const videos = await youTube.search('3', 'trail running', 'video');
    // const videos = await getVideo('zwGqJOONw1g');
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
      return <Loading />
    } else {
      content = videos.map(item => {
        return (
          <div key={item.id.videoId}>
            <h3>{item.snippet.title}</h3>
            <div className='video-responsive'>
              <iframe width="640" height="360" src={`https://www.youtube.com/embed/${item.id.videoId}`} title={item.snippet.title} frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        )
      });
    }

    return (
      <div className="content">
        {content}
      </div>
    );
  }
}

export default App;
