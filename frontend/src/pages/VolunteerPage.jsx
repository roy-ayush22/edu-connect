import React from 'react';
import './pages.css';

const VolunteerPage = () => {
  return (
    <div className="page-container volunteer-page">
      <section className="page-section">
        <div className="section-content">
          <h1>Become a Mentor</h1>
          <p className="section-description">
            Share your knowledge and skills with students who need guidance in their educational journey.
            Our mentors make a real difference in students' lives by providing support, encouragement, and expertise.
          </p>
          
          <div className="volunteer-options">
            <div className="volunteer-card">
              <h2>Ways to Volunteer</h2>
              <ul className="volunteer-list">
                <li>
                  <h3>Online Tutoring</h3>
                  <p>Provide one-on-one academic support in your area of expertise.</p>
                </li>
                <li>
                  <h3>Digital Skills Coaching</h3>
                  <p>Teach essential computer skills, internet navigation, and online safety.</p>
                </li>
                <li>
                  <h3>Career Mentorship</h3>
                  <p>Guide students exploring career paths related to your profession.</p>
                </li>
                <li>
                  <h3>Workshop Facilitation</h3>
                  <p>Lead interactive workshops on specific topics in your field.</p>
                </li>
              </ul>
            </div>
            
            <div className="volunteer-form-container">
              <h2>Apply to Volunteer</h2>
              <form className="volunteer-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="expertise">Area of Expertise</label>
                  <select id="expertise" name="expertise" required>
                    <option value="">Select your area of expertise</option>
                    <option value="math">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="english">English/Language Arts</option>
                    <option value="coding">Computer Science/Coding</option>
                    <option value="career">Career Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="availability">Availability (hours per week)</label>
                  <select id="availability" name="availability" required>
                    <option value="">Select your availability</option>
                    <option value="1-2">1-2 hours</option>
                    <option value="3-5">3-5 hours</option>
                    <option value="5+">5+ hours</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="motivation">Why do you want to volunteer?</label>
                  <textarea id="motivation" name="motivation" rows="4" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage; 