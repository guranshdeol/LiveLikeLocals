import React from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import host1 from '../assets/images/u1.jpg';
import host2 from '../assets/images/u2.jpg';
import host3 from '../assets/images/u3.jpg';
import host4 from '../assets/images/u4.jpg';

const Update = () => {
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

      <section className="hero">
        <div className="text-center">
          <h2>Discover journeys woven by local hearts.</h2>
        </div>
      </section>

      <section id="experiences" className="container my-5">
        <h2 className="text-center mb-4">Available Experiences</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card experience-card p-3">
              <h3>Traditional Cooking Class</h3>
              <p>Learn how to cook traditional dishes with a local expert.</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#experienceModal" data-experience="Traditional Cooking Class">Book Now</button>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card experience-card p-3">
              <h3>City Walking Tour</h3>
              <p>Explore hidden gems of the city with a local guide.</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#experienceModal" data-experience="City Walking Tour">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      <section id="hosts" className="container my-5">
        <h2 className="text-center mb-4">Meet Our Hosts</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card host-card p-3 text-center">
              <img src={host1} className="img-fluid rounded-circle mb-3" alt="Host 1" />
              <h3>Jessica Anderson</h3>
              <p>Expert in local cuisine and cultural tours.</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#hostModal" data-host="Jessica Anderson">View Profile</button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card host-card p-3 text-center">
              <img src={host2} className="img-fluid rounded-circle mb-3" alt="Host 2" />
              <h3>Olivia Grace</h3>
              <p>Historian and city tour expert.</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#hostModal" data-host="Olivia Grace">View Profile</button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card host-card p-3 text-center">
              <img src={host3} className="img-fluid rounded-circle mb-3" alt="Host 3" />
              <h3>Jack Smith</h3>
              <p>Adventure guide and hiking enthusiast.</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#hostModal" data-host="Jack Smith">View Profile</button>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card host-card p-3 text-center">
              <img src={host4} className="img-fluid rounded-circle mb-3" alt="Host 4" />
              <h3>Michael Brown</h3>
              <p>Local traditional crafts artist.</p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#hostModal" data-host="Michael Brown">View Profile</button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container my-5">
        <h2 className="text-center mb-4">Contact a Host</h2>
        <div className="card p-4">
          <form id="contact-form" onSubmit={submitContactForm}>
            <div className="mb-3">
              <label htmlFor="contact-name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="contact-name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="host" className="form-label">Choose a Host</label>
              <select className="form-select" id="host" required>
                <option value="" disabled selected>Select a host</option>
                <option value="Jessica Anderson">Jessica Anderson</option>
                <option value="Olivia Grace">Olivia Grace</option>
                <option value="Jack Smith">Jack Smith</option>
                <option value="Michael Brown">Michael Brown</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" required></textarea>
            </div>
            <button className="btn btn-primary" type="submit">Send Message</button>
          </form>
        </div>
      </section>

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

      <div className="modal fade" id="experienceModal" tabIndex="-1" aria-labelledby="experienceModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="experienceModalLabel">Experience Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="hostModal" tabIndex="-1" aria-labelledby="hostModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="hostModalLabel">Host Profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      <script>
        document.getElementById('experienceModal').addEventListener('show.bs.modal', function (event) {
          var button = event.relatedTarget;
          var experience = button.getAttribute('data-experience');
          var modalTitle = document.querySelector('#experienceModalLabel');
          var modalBody = document.querySelector('#experienceModal .modal-body');

          modalTitle.textContent = experience;

          if (experience === "Traditional Cooking Class") {
            modalBody.innerHTML = `
              <p>Join us for an authentic cooking experience where you’ll learn how to make traditional dishes using local ingredients. A local chef will guide you through the process, sharing tips and stories behind each recipe.</p>
              <ul>
                <li>Duration: 3 hours</li>
                <li>Location: Local kitchen in the city center</li>
                <li>Includes: Ingredients, recipe handout, and refreshments</li>
                <li>Capacity: Up to 8 participants</li>
                <li>Cost: $50 per person</li>
              </ul>
              <button id="confirmBookingButton" class="btn btn-primary mt-3">Confirm Booking</button>
            `;
          } else if (experience === "City Walking Tour") {
            modalBody.innerHTML = `
              <p>Discover hidden gems and historical landmarks with a local guide. The tour will take you through popular sights and off-the-beaten-path locations.</p>
              <ul>
                <li>Duration: 2 hours</li>
                <li>Route: Main city landmarks, hidden alleys, and local markets</li>
                <li>Includes: Refreshments and a map of the tour route</li>
                <li>Cost: $20 per person</li>
              </ul>
              <button id="confirmBookingButton" class="btn btn-primary mt-3">Confirm Booking</button>
            `;
          } else {
            modalBody.textContent = 'Details about ' + experience + ' will be displayed here.';
          }

          setTimeout(() => {
            const confirmButton = document.getElementById('confirmBookingButton');
            if (confirmButton) {
              confirmButton.addEventListener('click', function () {
                alert('Your booking for ' + experience + ' has been confirmed!');
                $('#experienceModal').modal('hide');
              });
            }
          }, 100);
        });

        document.getElementById('hostModal').addEventListener('show.bs.modal', function (event) {
          const button = event.relatedTarget;
          const host = button.getAttribute('data-host');
          const modalTitle = document.querySelector('#hostModalLabel');
          const modalBody = document.querySelector('#hostModal .modal-body');

          let hostDetails = '';

          switch (host) {
            case 'Jessica Anderson':
              modalTitle.textContent = 'Jessica Anderson\'s Profile';
              hostDetails = `
                <p>Jessica is an experienced chef specializing in traditional cuisine. She has been hosting cultural cooking classes for over 10 years, where she shares the rich history behind each dish. Her classes are immersive, offering insights into local ingredients and cooking methods.</p>
                <ul>
                  <li><strong>Experience:</strong> 10+ years</li>
                  <li><strong>Specialty:</strong> Traditional local dishes</li>
                  <li><strong>Languages:</strong> English, French</li>
                </ul>
              `;
              break;
            case 'Olivia Grace':
              modalTitle.textContent = 'Olivia Grace\'s Profile';
              hostDetails = `
                <p>Olivia is a passionate historian and expert in city tours. She has a degree in History and enjoys taking travelers through both famous and hidden historical sites, sharing stories and legends along the way.</p>
                <ul>
                  <li><strong>Experience:</strong> 7+ years</li>
                  <li><strong>Specialty:</strong> Historical landmarks and cultural sites</li>
                  <li><strong>Languages:</strong> English, Spanish</li>
                </ul>
              `;
              break;
            case 'Jack Smith':
              modalTitle.textContent = 'Jack Smith\'s Profile';
              hostDetails = `
                <p>Jack is an outdoor enthusiast and adventure guide who loves leading hiking and trekking tours. He knows the best trails and scenic spots around and ensures a safe yet thrilling experience for his guests.</p>
                <ul>
                  <li><strong>Experience:</strong> 5+ years</li>
                  <li><strong>Specialty:</strong> Hiking, outdoor adventure</li>
                  <li><strong>Languages:</strong> English, German</li>
                </ul>
              `;
              break;
            case 'Michael Brown':
              modalTitle.textContent = 'Michael Brown\'s Profile';
              hostDetails = `
                <p>Michael is a traditional crafts artist, specializing in pottery and woodwork. His workshops offer an authentic experience where participants can create their own unique pieces while learning about local craftsmanship techniques.</p>
                <ul>
                  <li><strong>Experience:</strong> 15+ years</li>
                  <li><strong>Specialty:</strong> Pottery, woodwork</li>
                  <li><strong>Languages:</strong> English, Italian</li>
                </ul>
              `;
              break;
            default:
              modalTitle.textContent = 'Host Profile';
              hostDetails = '<p>Host details will be displayed here.</p>';
              break;
          }

          modalBody.innerHTML = hostDetails;
        });

        function submitContactForm(event) {
          event.preventDefault();
          const name = document.getElementById('contact-name').value;
          const selectedHost = document.getElementById('host').value;
          const message = document.getElementById('message').value;

          alert(`Message sent to ${selectedHost} from ${name}: ${message}`);
        }
      </script>
    </div>
  );
};

export default Update;
