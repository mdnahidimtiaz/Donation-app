import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Donation from './pages/Donation';  // Change DONATION to Donation
import Information from './pages/Information';  // Change INFORMATION to Information

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>        
            <li><Link to="/information">Information</Link></li>
            <li><Link to="/donation">Donation</Link></li>
            <li><Link to="/about">About</Link></li>
            
            
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} /> 
          <Route path="/donation" element={<Donation />} />             
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
