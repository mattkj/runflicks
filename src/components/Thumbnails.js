import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Thumbnails({id, title, src}) {
  return(
    <div>
      <h3>{title}</h3>
        <Link to={{
          pathname: `/video/${id}`,
          search: `?title=${title}`
        }}>
          <img src={src} alt={title} />
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