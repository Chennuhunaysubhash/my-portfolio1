// eslint-disable-next-line no-unused-vars
import React from 'react';
import './WorkExperience.css';
import myImage from '/src/images/virtusa_logo.jpeg';
const WorkExperience = () => {
  const experiences = [
    {
      company: 'ABC Software Solutions',
      role: 'Senior Full Stack Developer',
      duration: 'June 2022 - Present',
      image: {myImage}, // Path to company logo
      responsibilities: [
        'Lead a team of developers to design and implement full-stack web applications using React, Node.js, and MongoDB.',
        'Collaborated with UX designers to improve user interfaces, increasing user engagement by 30%.',
        'Optimized backend performance, reducing API response time by 25%.'
      ]
    }
  ];

  return (
    <section className="work-experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <img src={exp.image} alt={`${exp.company} logo`} className="experience-image" />
            <div className="experience-details">
              <h3 className="experience-company">{exp.company}</h3>
              <p className="experience-role">{exp.role}</p>
              <p className="experience-duration">{exp.duration}</p>
              <ul className="experience-responsibilities">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
