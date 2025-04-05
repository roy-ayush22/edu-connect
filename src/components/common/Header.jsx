import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = ({ isLoggedIn, userName }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="header-nav">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo-container">
            <Link to="/" className="header-logo">
              <span className="logo-edu">Edu</span>
              <span className="logo-connect">Connect</span>
            </Link>
          </div>

          <div className="header-nav-links desktop-only">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/volunteer" className="nav-link">Volunteer</Link>
            <Link to="/donate" className="nav-link">Donate</Link>
          </div>

          <div className="header-actions">
            <div className="header-nav-items">
              {isLoggedIn ? (
                <div className="header-user-info">
                  <span className="header-username">{userName}</span>
                  <Link 
                    to="/dashboard" 
                    className="header-dashboard-link"
                  >
                    <FaUserCircle className="header-icon" />
                  </Link>
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link 
                    to="/signin" 
                    className="header-signin-link"
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="header-signup-link"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-nav-link" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/about" className="mobile-nav-link" onClick={toggleMobileMenu}>About</Link>
        <Link to="/resources" className="mobile-nav-link" onClick={toggleMobileMenu}>Resources</Link>
        <Link to="/volunteer" className="mobile-nav-link" onClick={toggleMobileMenu}>Volunteer</Link>
        <Link to="/donate" className="mobile-nav-link" onClick={toggleMobileMenu}>Donate</Link>
        
        {!isLoggedIn && (
          <div className="mobile-auth-buttons">
            <Link 
              to="/signin" 
              className="mobile-signin-link"
              onClick={toggleMobileMenu}
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="mobile-signup-link"
              onClick={toggleMobileMenu}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header; 