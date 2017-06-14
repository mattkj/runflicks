import React, { Component } from 'react';
import Loading from './Loading';
import Thumbnails from './Thumbnails';

class Home extends Component {
  render() {
    let content;
    const videoResults = this.props.videos;
    const loading = this.props.loading;

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
