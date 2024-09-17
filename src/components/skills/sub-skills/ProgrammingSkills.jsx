/* eslint-disable no-unused-vars */
// ProgrammingSkills.js
import React from 'react';
import { FaJava, FaPython, FaJs, FaCuttlefish, FaDatabase, FaServer } from 'react-icons/fa'; 
import { SiTypescript, SiPostgresql, SiMongodb } from 'react-icons/si'; 


const ProgrammingSkills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <FaCuttlefish /> },
    { name: 'SQL', icon: <FaDatabase /> }, // PostgreSQL as a representation of SQL
    { name: 'NoSQL', icon: <FaServer /> }, // MongoDB as a representation of NoSQL
  ];

  return (
    <div className="skills-category">
      <h3>Programming Languages</h3>
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

export default ProgrammingSkills;
