/* eslint-disable no-unused-vars */
import React from 'react';
import { FaNodeJs, FaJava } from 'react-icons/fa'; // Import icons
import SpringBootIcon from '/src/assets/icons/Spring.png'; // Import Spring Boot icon
import SpringFrameworkIcon from '/src/assets/icons/Spring.png'; // Import Spring Framework icon
import HibernateIcon from '/src/assets/icons/Hibernate.png';
import NodeJSIcon from '/src/assets/icons/Node.js.png';
const BackendTechnologies = () => {
  const skills = [
    { name: 'Spring Boot', icon: <img src={SpringBootIcon} alt="Spring Boot" className="custom-icon" /> },
    { name: 'Spring Framework', icon: <img src={SpringFrameworkIcon} alt="Spring Framework" className="custom-icon" /> },
    { name: 'Hibernate', icon:<img src={HibernateIcon} alt="Hibernate" className="custom-icon" /> },
    { name: 'Node.js', icon:<img src={NodeJSIcon} alt="Hibernate" className="custom-icon" /> },
  ];

  return (
    <div className="skills-category">
      <h3>Backend Technologies</h3>
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

export default BackendTechnologies;
