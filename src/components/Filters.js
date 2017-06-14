import React from 'react';
import PropTypes from 'prop-types';

const Filters = ({filterVideos}) => {
  return(
    <div className='filters'>
      <button data-filter='allVids' onClick={() => filterVideos('allVids')}>Show All</button>
      <button data-filter='is4K' onClick={() => filterVideos('is4K')}>4K Only</button>
      <button data-filter='is8K' onClick={() => filterVideos('is8K')}>8K Only</button>
    </div>
  )
}

Filters.propTypes = {
  filterVideos: PropTypes.func.isRequired
};

export default Filters;