import React from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import videoSrc from '../assets/videos/bgvid.mp4';
import logo from '../assets/images/logo.png';

const Home = () => {
  return (
    <div className="banner">
      <video src={videoSrc} type="video/mp4" autoPlay muted loop></video>
      <div className="content" id="home">
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
        <div className="title">
          <h1>LIVE LIKE LOCALS</h1>
          <p className="subheading">Where Travel Meets Culture: Discover Authentic Local Experiences</p>
          <Link to="/register" className="button">Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
