import React from 'react';
import './Css/Donation.css';

const Donation = () => {
  

  return (
    <div className="donation">
      <h1>Make a Donation</h1>
      <form >
        <div>
          <label >Money Transaction no:</label>
          <input
            type="text"
            id="donorId"
            name="donorId"
            
          />
        </div>

        <div>
          <label >Donor Name:</label>
          <input
            type="text"
            name="donorName"
            
          />
        </div>

        <div>
          <label >Amount:</label>
          <input
            type="number"
            name="amount"
            
          />
        </div>

        <div>
          <label >Date:</label>
          <input
            type="date" 
            name="date"
            
          />
        </div>

        <div>
          <label >Message:</label>
          <textarea
            type="message"
            name="message"
            
          />
        </div>

        <button type="submit">Submit Donation</button>
      </form>
    </div>
  );
};

export default Donation;
