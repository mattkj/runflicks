import React, { Component } from 'react';
import Loading from './Loading';
import Thumbnails from './Thumbnails';

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

class Home extends Component {
  componentDidMount(){
    this.props.filterVideos(this.props.currentFilter, eval(this.props.currentFilter));
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
        <button data-filter='allVids' onClick={() => this.props.filterVideos('allVids', allVids)}>Show All</button>
        <button data-filter='costanzaVids' onClick={() => this.props.filterVideos('costanzaVids', costanzaVids)}>Costanza Filter</button>
        <button data-filter='kramerVids' onClick={() => this.props.filterVideos('kramerVids', kramerVids)}>Kramer Filter</button>
        {content}
      </div>
    );
  }
}

export default Home;
