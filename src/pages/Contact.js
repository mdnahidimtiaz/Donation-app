import React from 'react';
import './Css/Contact.css'; // Assuming you will add styles for this
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Email icon
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Social media icons
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Use faTimes instead of faX

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-methods">
        <div className="contact-method">
          <h2><FontAwesomeIcon icon={faEnvelope} /> Email</h2>
          <p>
            <a href="mailto:support@donationplatform.com">support@donationplatform.com</a>
          </p>
        </div>

        <div className="contact-method">
          <h2><FontAwesomeIcon icon={faFacebook} /> Facebook</h2>
          <p>
            <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
              facebook.com/yourpage
            </a>
          </p>
        </div>

        <div className="contact-method">
          <h2><FontAwesomeIcon icon={faWhatsapp} /> WhatsApp</h2>
          <p>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp
            </a>
          </p>
        </div>

        <div className="contact-method">
          <h2><FontAwesomeIcon icon={faTimes} /> X (Twitter)</h2> {/* Use faTimes for X icon */}
          <p>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              @yourprofile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
