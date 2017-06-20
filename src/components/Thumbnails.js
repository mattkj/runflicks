import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Thumbnails({id, title, channel, src}) {
  return(
    <div className='thumbnail-wrapper'>
      <Link to={{
        pathname: `/video/${id}`,
        search: `?title=${title}`
      }}>
        <div className='thumbnail' style={{backgroundImage: `url(${src})`}}>
          <div className='info'>
            <div>{title}</div>
            <div>{channel}</div>
          </div>
        </div>
      </Link>
      <div className='overlay'></div>
    </div>
  )
}

Thumbnails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Thumbnails;