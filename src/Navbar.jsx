import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div id="navbar">
        <Link className="navbar-link-home" to="/"> Home </Link>
        <Link className="navbar-link-blue" to="/blue"> Blue </Link>
        <Link className="navbar-link-red" to="/red"> Red </Link>
        <Link className="navbar-link-poke" to="/Pokemon"> Pokemon </Link>
      </div>
    );
  };
  
  export default Navbar;