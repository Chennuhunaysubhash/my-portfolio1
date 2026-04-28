// eslint-disable-next-line no-unused-vars
import React from 'react';
import './WorkExperience.css';
import logo from '/src/images/virtusa_logo.jpeg';
import logo_rp from '/src/images/rpi_logo.jpeg';

const WorkExperience = () => {
  const experiences = [
    {
      company: 'Virtusa Corporation',
      role: 'Java Full Stack Developer',
      duration: 'December 2021 - August 2024',
      image: logo,
      responsibilities: [
        'Worked as a Java Full Stack Developer for Citi Bank client, contributing to enterprise banking applications.',
        'Led a team of developers to design and implement full-stack web applications using React, Java, and Spring Boot.',
        'Collaborated with UX designers to improve user interfaces, increasing user engagement by 30%.',
        'Optimized backend performance using Java and Spring Boot, reducing API response time by 25%.',
        'Developed and maintained backend services using Java, Spring Boot, Hibernate, and JPA.',
        'Implemented RESTful APIs for frontend-backend communication.',
        'Ensured security, data validation, and authentication (OAuth, JWT).',
        'Worked with Git and Agile tools like JIRA for team collaboration.',
        'Deployed applications on AWS with CI/CD pipelines using Jenkins and Docker.',
        'Monitored and resolved production issues for high availability.',
        'Wrote unit and integration tests using JUnit.',
        'Stayed updated with modern full-stack development practices.'
      ]
    },
    {
      company: 'Rightpoint India (now part of Genpact)',
      role: 'Developer',
      duration: 'June 2025 - Present',
      image: logo_rp,
      responsibilities: [
        'Working as a Developer for Goldman Sachs client, building scalable financial applications.',
        'Develop and maintain Java-based microservices using Spring Boot and RESTful APIs.',
        'Contribute to frontend development using React.js focusing on performance and responsiveness.',
        'Collaborate with cross-functional teams including UX, QA, and Product.',
        'Implement authentication and authorization using Spring Security and JWT.',
        'Participate in Agile ceremonies like stand-ups and sprint planning.',
        'Work with PostgreSQL and ORM tools like Hibernate and JPA.',
        'Use Git and Bitbucket for version control and code reviews.',
        'Support CI/CD pipelines using Jenkins and Docker.',
        'Troubleshoot production issues to improve stability and uptime.',
        'Write unit and integration tests using JUnit and Mockito.',
        'Continuously adopt new technologies to improve development efficiency.'
      ]
    }
  ];

  return (
    <section className="work-experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <img
              src={exp.image}
              alt={`${exp.company} logo`}
              className="experience-image"
            />

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