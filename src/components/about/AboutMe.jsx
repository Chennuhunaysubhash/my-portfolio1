/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
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
          Hi, I'm Hunay Subhash Chennu, a dedicated and passionate software developer with a strong background in Java Full Stack development, specializing in creating efficient, scalable, and user-friendly web applications. With expertise in technologies like React, Spring Boot, Hibernate, and MySQL, I excel in designing and implementing robust solutions that meet the needs of modern web applications.
          </p>
          <p className="about-me-text">
          My proficiency in Java Full Stack development enables me to tackle complex projects with ease, from backend development using Spring Boot and Hibernate to frontend development using React and JavaScript. I'm well-versed in leveraging the power of JavaScript to create dynamic and interactive user interfaces, ensuring seamless user experiences.
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
         <a href="https://chennuhunaysubhash.github.io/my-portfolio1/ChennuHunaySubhash97.pdf" target="_blank" rel="noopener noreferrer" className="resume-button view-button">
  View Resume
</a>

<a href="https://chennuhunaysubhash.github.io/my-portfolio1/ChennuHunaySubhash97.pdf" download className="resume-button download-button">
  Download Resume
</a>

    

        </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;

