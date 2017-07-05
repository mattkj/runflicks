import React, { Component } from 'react';
import Loading from './Loading';
import PropTypes from 'prop-types';
import firebase from '../utils/firebase';

const database = firebase.database().ref('filterList');

class Filters extends Component{
  constructor(){
    super();
    this.state = {
      filterList: null
    }
  }
  componentDidMount(){
    database.once('value').then(snapshot => {
      const filterList = snapshot.val();
      this.setState({filterList});
    });
  }

  printTitle(group) {
    if (group.name){
      return <div className="filter-group" key={group.name}>{group.name}</div>
    }
  }

  printFilters(group, filterVideos){
      return group.filters.map(filter => {
        return <button key={filter} data-filter={filter} onClick={() => filterVideos(filter)}>{filter}</button>
      })
  }

  render(){
    let content;
    const filterVideos = this.props.filterVideos;

    if (!this.state.filterList){
      return <Loading />;
    } else {
      content = this.state.filterList.map(group => {
        return ([
          this.printTitle(group),
          this.printFilters(group, filterVideos)
        ])
      })
    }

    return(
      <div className='filters'>
        {content}
      </div>
    )
  }
}

Filters.propTypes = {
  filterVideos: PropTypes.func.isRequired
};

export default Filters;