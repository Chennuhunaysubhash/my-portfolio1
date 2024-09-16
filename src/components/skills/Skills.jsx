// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiMysql, SiMongodb, SiGraphql, SiTypescript, SiCss3, SiHtml5, SiGit, SiAngular, SiKubernetes } from 'react-icons/si';

// Import custom icons
import HibernateIcon from '/src/assets/icons/hibernate.png';
import RabbitMqIcon from '/src/assets/icons/rabbitmq.png';
import PostgreSQLIcon from '/src/assets/icons/postgresql.png';
import MicroservicesIcon from '/src/assets/icons/microservices.png';
import KafkaIcon from '/src/assets/icons/kafka.png';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'SpringBoot', icon: <SiSpringboot /> },
    { name: 'Hibernate', icon: <img src={HibernateIcon} alt="Hibernate" className="custom-icon" /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
   
    { name: 'Git', icon: <SiGit /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'GraphQL', icon: <SiGraphql /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'SQL', icon: <SiMysql /> }, 
    { name: 'NoSQL', icon: <SiMongodb /> },
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'RabbitMQ', icon: <img src={RabbitMqIcon} alt="RabbitMQ" className="custom-icon" /> },
    { name: 'PostgreSQL', icon: <img src={PostgreSQLIcon} alt="PostgreSQL" className="custom-icon" /> },
    { name: 'Kafka', icon: <img src={KafkaIcon} alt="Kafka" className="custom-icon" /> },
    { name: 'Microservices', icon: <img src={MicroservicesIcon} alt="Microservices" className="custom-icon" /> }
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.icon && <span className="skill-icon">{skill.icon}</span>}
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
