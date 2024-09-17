/* eslint-disable no-unused-vars */
// WebDevelopmentSkills.js
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaJava } from 'react-icons/fa'; // Import icons

const WebDevelopmentSkills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <FaAngular /> },
  ];

  return (
    <div className="skills-category">
      <h3>Frontend Technologies</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            {skill.icon} {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebDevelopmentSkills;
