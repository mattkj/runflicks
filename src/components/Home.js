import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Thumbnails from './Thumbnails';
import Filters from './Filters';
import parseDuration from '../utils/parseDuration';
import '../utils/nodeListPolyfill';

class Home extends Component {
  componentDidMount(){
    this.props.filterVideos(this.props.currentFilter);
    this.highlightCurrentFilter();
  }

  componentDidUpdate(){
    this.highlightCurrentFilter();
  }

  highlightCurrentFilter(){
    const buttons = document.querySelectorAll('.filters > button');
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
        const duration = parseDuration(item.contentDetails.duration);
        return <Thumbnails 
                  key={item.id}
                  id={item.id}
                  title={item.snippet.title}
                  channel={item.snippet.channelTitle} 
                  duration={duration}
                  src={src} 
                />
      });
    }

    return (
      <div className="main">
        <aside>
          <Filters filterVideos={this.props.filterVideos}  />
          <div className='credits'>
            Made by <a href='https://github.com/mattkj'>Matt J</a>
          </div>
        </aside>
        <div className="videos">
          {content}
        </div>
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
