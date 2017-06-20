import React from 'react';
import PropTypes from 'prop-types';
import {filterList} from '../data';

const printTitle = (group) => {
  return <h2 key={group.name}>{group.name}</h2>
}

const printFilters = (group, filterVideos) => {
    return group.filters.map(filter => {
      return <button key={filter} data-filter={filter} onClick={() => filterVideos(filter)}>{filter}</button>
    })
}

const Filters = ({filterVideos}) => {
  return(
    <div className='filters'>
      {
        filterList.map(group => {
          return ([
            printTitle(group),
            printFilters(group, filterVideos)
          ])
        })
      }
    </div>
  )
}

Filters.propTypes = {
  filterVideos: PropTypes.func.isRequired
};

export default Filters;