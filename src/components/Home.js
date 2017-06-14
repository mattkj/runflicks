import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Thumbnails from './Thumbnails';
import Filters from './Filters';

class Home extends Component {
  componentDidMount(){
    const filter = this.props.currentFilter;
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
        <Filters filterVideos={this.props.filterVideos}  />
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
