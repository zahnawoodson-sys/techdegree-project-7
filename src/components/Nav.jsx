import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/cats">Cats</NavLink></li> {/* NavLink will get an "active" class when clicked */}
        <li><NavLink to="/dogs">Dogs</NavLink></li> 
        <li><NavLink to="/computers">Computers</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
