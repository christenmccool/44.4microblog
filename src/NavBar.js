import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-left">
        <NavLink exact to="/">Microblog</NavLink>
      </div>
      <div className="NavBar-right">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/new">New Post</NavLink>
      </div>
    </div>
  )
}

export default NavBar;