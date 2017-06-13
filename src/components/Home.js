import React, { Component } from 'react';
import {youTube} from '../utils/gapi';
import Loading from './Loading';
import Thumbnails from './Thumbnails';

const videoIds = ['VyNWVdExM24','A66ierfTCUQ','8DoARSlv-HU'];

class Home extends Component {
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
        let src = (item.snippet.thumbnails.maxres ? item.snippet.thumbnails.maxres.url : item.snippet.thumbnails.medium.url);
        return <Thumbnails 
                  key={item.id}
                  id={item.id}
                  title={item.snippet.title} 
                  src={src} 
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
        <h1>Home</h1>
        {content}
      </div>
    );
  }
}

export default Home;
