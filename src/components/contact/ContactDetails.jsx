// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ContactDetails.css';

import BasicContactInfo from './sub-contact/BasicContactInfo';
import SocialLinks from './sub-contact/SocialLinks';

const ContactDetails = () => {
  return (
    <section className="contact-details-section">
      
      <div className="container">
        <div className="contact-details-container">
        <h3 className='contact-details-container-head'>Contact Details</h3>
          <BasicContactInfo />
        </div>
        <div className="contact-details-container">
        <h3 className='contact-details-container-head'>Social Media</h3>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
