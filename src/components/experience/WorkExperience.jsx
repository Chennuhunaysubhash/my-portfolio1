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
      duration: 'December 2021 - Augest 2024',
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
    },{
      company: 'Rightpoint India',
      role: 'Developer',
      duration: 'June 2025 - Present',
      image: logo_rp, // Path to company logo
       responsibilities: [
  'Develop and maintain scalable Java-based microservices using Spring Boot and RESTful APIs.',
  'Contribute to frontend development using React.js with a focus on performance and responsiveness.',
  'Collaborate with cross-functional teams including UX, QA, and Product to deliver robust features.',
  'Implement authentication and authorization mechanisms using Spring Security and JWT.',
  'Participate in daily stand-ups and sprint planning as part of Agile development methodology.',
  'Integrate APIs with PostgreSQL and work with ORM tools like Hibernate and JPA for efficient data access.',
  'Utilize Git and Bitbucket for version control and code reviews.',
  'Assist in setting up CI/CD pipelines using Jenkins and Docker to streamline deployment.',
  'Troubleshoot and resolve production issues, improving stability and uptime.',
  'Write unit and integration tests using JUnit and Mockito to ensure code quality.',
  'Continuously explore and adopt emerging technologies to enhance development processes.'
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
