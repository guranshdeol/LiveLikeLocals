import React from 'react';
import '../assets/css/register.css';

const Register = () => {
  return (
    <div className="background">
      <div className="registration-form">
        <h2>Registration Form</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="destination">Destination:</label>
          <input type="text" name="destination" id="destination" required />

          <label htmlFor="departure-date">Departure date:</label>
          <input type="date" name="departure-date" id="departure-date" required />

          <label htmlFor="return-date">Return date:</label>
          <input type="date" name="return-date" id="return-date" required />

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
