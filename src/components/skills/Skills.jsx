/* eslint-disable no-unused-vars */
// Skills.js
import React from 'react';
import ProgrammingSkills from './sub-skills/ProgrammingSkills';
import './Skills.css';
import BackendTechnologies from './sub-skills/BackendTechnologies';
import WebDevelopmentSkills from './sub-skills/WebDevelopmentSkills';
import DatabaseSkills from './sub-skills/DatabaseSkills';
import ToolsAndMethodologies from './sub-skills/ToolsAndMethodologies';
const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        <ProgrammingSkills/>
        <BackendTechnologies/>
        <WebDevelopmentSkills/>
        <DatabaseSkills/>
        <ToolsAndMethodologies/>
      </div>
    </section>
  );
};

export default Skills;
