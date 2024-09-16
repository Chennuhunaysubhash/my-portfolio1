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
              <p>hunaysubhash97@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <div className="contact-content">
              <h3>Phone</h3>
              <p>+91 8074243933</p>
            </div>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-content">
              <h3>Address</h3>
              <p>Dno: 8-179, Sivalayam Street, Dirusumarru, Bhimavaram, West Godavari, Andhra Pradesh, India, 534239</p>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/hunaysubhash-chennu-b65560202" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="contact-icon" />
            <div className="contact-content">
              <h3>LinkedIn</h3>
              <p>Hunaysubhash Chennu</p>
            </div>
          </a>
          <a href="https://hub.docker.com/u/hunayhub97" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaDocker className="contact-icon" />
            <div className="contact-content">
              <h3>Docker Hub</h3>
              <p>Hunaysubhash Chennu</p>
            </div>
          </a>
          <a href="https://github.com/Chennuhunaysubhash" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaGithub className="contact-icon" />
            <div className="contact-content">
              <h3>GitHub</h3>
              <p>Chennuhunaysubhash</p>
            </div>
          </a>
          <a href="https://leetcode.com/u/Hunaysubhash_Chennu/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaCode className="contact-icon" />
            <div className="contact-content">
              <h3>LeetCode</h3>
              <p>Hunay Subhash Chennu</p>
            </div>
          </a>
          <a href="https://www.sololearn.com/profile/11893286/?ref=app" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaCode className="contact-icon" />
            <div className="contact-content">
              <h3>SoloLearn</h3>
              <p>hunaysubhash chennu</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
