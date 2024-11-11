import React from 'react';
import '../assets/css/style.css';
import videoSrc from '../assets/videos/vidd.mp4';

const About = () => {
  return (
    <div className="aboutbody">
      <nav>
        <img src="../assets/images/logo.png" className="logo" alt="Logo" title="LiveLikeLocals" />
        <ul className="navbar">
          <li>
            <a href="/">Home</a>
            <a href="/bookings">Bookings</a>
            <a href="/#package">Packages</a>
            <a href="/about">About Us</a>
            <a href="/knowus">Know Us</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      <section className="about">
        <div className="video-background">
          <video id="background-video" autoPlay muted loop style={{ objectFit: 'cover', height: '700px', width: '100%', marginTop: '90px' }}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div className="main">
          <div className="abt-text">
            <br /><br /><br />
            <h1 style={{ textAlign: 'center' }}>About <span>LiveLikeLocals</span></h1>
            <p>At <strong>LiveLikeLocals</strong>, we redefine travel by offering you an opportunity to immerse yourself in the cultural fabric of the destinations you visit. Our platform connects travelers with local hosts, ensuring that every journey is filled with genuine experiences and memorable moments. Whether it's enjoying a homemade meal, uncovering hidden gems, or partaking in local festivities, we bring you closer to the heart of each community.</p>
            <p>Our mission is to make travel more meaningful, creating bridges between cultures and people. We believe in travel that is more than sightseeing—travel that celebrates diversity, fosters understanding, and creates lasting connections.</p>
            <p>Join us and embark on a journey where every adventure is authentic, every connection is genuine, and every experience is unforgettable. With <strong>LiveLikeLocals</strong>, discover the world, one culture at a time.</p>
          </div>
        </div>
      </section>

      <section className="footer" style={{ marginTop: '-40px' }}>
        <div className="foot">
          <div className="footer-content">
            <div className="footlinks">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/register">Register</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
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

export default About;
