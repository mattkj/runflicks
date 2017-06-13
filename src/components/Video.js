import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

function Video({match, location}) {
  const title = queryString.parse(location.search).title;
  
  return(
    <div>
      <h3>{title}</h3>
      <div className='video-responsive'>
        <iframe width="640" height="360" src={`https://www.youtube.com/embed/${match.params.id}`} title={title} frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  )
}

Video.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Video;