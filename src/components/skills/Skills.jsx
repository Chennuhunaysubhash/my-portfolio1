/* eslint-disable no-unused-vars */
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'SpringBoot', 'Hibernate',
    'MySQL', 'CSS', 'HTML', 'TypeScript', 'Express', 'MongoDB',
    'Git', 'Docker', 'Kubernetes', 'AWS', 'GraphQL', 'Python',
    'Django', 'Ruby on Rails', 'Java', 'C#', 'PHP', 'SQL', 'NoSQL',
    'Firebase', 'Angular', 'Vue.js', 'Redis', 'RabbitMQ'
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
