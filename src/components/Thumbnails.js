import React from 'react';

function Thumbnails({title, src}) {
  return(
    <div>
      <h3>{title}</h3>
        <img src={src} alt={title} />
    </div>
  )
}

export default Thumbnails;