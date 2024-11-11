import React from 'react';
import '../assets/css/try.css';

const Bookings = () => {
  return (
    <div className="container">
      <h2 style={{ fontSize: '55px', marginTop: '-30px' }}>
        <span>
          <ul style={{ borderRadius: '6px' }}>
            <hr />Explore With Us<hr />
          </ul>
        </span>
      </h2>
      <br />
      <div className="product-grid">
        <div className="product">
          <div className="discount-tag">-10%</div>
          <br />
          <img src="../assets/images/khm1.jpg" alt="Hotel 1" />
          <h3>Kashmiri Charm Homestay- LD Colony, Srinagar</h3>
          <p className="price">Rs5000 <span>Rs6000</span></p>
          <br />
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-15%</div>
          <br />
          <img src="../assets/images/khm2.jpg" alt="Hotel 2" />
          <h3>Serendipity Homestay- Near Govt Primary School Nagbal, Yousmarg</h3>
          <p className="price">Rs4500 <span>Rs5500</span></p>
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-5%</div>
          <br />
          <img src="../assets/images/khm3.jpg" alt="Hotel 3" />
          <h3>True Kashmiri Living Homestay- Mirza Bagh, Srinagar</h3>
          <p className="price">Rs5200 <span>Rs6500</span></p>
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-5%</div>
          <br />
          <img src="../assets/images/khm4.jpg" alt="Hotel 4" />
          <h3>Tranquil Heaven Homestay- Ferozpura, Tangmarg, Gulmarg</h3>
          <p className="price">Rs3600<span>Rs4500</span></p>
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-5%</div>
          <br />
          <img src="../assets/images/khm5.jpg" alt="Hotel 5" />
          <h3>Heart of Kashmir Homestay- Srinagar</h3>
          <p className="price">Rs6200 <span>Rs7000</span></p>
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-5%</div>
          <br />
          <img src="../assets/images/khm6.jpg" alt="Hotel 6" />
          <h3>The Timeless Beauty Homestay- 450m from J&K Police Hospital, Srinagar</h3>
          <p className="price">Rs3999 <span>Rs4700</span></p>
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-5%</div>
          <br />
          <img src="../assets/images/khm7.jpg" alt="Hotel 7" />
          <h3>Crowning Glory Homestay- Near Tangmarg Petrol Pump, Gulmarg</h3>
          <p className="price">Rs3500 <span>Rs4500</span></p>
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-5%</div>
          <br />
          <img src="../assets/images/khm8.jpg" alt="Hotel 8" />
          <h3>Splendid Valley Homestay- Bhaderwah</h3>
          <p className="price">Rs2800 <span>Rs3500</span></p>
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-5%</div>
          <br />
          <img src="../assets/images/khm9.jpg" alt="Hotel 9" />
          <h3>Skier's World Homestay- Gulmarg</h3>
          <p className="price">Rs3500<span>Rs4000</span></p>
          <a href="payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-10%</div>
          <br />
          <img src="../assets/images/khm10.jpg" alt="Hotel 10" />
          <h3>Shades of Spring Riverside Homestay- Pahalgam</h3>
          <p className="price">Rs4000 <span>Rs4600</span></p>
          <br />
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-15%</div>
          <br />
          <img src="../assets/images/khm11.jpg" alt="Hotel 11" />
          <h3>River Song Homestay- Sonmarg</h3>
          <p className="price">Rs3500<span>Rs4500</span></p>
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
        <div className="product">
          <div className="discount-tag">-5%</div>
          <br />
          <img src="../assets/images/khm12.jpg" alt="Hotel 12" />
          <h3>Nathatop Homestay- Sanasar Village, Patnitop</h3>
          <p className="price">Rs2200<span>Rs3500</span></p>
          <a href="./payment.html" target="_blank">
            <button className="add-to-cart">Book Now</button>
          </a>
        </div>
      </div>
      <div className="booking-button-container text-center my-4">
        <p className="lead font-weight-bold mb-4">Ready to experience the best homestays? Click below to book your stay!</p>
        <a href="./update.html">
          <button className="btn btn-lg btn-primary booking-button">Book Your Stay Now</button>
        </a>
      </div>
    </div>
  );
};

export default Bookings;
