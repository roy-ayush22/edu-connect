import { Link } from "react-router-dom";
import "./HomePage.css";
import {
  FaGraduationCap,
  FaUsers,
  FaLaptop,
  FaChalkboardTeacher,
  FaArrowRight,
  FaRegCheckCircle,
} from "react-icons/fa";

const HomePage = ({ isLoggedIn }) => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">
              Empowering Education for{" "}
              <span className="highlight">Marginalized Communities</span>
            </h1>
            <p className="hero-subtitle">
              Connect with volunteer educators, access personalized tutoring,
              and build essential digital skills for a brighter future.
            </p>
            <div className="hero-features">
              <div className="hero-feature-item">
                <FaRegCheckCircle className="hero-feature-icon" />
                <span>Free Access to Quality Education</span>
              </div>
              <div className="hero-feature-item">
                <FaRegCheckCircle className="hero-feature-icon" />
                <span>Personalized Learning Paths</span>
              </div>
              <div className="hero-feature-item">
                <FaRegCheckCircle className="hero-feature-icon" />
                <span>Connect with Volunteer Mentors</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link
                to={isLoggedIn ? "/dashboard" : "/signup"}
                className="hero-primary-btn"
              >
                {isLoggedIn ? "Go to Dashboard" : "Get Started for Free"}
                <FaArrowRight className="btn-icon" />
              </Link>
              <Link to="/about" className="hero-secondary-btn">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-img-container">
            <div className="hero-img-shape"></div>
            <img
              src="https://i0.wp.com/world-education-blog.org/wp-content/uploads/2022/04/34196754766_5b9a9b288e_o.jpg?fit=2160%2C1440&ssl=1"
              alt="Students learning together"
              className="hero-img"
            />
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="section-header">
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">Bridging the Digital Divide</h2>
          <p className="section-subtitle">
            Our platform connects learners with educators and provides the
            resources needed for digital literacy in today's world.
          </p>
        </div>

        <div className="features-container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-container">
                <FaGraduationCap className="feature-icon" />
              </div>
              <h3 className="feature-title">Personalized Learning</h3>
              <p className="feature-description">
                Customized learning paths based on your skill level and goals,
                making education accessible to everyone.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <FaUsers className="feature-icon" />
              </div>
              <h3 className="feature-title">Connect with Mentors</h3>
              <p className="feature-description">
                Access to volunteer educators who provide guidance, support, and
                personalized tutoring sessions.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <FaLaptop className="feature-icon" />
              </div>
              <h3 className="feature-title">Digital Skills</h3>
              <p className="feature-description">
                Learn essential digital literacy skills for today's connected
                world, improving employment opportunities.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon-container">
                <FaChalkboardTeacher className="feature-icon" />
              </div>
              <h3 className="feature-title">AI-Powered Learning</h3>
              <p className="feature-description">
                AI assistants help answer questions and guide your learning
                journey, available 24/7 for support.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <div className="testimonials-container">
          <div className="section-header">
            <div className="section-tag">Testimonials</div>
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Hear from our users about how EduConnect has transformed their
              educational journey and opened new opportunities.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Learning Journey?</h2>
            <p className="cta-subtitle">
              Join thousands of learners who are building their digital skills
              with EduConnect.
            </p>
            {isLoggedIn ? (
              <Link to="/dashboard" className="cta-button">
                Go to Dashboard
                <FaArrowRight className="btn-icon" />
              </Link>
            ) : (
              <Link to="/signup" className="cta-button">
                Sign Up Now
                <FaArrowRight className="btn-icon" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
