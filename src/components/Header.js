import React from 'react';
import {siteName, tagline} from '../data';
import {Link} from 'react-router-dom';

function Header() {
  return(
    <header>
      <Link exact to="/">
        <h1>{siteName}</h1>
      </Link>
      <div>{tagline}</div>
    </header>
  )
}

export default Header;