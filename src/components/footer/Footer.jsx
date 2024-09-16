// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; // Add styling for the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Hunay Subbhash Chennu. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/hunaysubhash-chennu-b65560202" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/Chennuhunaysubhash" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
