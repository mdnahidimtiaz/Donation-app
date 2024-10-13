import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Greetings from the Donation Program.</h1>
      <p>
      Your support might have a significant impact! We think that even modest contributions may have a big impact and that communities are powerful. We can assist the most important issues when we work together.
      </p>
      

      <div className="donation-cta">
        <h2>Ready to make a donation?</h2>
        <Link to="/donation" className="donation-button">
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
