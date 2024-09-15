// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: "Certified Java Developer",
    issuer: "Oracle",
    year: "2023",
    url: "/JavaCertificate.pdf",
  },
  {
    title: "Certified ScrumMaster",
    issuer: "Scrum Alliance",
    year: "2021",
    url: "https://www.scrumalliance.org/",
  },
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <ul className="certifications-list">
          {certifications.map((cert, index) => (
            <li key={index} className="certification-item">
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-issuer">Issued by: {cert.issuer}</p>
              <p className="certification-year">Year: {cert.year}</p>
              <a href={cert.url} target="_blank" rel="noopener noreferrer" className="certification-link">View Certification</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
