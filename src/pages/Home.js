import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Greetings from the Donation Program.</h1>
      <p>
      Please donate to people. We think that your little interest helps many people in various sectors. We want to stay together.
      </p>
      <div className="donation">
        <h2>Ready to make a donation?</h2>
        <Link to="/donation" className="donation-button">
          Donate Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
