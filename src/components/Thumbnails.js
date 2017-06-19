import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Thumbnails({id, title, src}) {
  return(
    <div>
      <Link to={{
        pathname: `/video/${id}`,
        search: `?title=${title}`
      }}>
        <div className='thumbnail' style={{backgroundImage: `url(${src})`}}>
          <div>{title}</div>
        </div>
      </Link>
    </div>
  )
}

Thumbnails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Thumbnails;