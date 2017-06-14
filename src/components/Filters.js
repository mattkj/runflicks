import React from 'react';
import PropTypes from 'prop-types';
import {data} from '../data';

const Filters = ({filterVideos}) => {
  return(
    <div className='filters'>
      <button data-filter='allVids' onClick={() => filterVideos('allVids', data.allVids.videos)}>Show All</button>
      <button data-filter='costanzaVids' onClick={() => filterVideos('costanzaVids', data.costanzaVids.videos)}>Costanza Filter</button>
      <button data-filter='kramerVids' onClick={() => filterVideos('kramerVids', data.kramerVids.videos)}>Kramer Filter</button>
    </div>
  )
}

Filters.propTypes = {
  filterVideos: PropTypes.func.isRequired
};

export default Filters;