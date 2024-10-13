import React from 'react';
import './Css/Information.css'; 
const Information = () => {
  return (
    <div className="information">
      <h1>Information Form</h1>
      <form >
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            
          />
        </div>

        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            
          />
        </div>

        <div>
          <label>Country:</label>
          <input
            type="text"
            name="state"
            
          />
        </div>

        <div>
          <label>Zip Code:</label>
          <input
            type="text"
            name="zip"
            
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            name="gender"
            
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Information;
