// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaLinkedin, FaGithub, FaDocker, FaCode } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="contact-details-grid">
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
        <FaLinkedin className="contact-icon" />
        <div className="contact-content">
          <h3>LinkedIn</h3>
        </div>
      </a>
      <a href="https://hub.docker.com/u/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
        <FaDocker className="contact-icon" />
        <div className="contact-content">
          <h3>Docker Hub</h3>
        </div>
      </a>
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
        <FaGithub className="contact-icon" />
        <div className="contact-content">
          <h3>GitHub</h3>
        </div>
      </a>
      <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
        <FaCode className="contact-icon" />
        <div className="contact-content">
          <h3>LeetCode</h3>
        </div>
      </a>
      <a href="https://www.sololearn.com/profile/your-profile" target="_blank" rel="noopener noreferrer" className="contact-item">
        <FaCode className="contact-icon" />
        <div className="contact-content">
          <h3>SoloLearn</h3>
        </div>
      </a>
    </div>
  );
};

export default SocialLinks;
