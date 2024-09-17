// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const BasicContactInfo = () => {
  return (
    
    <div className="contact-details-grid">
     
      <div className="contact-item">
        <FaEnvelope className="contact-icon" />
        <div className="contact-content">
          <h3>Email</h3>
          <p>your-email@example.com</p>
        </div>
      </div>
      <div className="contact-item">
        <FaPhone className="contact-icon" />
        <div className="contact-content">
          <h3>Phone</h3>
          <p>(123) 456-7890</p>
        </div>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt className="contact-icon" />
        <div className="contact-content">
          <h3>Address</h3>
          <p>123 Your Street, Your City, Your State, 12345</p>
        </div>
      </div>
    </div>
    
  );
};

export default BasicContactInfo;
