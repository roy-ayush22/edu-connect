import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = ({ isLoggedIn, userName }) => {
  return (
    <nav className="header-nav">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo-container">
            <Link to="/" className="header-logo">EduConnect</Link>
          </div>
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
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 