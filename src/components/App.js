import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import firebase from '../utils/firebase';
import {youTube} from '../utils/gapi';
import Header from './Header';
import Home from './Home';
import Video from './Video';
import shuffleArray from '../utils/shuffleArray';

let data = [];
const defaultFilter = 'All';
const videosRef = firebase.database().ref('videos');
const filtersRef = firebase.database().ref('filterList');

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: [],
      loading: true,
      filterList: null,
      currentFilter: defaultFilter
    }
    this.filterVideos = this.filterVideos.bind(this);
  }

  componentDidMount(){
    videosRef.once('value').then(snapshot => {
      data = snapshot.val();
      this.filterVideos(this.state.currentFilter);
    });
    filtersRef.once('value').then(snapshot => {
      const filterList = snapshot.val();
      this.setState({filterList});
    });
  }

  async filterVideos(filter){
    let videos = data;
    if (videos.length === 0) return;

    if (filter === defaultFilter){
      shuffleArray(videos);
    } else {
      videos = videos.filter(video => video.tags.includes(filter));
    }
    videos = videos.map(video => {
      return video.url.substring(video.url.indexOf("?v=") + 3);
    }).join();

    const filteredVideos = await youTube.getVideos(videos);
    this.setState({
      videos: filteredVideos.result.items,
      loading: false,
      currentFilter: filter
    });
  }

  render(){
    return (
        <Router>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path='/' render={() => <Home videos={this.state.videos} loading={this.state.loading} filterList={this.state.filterList} filterVideos={this.filterVideos} currentFilter={this.state.currentFilter} />} />
              <Route path='/video/:id' component={Video} />
              <Route render={() => <Home videos={this.state.videos} loading={this.state.loading} filterVideos={this.filterVideos} filterList={this.state.filterList} currentFilter={this.state.currentFilter} />} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
