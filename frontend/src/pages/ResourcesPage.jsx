import React from 'react';
import './pages.css';

const ResourcesPage = () => {
  return (
    <div className="page-container resources-page">
      <section className="page-section">
        <div className="section-content">
          <h1>Educational Resources</h1>
          <p className="section-description">
            Browse our curated collection of free educational resources to enhance your learning journey.
          </p>
          
          <div className="resources-grid">
            <div className="resource-card">
              <div className="resource-image placeholder"></div>
              <h3>Coding Fundamentals</h3>
              <p>Learn the basics of programming with our beginner-friendly guides and tutorials.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image placeholder"></div>
              <h3>Digital Literacy</h3>
              <p>Essential skills for navigating today's digital world, from email to online safety.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image placeholder"></div>
              <h3>Math & Science</h3>
              <p>Interactive lessons covering key concepts in mathematics and sciences.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image placeholder"></div>
              <h3>Language Arts</h3>
              <p>Improve your reading, writing, and communication skills with our resources.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image placeholder"></div>
              <h3>Career Development</h3>
              <p>Resources to help you prepare for job opportunities in the digital economy.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image placeholder"></div>
              <h3>Financial Literacy</h3>
              <p>Learn essential money management skills and financial planning concepts.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage; 