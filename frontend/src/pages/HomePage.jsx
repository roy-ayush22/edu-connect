import { Link } from 'react-router-dom';
import './HomePage.css';
import { FaGraduationCap, FaUsers, FaLaptop, FaChalkboardTeacher } from 'react-icons/fa';

const HomePage = ({ isLoggedIn }) => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div>
            <h2 className="hero-title">
              Empowering Education for <span className="highlight">Marginalized Communities</span>
            </h2>
            <p className="hero-subtitle">
              Connect with volunteer educators, access personalized tutoring, and build essential digital skills.
            </p>
            <div className="hero-actions">
              <Link to={isLoggedIn ? "/dashboard" : "/signup"} className="sign-up-link">
                {isLoggedIn ? "Go to Dashboard" : "Get Started for Free"}
              </Link>
            </div>
          </div>
          <div className="hero-img-container">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Students learning together" 
              className="hero-img"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="features-container">
          <h2 className="section-title">How EduConnect Works</h2>
          <p className="section-subtitle">
            Our platform connects learners with educators and provides the resources needed for digital literacy.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-container">
                <FaGraduationCap className="feature-icon" />
              </div>
              <h3 className="feature-title">Personalized Learning</h3>
              <p className="feature-description">
                Customized learning paths based on your skill level and goals.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <FaUsers className="feature-icon" />
              </div>
              <h3 className="feature-title">Connect with Mentors</h3>
              <p className="feature-description">
                Access to volunteer educators who provide guidance and support.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <FaLaptop className="feature-icon" />
              </div>
              <h3 className="feature-title">Digital Skills</h3>
              <p className="feature-description">
                Learn essential digital literacy skills for today's connected world.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <FaChalkboardTeacher className="feature-icon" />
              </div>
              <h3 className="feature-title">AI-Powered Learning</h3>
              <p className="feature-description">
                AI assistants help answer questions and guide your learning journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-title">What Our Users Say</h2>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  M
                </div>
                <div>
                  <h4 className="testimonial-name">Maria S.</h4>
                  <p className="testimonial-role">Learner</p>
                </div>
              </div>
              <p className="testimonial-text">
                "EduConnect has transformed my life. I've learned digital skills that helped me find better employment opportunities. The mentors are incredibly supportive!"
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  J
                </div>
                <div>
                  <h4 className="testimonial-name">James R.</h4>
                  <p className="testimonial-role">Mentor</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Volunteering as a mentor on EduConnect has been rewarding. The platform makes it easy to connect with learners and make a real difference in their lives."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  L
                </div>
                <div>
                  <h4 className="testimonial-name">Lisa T.</h4>
                  <p className="testimonial-role">Community Leader</p>
                </div>
              </div>
              <p className="testimonial-text">
                "Our community has benefited tremendously from EduConnect. It's bridging the digital divide and creating opportunities for those who need it most."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of learners who are building their digital skills with EduConnect.
          </p>
          {isLoggedIn ? (
            <Link to="/dashboard" className="cta-button">
              Go to Dashboard
            </Link>
          ) : (
            <Link to="/signup" className="cta-button">
              Sign Up Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 