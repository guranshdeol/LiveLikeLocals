import React from 'react';
import '../assets/css/style.css';
import '../assets/js/contact.js';
import contactImage from '../assets/images/yay1.jpg';

const Contact = () => {
  return (
    <div className="contact-us">
      <nav>
        <img src="../assets/images/logo.png" className="logo" alt="Logo" title="FirstFlight Travels" />
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

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-form">
            <h1>Contact Us</h1>
            <p>Let’s Connect! We’re here to help you immerse in local culture and make unforgettable memories.</p>
            <form>
              <input type="email" placeholder="Enter a valid email address" id="email" required />
              <input type="text" placeholder="Enter your Name" id="name" required />
              <input type="tel" placeholder="Enter your phone number" required />
              <input type="date" placeholder="mm/dd/yyyy" />
              <textarea placeholder="Enter your message" id="message" required></textarea>
              <button type="submit" onClick={sendMail}>Submit</button>
            </form>
          </div>
          <div className="contact-image">
            <img src={contactImage} alt="Contact Us Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
