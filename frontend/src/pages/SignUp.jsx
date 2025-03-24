import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './pages.css'; // Add this import to use shared page styles

const SignUp = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'learner' // default role
  });

  // Redirect if already logged in
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
    // Form validation logic here
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // In a real app, you would create an account here
    console.log("Sign up data:", formData);

    // Store full name and email for login
    sessionStorage.setItem('userName', formData.name);
    sessionStorage.setItem('userEmail', formData.email);
    
    // Redirect directly to dashboard after signup
    window.location.href = '/dashboard';
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join EduConnect to start your digital literacy journey</p>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
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
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-options terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the <a href="#" className="auth-link">Terms of Service</a> and <a href="#" className="auth-link">Privacy Policy</a></label>
          </div>
          
          <button type="submit" className="auth-button">Create Account</button>
        </form>
        
        <div className="auth-alternative">
          <p>Already have an account? <Link to="/signin" className="auth-link">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp; 