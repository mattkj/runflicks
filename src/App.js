import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    require( 'google-client-api' )().then((gapi) => {
      gapi.client.init({
        'apiKey': process.env.REACT_APP_API_KEY,
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'] 
      }).then(() => {
        console.log('GAPI Initialized.');
        return gapi.client.youtube.search.list({
          maxResults: '3',
          part: 'snippet',
          q: 'running',
          type: 'video'
        })
      }).then((response) => {
        response.result.items.forEach((item) => {
          console.group();
          console.log(item.id.videoId);
          console.log(item.snippet);
          console.groupEnd();
        });
      }, (error) => {
        console.warn('Error: ' + error);
      });
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
