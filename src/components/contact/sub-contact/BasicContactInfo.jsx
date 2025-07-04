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
          <p>hunaysubhashchennu@gmail.com</p>
        </div>
      </div>
      <div className="contact-item">
        <FaPhone className="contact-icon" />
        <div className="contact-content">
          <h3>Phone</h3>
          <p>+91 9573453733</p>
        </div>
      </div>
      <div className="contact-item">
        <FaMapMarkerAlt className="contact-icon" />
        <div className="contact-content">
          <h3>Address</h3>
          <p>Dno: 8-179, Sivalayam Street, Dirusumarru, Bhimavaram, West Godavari, Andhra Pradesh, India, 534239</p>
        </div>
      </div>
    </div>
    
  );
};

export default BasicContactInfo;
