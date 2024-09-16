// eslint-disable-next-line no-unused-vars
import React from 'react';
import './WorkExperience.css';
import logo from '/src/images/virtusa_logo.jpeg';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Virtusa Corporation',
      role: 'Java Full Stack Developer',
      duration: 'December 2021 - Present',
      image: logo, // Path to company logo
      responsibilities: [
        'Lead a team of developers to design and implement full-stack web applications using React, Java, and Spring Boot.',
        'Collaborated with UX designers to improve user interfaces, increasing user engagement by 30%.',
        'Optimized backend performance using Java and Spring Boot, reducing API response time by 25%.',
        'Develop and maintain backend services using Java, Spring Boot, Hibernate, and JPA.',
        'Implement RESTful APIs for communication between the frontend and backend.',
        'Ensure security, data validation, and authentication (OAuth, JWT).',
        'Work with Git for version control and collaborate within Agile teams using tools like JIRA.',
        'Deploy applications to cloud platforms like AWS and work with CI/CD pipelines using Jenkins and Docker.',
        'Monitor and troubleshoot production issues to ensure high performance and scalability.',
        'Write unit tests using JUnit and perform integration testing to maintain application quality.',
        'Stay updated on new technologies, tools, and best practices in full-stack development.'
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
