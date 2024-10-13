import React from 'react';
import './Css/Donation.css';

const Donation = () => {
  

  return (
    <div className="donation">
      <h1>Make a Donation</h1>
      <form >
        <div>
          <label htmlFor="donorId">Donor ID:</label>
          <input
            type="text"
            id="donorId"
            name="donorId"
            
          />
        </div>

        <div>
          <label htmlFor="donorName">Donor Name:</label>
          <input
            type="text"
            id="donorName"
            name="donorName"
            
          />
        </div>

        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            
          />
        </div>

        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            
          />
        </div>

        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default Donation;
