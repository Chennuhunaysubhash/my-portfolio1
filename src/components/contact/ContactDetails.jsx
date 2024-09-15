// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ContactDetails.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDocker, FaCode } from 'react-icons/fa';

const ContactDetails = () => {
  return (
    <section className="contact-details-section">
      <div className="container">
        <h2 className="section-title">Contact Details</h2>
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
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="contact-icon" />
            <div className="contact-content">
              <h3>LinkedIn</h3>
              <p>@your-profile</p>
            </div>
          </a>
          <a href="https://hub.docker.com/u/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaDocker className="contact-icon" />
            <div className="contact-content">
              <h3>Docker Hub</h3>
              <p>@your-profile</p>
            </div>
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaGithub className="contact-icon" />
            <div className="contact-content">
              <h3>GitHub</h3>
              <p>@your-profile</p>
            </div>
          </a>
          <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaCode className="contact-icon" />
            <div className="contact-content">
              <h3>LeetCode</h3>
              <p>@your-profile</p>
            </div>
          </a>
          <a href="https://www.sololearn.com/profile/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaCode className="contact-icon" />
            <div className="contact-content">
              <h3>SoloLearn</h3>
              <p>@your-profile</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
