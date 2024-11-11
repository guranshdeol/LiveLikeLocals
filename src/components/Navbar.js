import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="Logo" title="LiveLikeLocals" />
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
          <Link to="/bookings">Bookings</Link>
          <Link to="/#package">Packages</Link>
          <Link to="/about">About Us</Link>
          <Link to="/knowus">Know Us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
