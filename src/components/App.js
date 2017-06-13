import React, { Component } from 'react';
import {youTube} from '../utils/gapi';
import Loading from './Loading';
import Thumbnails from './Thumbnails';
// import EmbedVideo from './EmbedVideo';

const videoIds = ['Ks-_Mh1QhMc','c0KYU2j0TM4','eIho2S0ZahI'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: '',
      loading: true,
    }
  }

  async componentDidMount(){
    // const videos = await youTube.search('3', 'trail running', 'video');
    const videos = await youTube.getVideos(videoIds.join());
    this.setState({
      videos: videos.result.items,
      loading: false
    });
  }
  
  render() {
    let content;
    const videoResults = this.state.videos;
    const loading = this.state.loading;

    if (loading === true) {
      return <Loading />
    } else {
      content = videoResults.map(item => {
        return <Thumbnails 
                  key={item.id}
                  title={item.snippet.title} 
                  src={item.snippet.thumbnails.maxres.url} 
                />
        // return  <EmbedVideo 
        //           key={item.id}
        //           id={item.id}
        //           title={item.snippet.title} 
        //         />
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
