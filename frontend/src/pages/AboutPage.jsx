import React from 'react';
import './pages.css';

const AboutPage = () => {
  return (
    <div className="page-container about-page">
      <section className="page-section">
        <div className="section-content">
          <h1>About EduConnect</h1>
          <p className="section-description">
            EduConnect is dedicated to improving digital literacy and access to quality education 
            for marginalized communities. Our mission is to bridge the digital divide and empower 
            individuals through education and technology.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            To provide equal educational opportunities by connecting students with resources, 
            mentors, and technology to help them succeed in the digital age.
          </p>
          
          <h2>Our Vision</h2>
          <p>
            A world where everyone has access to quality education and the skills needed to thrive
            in an increasingly digital society.
          </p>
          
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h3>Jane Doe</h3>
              <p>Co-Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h3>John Smith</h3>
              <p>Co-Founder & CTO</p>
            </div>
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h3>Sarah Johnson</h3>
              <p>Head of Education</p>
            </div>
            <div className="team-member">
              <div className="member-image placeholder"></div>
              <h3>Michael Lee</h3>
              <p>Community Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 