import React from 'react';

function EmbedVideo({id, title}) {
  return(
    <div key={id}>
      <h3>{title}</h3>
      <div className='video-responsive'>
        <iframe width="640" height="360" src={`https://www.youtube.com/embed/${id}`} title={title} frameBorder="0" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default EmbedVideo;