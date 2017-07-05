import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component{

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
    const filterList = this.props.filterList;
    const filterVideos = this.props.filterVideos;

    content = filterList.map(group => {
      return ([
        this.printTitle(group),
        this.printFilters(group, filterVideos)
      ])
    })

    return(
      <div className='filters'>
        {content}
      </div>
    )
  }
}

Filters.propTypes = {
  filterList: PropTypes.array.isRequired,
  filterVideos: PropTypes.func.isRequired
};

export default Filters;