import React, { Component } from 'react';
import {youTube} from '../utils/gapi';
import Loading from './Loading';
import Thumbnails from './Thumbnails';

const allVids = ['VyNWVdExM24','A66ierfTCUQ','8DoARSlv-HU'];
const costanzaVids = ['A66ierfTCUQ','8DoARSlv-HU'];
const kramerVids = ['VyNWVdExM24'];

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
    const videos = await youTube.getVideos(allVids.join());
    this.setState({
      videos: videos.result.items,
      loading: false
    });
  }

  async filterVideos(ids){
    const videos = await youTube.getVideos(ids.join());
    this.setState({
      videos: videos.result.items,
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
        const thumbnails = item.snippet.thumbnails;
        const src = (thumbnails.maxres ? thumbnails.maxres.url : thumbnails.medium.url);
        return <Thumbnails 
                  key={item.id}
                  id={item.id}
                  title={item.snippet.title} 
                  src={src} 
                />
      });
    }

    return (
      <div className="content">
        <h1>Home</h1>
        <button onClick={() => this.filterVideos(allVids)}>Show All</button>
        <button onClick={() => this.filterVideos(costanzaVids)}>Costanza Filter</button>
        <button onClick={() => this.filterVideos(kramerVids)}>Kramer Filter</button>
        {content}
      </div>
    );
  }
}

export default Home;
