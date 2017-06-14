import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Thumbnails from './Thumbnails';

const data = {
  allVids: {
    videos: [
      'https://www.youtube.com/watch?v=yg-TqEFYcfM',
      'https://www.youtube.com/watch?v=jTi7VtrLL0k'
    ]
  },
  costanzaVids: {
    videos: [
      'https://www.youtube.com/watch?v=A66ierfTCUQ',
      'https://www.youtube.com/watch?v=8DoARSlv-HU'
    ]
  },
  kramerVids: {
    videos: [
      'https://www.youtube.com/watch?v=VyNWVdExM24'
    ]
  }
};

class Home extends Component {
  componentDidMount(){
    const filter = this.props.currentFilter;
    this.props.filterVideos(this.props.currentFilter, data[filter].videos);
    this.currentFilter();
  }

  componentDidUpdate(){
    this.currentFilter();
  }

  currentFilter(){
    const buttons = document.querySelectorAll('.content > button');
    buttons.forEach(button => {
      button.classList.remove('active');
      if (button.dataset.filter === this.props.currentFilter){
        button.classList.add('active');
      }
    });
  }

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
        <button data-filter='allVids' onClick={() => this.props.filterVideos('allVids', data.allVids.videos)}>Show All</button>
        <button data-filter='costanzaVids' onClick={() => this.props.filterVideos('costanzaVids', data.costanzaVids.videos)}>Costanza Filter</button>
        <button data-filter='kramerVids' onClick={() => this.props.filterVideos('kramerVids', data.kramerVids.videos)}>Kramer Filter</button>
        {content}
      </div>
    );
  }
}

Home.propTypes = {
  videos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  filterVideos: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
};

export default Home;
