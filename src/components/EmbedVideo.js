import React from 'react';
import PropTypes from 'prop-types';

function EmbedVideo({id, title}) {
  return(
    <div>
      <h3>{title}</h3>
      <div className='video-responsive'>
        <iframe width="640" height="360" src={`https://www.youtube.com/embed/${id}`} title={title} frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  )
}

EmbedVideo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default EmbedVideo;