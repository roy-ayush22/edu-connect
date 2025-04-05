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
              <div className="resource-image">
                <img src="/images/Coding Fundamentals.png" alt="Coding Fundamentals" />
              </div>
              <h3>Coding Fundamentals</h3>
              <p>Learn the basics of programming with our beginner-friendly guides and tutorials.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image">
                <img src="/images/Critical Thinking.png" alt="Critical Thinking" />
              </div>
              <h3>Critical Thinking</h3>
              <p>Critical thinking means analyzing information objectively and making reasoned judgments. It involves questioning assumptions, evaluating evidence, and considering multiple perspectives.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image">
                <img src="/images/Math & Science.png" alt="Math & Science" />
              </div>
              <h3>Math & Science</h3>
              <p>Explore mathematical concepts and scientific principles with interactive lessons.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image">
                <img src="/images/Language Arts.png" alt="Language Arts" />
              </div>
              <h3>Language Arts</h3>
              <p>Improve your reading, writing, and communication skills with our resources.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image">
                <img src="/images/Political Science.png" alt="Political Science" />
              </div>
              <h3>Political Science</h3>
              <p>Resources to help you understand the political landscape of the world.</p>
              <button className="btn btn-primary">Access Resource</button>
            </div>
            
            <div className="resource-card">
              <div className="resource-image">
                <img src="/images/Financial Literacy.png" alt="Financial Literacy" />
              </div>
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