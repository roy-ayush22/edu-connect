import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import DonatePage from './pages/DonatePage';
import VolunteerPage from './pages/VolunteerPage';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import DashboardPage from './pages/Dashboard';
import './index.css';

// Component to handle conditional rendering based on route
const AppContent = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isDashboard, setIsDashboard] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Check if user is logged in and get stored user data
  useEffect(() => {
    // This would normally check with your auth system
    // For now, check if we have user data in sessionStorage
    const storedUserName = sessionStorage.getItem('userName');
    const storedUserEmail = sessionStorage.getItem('userEmail');
    const path = location.pathname;
    
    // Check if we're on the dashboard page
    const dashboardActive = path === '/dashboard';
    setIsDashboard(dashboardActive);
    
    if (storedUserName) {
      setUserName(storedUserName);
      setUserEmail(storedUserEmail || '');
      setIsLoggedIn(true);
    } else if (dashboardActive) {
      // Fallback for demo purposes
      setIsLoggedIn(true);
      setUserName('Demo User');
      setUserEmail('demo@example.com');
    }
  }, [location]);

  // Handle sidebar collapse from dashboard
  const handleSidebarCollapse = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

  return (
    <div className={`app-container ${isDashboard ? `dashboard-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}` : ''}`}>
      <Header isLoggedIn={isLoggedIn} userName={userName} />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/signin" element={<SignInPage isLoggedIn={isLoggedIn} />} />
          <Route path="/signup" element={<SignUpPage isLoggedIn={isLoggedIn} />} />
          <Route path="/dashboard" element={
            <DashboardPage 
              userName={userName} 
              userEmail={userEmail} 
              onSidebarToggle={handleSidebarCollapse}
            />
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
