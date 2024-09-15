/* eslint-disable react/no-unescaped-entities */
// src/AboutMe.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './AboutMe.css'; // Import the CSS file for styling
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import myImage from '/src/images/hunay.jpg';
const AboutMe = () => {
    return (
      <section className="about-me-section">
        <div className="container">
        <img src={myImage} alt="Your Name" className="about-me-image" />
          <h2 className="about-me-title">About Me</h2>
          <p className="about-me-text">
            Hi, I'm [Your Name], a passionate software developer with expertise in full-stack development. 
            I specialize in creating efficient, scalable, and user-friendly web applications using technologies like 
            React, SpringBoot, Hibernate, and MySQL. I thrive on problem-solving, coding challenges, and continuously 
            expanding my knowledge in modern development practices.
          </p>
          <p className="about-me-text">
            I have successfully led projects, such as the 'Online Movie Ticket Booking System,' where I worked as 
            a Team Lead, utilizing SpringBoot, Hibernate, and MySQL. I take pride in my ability to manage end-to-end 
            development, from customer registration to payment processing and booking cancellations.
          </p>
          <p className="about-me-text">
            I’m always excited to work on new projects and explore innovative solutions to challenging problems. Let's connect!
          </p>
          <div className="social-links">
          <a href="https://www.linkedin.com/in/hunaysubhash-chennu-b65560202" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/Chennuhunaysubhash" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub size={30} />
          </a>
          {/* LeetCode Link with Custom Icon */}
          <a href="https://leetcode.com/u/Hunaysubhash_Chennu/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="leetcode-icon" />
          </a>
        </div>

         {/* Resume Buttons */}
         <div className="resume-buttons-container">
          <a href="/ChennuHunaySubhash97.pdf" target="_blank" className="resume-button view-button">
            View Resume
          </a>
          <a href="/ChennuHunaySubhash97.pdf" download className="resume-button download-button">
            Download Resume
          </a>
        </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;

