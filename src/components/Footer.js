import React from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
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
  );
};

export default Footer;
