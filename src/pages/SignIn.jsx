import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './pages.css';

const SignIn = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign in data:", formData);
    
    sessionStorage.setItem('userName', formData.fullName);
    sessionStorage.setItem('userEmail', formData.email);
    
    window.location.href = '/dashboard';
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2 className="auth-title">EduConnect</h2>
        <p className="auth-subtitle">Sign in to your account</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-options">
            <div className="remember-me">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
              />
              <label htmlFor="remember-me">
                Remember me
              </label>
            </div>

            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </div>
          
          <button type="submit" className="auth-button">
            Sign in
          </button>
        </form>
        
        <div className="auth-alternative">
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn; 