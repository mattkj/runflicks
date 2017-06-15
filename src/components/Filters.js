import React from 'react';
import PropTypes from 'prop-types';
import {filterList} from '../data';

const Filters = ({filterVideos}) => {
  return(
    <div className='filters'>
      {
        filterList.map(filter => {
          return <button key={filter} data-filter={filter} onClick={() => filterVideos(filter)}>{filter}</button>
        })
      }
    </div>
  )
}

Filters.propTypes = {
  filterVideos: PropTypes.func.isRequired
};

export default Filters;