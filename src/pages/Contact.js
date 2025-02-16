import React from 'react';
import './Css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimes} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 


const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-all">
        <div className="contact-sin">
          <h2><FontAwesomeIcon icon={faEnvelope} /> Email</h2>
          <p>
            <a href="">Email ID</a>
          </p>
        </div>

        <div className="contact-sin">
          <h2><FontAwesomeIcon icon={faFacebook} /> Facebook</h2>
          <p>
            <a href="" target="_blank" rel="noopener noreferrer">
              Facebook ID
            </a>
          </p>
        </div>

        <div className="contact-sin">
          <h2><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</h2>
          <p>
            <a href="" target="_blank" rel="noopener noreferrer">
               WhatsApp ID
            </a>
          </p>
        </div>

        <div className="contact-sin">
          <h2><FontAwesomeIcon icon={faTimes} /> X (Twitter)</h2> 
          <p>
            <a href="" target="_blank" rel="noopener noreferrer">
              Xprofile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
