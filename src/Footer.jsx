import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer">
      <Link to="/"> Home </Link>
      <Link to="/blue"> Blue </Link>
      <Link to="/red"> Red </Link>
      <Link to="/pokemon"> Pokemon </Link>
    </div>
  );
};

export default Footer;