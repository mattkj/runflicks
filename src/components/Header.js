import React from 'react';
import {siteName, tagline} from '../data';
// import {NavLink} from 'react-router-dom';

function Header() {
  return(
    <header>
      <h1>{siteName}</h1>
      <div>{tagline}</div>
      {/*
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      */}
    </header>
  )
}

export default Header;