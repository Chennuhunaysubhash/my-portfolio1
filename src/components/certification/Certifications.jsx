// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: "Certified Java Developer",
    issuer: "Oracle",
    year: "2022",
    url: "https://chennuhunaysubhash.github.io/my-portfolio1/JavaCertificate.pdf",
  },
  {
    title: "Low-Level Design 0f Payment App",
    issuer: "Scaler",
    year: "2024",
    url: "https://chennuhunaysubhash.github.io/my-portfolio1/lld-scaler.pdf",
  },
  {
    title: "SQL",
    issuer: "HackerRank",
    year: "2024",
    url: "https://chennuhunaysubhash.github.io/my-portfolio1/sql.pdf",
  },
  {
    title: "JAVA",
    issuer: "HackerRank",
    year: "2024",
    url: "https://chennuhunaysubhash.github.io/my-portfolio1/java.pdf",
  },
  {
    title: "Build An E-Commerce Platform Using React",
    issuer: "Scaler",
    year: "2024",
    url: "https://chennuhunaysubhash.github.io/my-portfolio1/reactjs.pdf",
  },
  
  
  // Add more certifications as needed
];

const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certified Achievements</h2>
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
