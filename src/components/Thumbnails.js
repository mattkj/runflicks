import React from 'react';
import PropTypes from 'prop-types';

function Thumbnails({title, src}) {
  return(
    <div>
      <h3>{title}</h3>
        <img src={src} alt={title} />
    </div>
  )
}

Thumbnails.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Thumbnails;