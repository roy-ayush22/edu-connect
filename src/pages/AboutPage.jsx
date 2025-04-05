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
            mentors, and technology to help them succeed in the digital age. We strive to:
          </p>
          <ul>
            <li>Deliver accessible and relevant digital literacy programs.</li>
            <li>Foster a supportive learning community through mentorship and collaboration.</li>
            <li>Equip learners with the practical skills needed for personal and professional growth.</li>
            <li>Leverage technology to create personalized and engaging learning experiences.</li>
          </ul>
          
          <h2>Our Vision</h2>
          <p>
            A world where everyone, regardless of their background or circumstances, has access to quality education 
            and the digital skills needed to thrive in an increasingly connected society. We envision:
          </p>
          <ul>
            <li>Empowered individuals contributing actively to their communities and the digital economy.</li>
            <li>Reduced educational inequality and a bridged digital divide.</li>
            <li>Thriving communities where technology enhances learning and opportunity for all.</li>
            <li>A culture of lifelong learning supported by accessible resources and mentorship.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 