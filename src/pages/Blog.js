import React from 'react';
import '../assets/css/blog1.css';
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.jpg';
import blog4 from '../assets/images/blog4.jpg';
import blog5 from '../assets/images/blog5.jpg';
import blog6 from '../assets/images/blog6.jpg';
import ds1 from '../assets/images/ds1.jpeg';
import ds2 from '../assets/images/ds2.jpeg';
import ds3 from '../assets/images/ds3.jpeg';
import ds4 from '../assets/images/ds4.jpg';
import ds5 from '../assets/images/ds5.jpg';
import ds6 from '../assets/images/ds6.jpeg';

const Blog = () => {
  return (
    <div>
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

      <section className="design" id="design">
        <div className="container">
          <div className="title">
            <h2>Recent Cultural Experiences</h2>
            <p>Immersive Experiences hosted by locals</p>
          </div>

          <div className="design-content">
            <div className="design-item">
              <div className="design-img">
                <img src={blog1} alt="" />
                <span><i className="far fa-heart"></i> 1290</span>
                <span>Local Cuisine</span>
              </div>
              <div className="design-title">
                <a href="#">Traditional Cooking with a Local Chef</a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src={blog2} alt="" />
                <span><i className="far fa-heart"></i> 900</span>
                <span>Handicrafts</span>
              </div>
              <div className="design-title">
                <a href="#">Learn Handicraft Techniques from Local Artisans</a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src={blog3} alt="" />
                <span><i className="far fa-heart"></i> 4530</span>
                <span>Cultural Tour</span>
              </div>
              <div className="design-title">
                <a href="#">Explore Hidden Gems with a Local Guide</a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src={blog5} alt="" />
                <span><i className="far fa-heart"></i> 3400</span>
                <span>Traditional Festivals</span>
              </div>
              <div className="design-title">
                <a href="#">Celebrate vibrant local festivals and traditions.</a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src={blog4} alt="" />
                <span><i className="far fa-heart"></i> 1900</span>
                <span>Local Music & Dance</span>
              </div>
              <div className="design-title">
                <a href="#">Enjoy traditional music and dance performances.</a>
              </div>
            </div>

            <div className="design-item">
              <div className="design-img">
                <img src={blog6} alt="" />
                <span><i className="far fa-heart"></i> 2987</span>
                <span>Nature & Adventure</span>
              </div>
              <div className="design-title">
                <a href="#">Discover scenic landscapes and local adventures.</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog" id="blog">
        <div className="container">
          <div className="title">
            <h2>Latest Blog</h2>
            <p>Stories and insights from our travelers and hosts</p>
          </div>
          <div className="blog-content">
            <div className="blog-item">
              <div className="blog-img">
                <img src={ds1} alt="" />
                <span><i className="far fa-heart"></i></span>
              </div>
              <div className="blog-text">
                <span>22 September, 2024</span>
                <h2>How Cultural Immersion Can Transform Your Travel Experience</h2>
                <p>Discover how connecting with locals can lead to unforgettable travel experiences.</p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div className="blog-item">
              <div className="blog-img">
                <img src={ds2} alt="" />
                <span><i className="far fa-heart"></i></span>
              </div>
              <div className="blog-text">
                <span>10 September, 2024</span>
                <h2>Discover Hidden Gems: Off-the-Beaten-Path Travel Destinations</h2>
                <p>Uncover lesser-known spots around the world that offer unique experiences and a true taste of local culture.</p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div className="blog-item">
              <div className="blog-img">
                <img src={ds3} alt="" />
                <span><i className="far fa-heart"></i></span>
              </div>
              <div className="blog-text">
                <span>15 September, 2024</span>
                <h2>The Best Local Events to Attend in Chandigarh</h2>
                <p>From festivals to fairs, explore the must-attend events happening in Chandigarh this season.</p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div className="blog-item">
              <div className="blog-img">
                <img src={ds4} alt="" />
                <span><i className="far fa-heart"></i></span>
              </div>
              <div className="blog-text">
                <span>5 September, 2024</span>
                <h2>5 Tips for an Authentic Travel Experience</h2>
                <p>Learn how to engage with locals and make the most of your cultural journey.</p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div className="blog-item">
              <div className="blog-img">
                <img src={ds5} alt="" />
                <span><i className="far fa-heart"></i></span>
              </div>
              <div className="blog-text">
                <span>1 September, 2024</span>
                <h2>Exploring Local Handicrafts: A Guide to Souvenirs</h2>
                <p>Find out which handmade items to bring home for a piece of local culture.</p>
                <a href="#">Read More</a>
              </div>
            </div>

            <div className="blog-item">
              <div className="blog-img">
                <img src={ds6} alt="" />
                <span><i className="far fa-heart"></i></span>
              </div>
              <div className="blog-text">
                <span>28 August, 2024</span>
                <h2>Building Connections: How to Engage with Local Communities</h2>
                <p>Tips on fostering meaningful interactions during your travels.</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="title">
              <h2>Embark on a Cultural Odyssey</h2>
              <p>Explore, Engage, Embrace</p>
            </div>
            <p>At LiveLikeLocals, we believe in the transformative power of cultural exchange. Our platform connects you with the essence of a destination through its people. Join us on an unforgettable journey to discover the world through the eyes of locals!</p>
          </div>
        </div>
      </section>

      <section className="footer">
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

export default Blog;
