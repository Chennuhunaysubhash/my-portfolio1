/* eslint-disable no-unused-vars */
// DatabaseSkills.js
import React from 'react';
import { FaDatabase, FaServer } from 'react-icons/fa'; // Import icons
import { SiMysql, SiPostgresql, SiOracle, SiMongodb } from 'react-icons/si'; // Import specific database icons

const DatabaseSkills = () => {
    const skills = [
        { name: 'MySQL', icon: <SiMysql /> },          // MySQL icon
        { name: 'PostgreSQL', icon: <SiPostgresql /> }, // PostgreSQL icon
        { name: 'Oracle', icon: <SiOracle /> },         // Oracle icon
        { name: 'MongoDB', icon: <SiMongodb /> },       // MongoDB icon
      ];
  return (
    <div className="skills-category">
      <h3>Database Management</h3>
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

export default DatabaseSkills;
