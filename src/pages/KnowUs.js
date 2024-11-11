import React from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import amisha from '../assets/images/amisha.jpg';
import driksha from '../assets/images/driksha.jpg';
import gracy from '../assets/images/gracy.jpg';

const KnowUs = () => {
  return (
    <div>
      <nav>
        <img src="../assets/images/logo.png" className="logo" alt="Logo" title="LiveLikeLocals" />
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

      <div className="main">
        <div className="profile-card">
          <img src={amisha} alt="Amisha Pundir" />
          <div className="caption">
            <h3>AMISHA PUNDIR</h3>
            <p><strong>Co-Founder</strong></p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/amisha-pundir-487120370/"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/Amishaa2105"><i className='fab fa-github'></i></a>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <img src={driksha} alt="Driksha Thakur" />
          <div className="caption">
            <h3>DRIKSHA THAKUR</h3>
            <p><strong>CEO & Founder</strong></p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/driksha-thakur-487120300/"><i className='fab fa-linkedin'></i></a>
              <a href="https://github.com/drikshathakur786"><i className='fab fa-github'></i></a>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <img src={gracy} alt="Gracy Mahajan" />
          <div className="caption">
            <h3>GRACY MAHAJAN</h3>
            <p><strong>Chief Technology Officer (CTO)</strong></p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/gracy-mahajan-b1b9b6289/"><i className='fab fa-linkedin'></i></a>
              <a href="https://github.com/gracy7192"><i className='fab fa-github'></i></a>
            </div>
          </div>
        </div>
      </div>

      <section className="footer">
        <div className="foot">
          <div className="footer-content">
            <div className="footlinks">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footlinks">
              <h4>Connect</h4>
              <div className="social">
                <a href="https://www.livelikelocals.facebook.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
                <a href="https://www.livelikelocals.instagram.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                <a href="https://www.livelikelocals.twitter.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
                <a href="https://www.livelikelocals.linkedin.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                <a href="https://www.livelikelocals.youtube.com" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a>
                <a href="https://github.com/drikshathakur786/LiveLikeLocals" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="end">
          <p>Copyright © 2024 LiveLikeLocals All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
};

export default KnowUs;
