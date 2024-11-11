import React from 'react';
import '../assets/css/payment.css';

const Payment = () => {
  return (
    <div className="container">
      <h1>Confirm Your Payment</h1>
      <form id="paymentForm">
        <div className="first-row">
          <div className="owner">
            <label htmlFor="name"><h3>Name</h3></label>
            <div className="input-field">
              <input type="text" id="name" name="name" required />
            </div>
          </div>
          <div className="cvv">
            <label htmlFor="cvv"><h3>Card CVV</h3></label>
            <div className="input-field">
              <input type="password" id="cvv" name="cvv" maxLength="3" required />
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="card-number">
            <label htmlFor="card-number"><h3>Card Number</h3></label>
            <div className="input-field">
              <input type="text" id="card-number" name="card-number" maxLength="16" pattern="\d{16}" required />
            </div>
          </div>
        </div>
        <div className="third-row">
          <label htmlFor="months"><h3>Expiration Date</h3></label>
          <div className="selection">
            <div className="date">
              <select name="months" id="months" required>
                <option value="" disabled selected>Month</option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">Mar</option>
                <option value="4">Apr</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">Jul</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
              </select>
              <select name="years" id="years" required>
                <option value="" disabled selected>Year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
              </select>
            </div>
            <div className="cards">
              <img src="../assets/images/mc.png" alt="MasterCard" />
              <img src="../assets/images/vi.png" alt="Visa" />
              <img src="../assets/images/pp.png" alt="PayPal" />
            </div>
          </div>
        </div>
        <button type="submit">Confirm Payment</button>
      </form>
    </div>
  );
};

export default Payment;
