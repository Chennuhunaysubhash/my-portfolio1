/* eslint-disable no-unused-vars */
// ToolsAndMethodologies.js
import React from 'react';
import { FaGitAlt, FaDocker, FaAws, FaCube, FaStream, FaBitbucket, FaJira, FaTasks } from 'react-icons/fa'; // Import icons
import KubernetesIcon from '/src/assets/icons/Kubernetes.png'; 
import RabbitMQIcon from '/src/assets/icons/RabbitMQ.png';


const ToolsAndMethodologies = () => {
  const skills = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Kubernetes', icon: <img src={KubernetesIcon} alt="Hibernate" className="custom-icon" /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Microservices', icon: <FaCube /> },
    { name: 'Kafka', icon: <FaStream /> },
    { name: 'RabbitMQ', icon:<img src={RabbitMQIcon} alt="Hibernate" className="custom-icon" /> },
    { name: 'BitBucket', icon: <FaBitbucket /> },
    { name: 'Jira', icon: <FaJira /> },
    { name: 'Agile', icon: <FaTasks /> },
  ];

  return (
    <div className="skills-category">
      <h3>Tools & Methodologies</h3>
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

export default ToolsAndMethodologies;
