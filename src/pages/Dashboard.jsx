import { useState, useEffect } from 'react';
import { FaBook, FaUsers, FaComment, FaUserCircle, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import './pages.css';

const Dashboard = ({ userName = 'User', userEmail = 'user@example.com', onSidebarToggle }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    const newState = !sidebarCollapsed;
    setSidebarCollapsed(newState);
    
    if (onSidebarToggle) {
      onSidebarToggle(newState);
    }
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && !sidebarCollapsed) {
        setSidebarCollapsed(true);
        if (onSidebarToggle) {
          onSidebarToggle(true);
        }
      }
    };
    
    handleResize();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarCollapsed, onSidebarToggle]);
  
  const user = {
    name: userName,
    email: userEmail,
    role: 'learner',
    progress: 65,
    upcomingLessons: [
      { id: 1, title: 'Introduction to Digital Literacy', date: '2023-08-15', time: '10:00 AM' },
      { id: 2, title: 'Basic Computer Skills', date: '2023-08-18', time: '11:00 AM' }
    ]
  };
  
  const mentors = [
    { id: 1, name: 'Dr. Sarah Johnson', expertise: 'Computer Science', rating: 4.9, available: true },
    { id: 2, name: 'Prof. Michael Chen', expertise: 'Digital Marketing', rating: 4.7, available: true },
    { id: 3, name: 'Amanda Williams', expertise: 'Web Development', rating: 4.8, available: false }
  ];
  
  const resources = [
    { id: 1, title: 'Fundamentals of Computer Science', type: 'Course', source: 'Khan Academy' },
    { id: 2, title: 'Digital Literacy Basics', type: 'eBook', source: 'EduConnect Library' },
    { id: 3, title: 'Web Development Bootcamp', type: 'Video Series', source: 'YouTube' }
  ];

  const handleLogout = () => {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('userEmail');
    window.location.href = '/signin';
  };

  return (
    <div className="dashboard-container">
      <button 
        className={`sidebar-toggle-btn ${sidebarCollapsed ? 'collapsed' : ''}`}
        onClick={toggleSidebar}
        aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {sidebarCollapsed ? <FaBars /> : <FaTimes />}
      </button>
      
      <div className={`dashboard-sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="dashboard-logo">
          {!sidebarCollapsed && <h1>EduConnect</h1>}
          {sidebarCollapsed && <div className="logo-icon">E</div>}
        </div>
        <nav className="dashboard-nav">
          <ul>
            <li>
              <button
                onClick={() => setActiveTab('overview')}
                className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                title="Overview"
              >
                <FaBook className="nav-icon" />
                {!sidebarCollapsed && <span>Overview</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('mentors')}
                className={`nav-item ${activeTab === 'mentors' ? 'active' : ''}`}
                title="Mentors"
              >
                <FaUsers className="nav-icon" />
                {!sidebarCollapsed && <span>Mentors</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('resources')}
                className={`nav-item ${activeTab === 'resources' ? 'active' : ''}`}
                title="Resources"
              >
                <FaBook className="nav-icon" />
                {!sidebarCollapsed && <span>Resources</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('messages')}
                className={`nav-item ${activeTab === 'messages' ? 'active' : ''}`}
                title="Messages"
              >
                <FaComment className="nav-icon" />
                {!sidebarCollapsed && <span>Messages</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('profile')}
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                title="Profile"
              >
                <FaUserCircle className="nav-icon" />
                {!sidebarCollapsed && <span>Profile</span>}
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="nav-item logout-btn"
                title="Logout"
              >
                <FaSignOutAlt className="nav-icon" />
                {!sidebarCollapsed && <span>Logout</span>}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`dashboard-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        <div className="dashboard-header">
          <h2>Welcome back, {user.name}</h2>
          <p>Your learning journey continues here</p>
        </div>

        {activeTab === 'overview' && (
          <div className="dashboard-overview">
            <div className="info-card">
              <h3>Your Progress</h3>
              <div className="progress-bar-container">
                <div 
                  className="progress-bar" 
                  style={{ width: `${user.progress}%` }}
                >
                  <span className="progress-text">{user.progress}%</span>
                </div>
              </div>
              <p>You're making great progress! Keep it up.</p>
            </div>

            <div className="info-card">
              <h3>Upcoming Lessons</h3>
              {user.upcomingLessons.length > 0 ? (
                <ul className="lessons-list">
                  {user.upcomingLessons.map((lesson) => (
                    <li key={lesson.id} className="lesson-item">
                      <h4>{lesson.title}</h4>
                      <div className="lesson-details">
                        <span>{lesson.date}</span>
                        <span>{lesson.time}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No upcoming lessons scheduled.</p>
              )}
            </div>

            <div className="info-card">
              <h3>Recommended Mentors</h3>
              <div className="mentors-grid">
                {mentors.slice(0, 2).map((mentor) => (
                  <div key={mentor.id} className="mentor-card">
                    <div className="mentor-avatar">
                      <FaUserCircle />
                    </div>
                    <div className="mentor-info">
                      <h4>{mentor.name}</h4>
                      <p>{mentor.expertise}</p>
                      <div className="mentor-rating">
                        Rating: {mentor.rating}/5.0
                      </div>
                      <button className="btn btn-primary">
                        {mentor.available ? 'Connect' : 'Request Session'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mentors' && (
          <div className="dashboard-mentors">
            <h3>Available Mentors</h3>
            <div className="mentors-grid">
              {mentors.map((mentor) => (
                <div key={mentor.id} className="mentor-card">
                  <div className="mentor-avatar">
                    <FaUserCircle />
                  </div>
                  <div className="mentor-info">
                    <h4>{mentor.name}</h4>
                    <p>{mentor.expertise}</p>
                    <div className="mentor-rating">
                      Rating: {mentor.rating}/5.0
                    </div>
                    <div className="mentor-status">
                      Status: <span className={mentor.available ? 'available' : 'unavailable'}>
                        {mentor.available ? 'Available' : 'Unavailable'}
                      </span>
                    </div>
                    <button className="btn btn-primary">
                      {mentor.available ? 'Connect' : 'Request Session'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="dashboard-resources">
            <h3>Learning Resources</h3>
            <div className="resources-grid">
              {resources.map((resource) => (
                <div key={resource.id} className="resource-card">
                  <div className="resource-content">
                    <h4>{resource.title}</h4>
                    <p>Type: {resource.type}</p>
                    <p>Source: {resource.source}</p>
                    <button className="btn btn-primary">Access Resource</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="dashboard-messages">
            <h3>Messages</h3>
            <p>No new messages at this time.</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="dashboard-profile">
            <div className="profile-header">
              <div className="profile-avatar">
                <FaUserCircle />
              </div>
              <div className="profile-info">
                <h3>{user.name}</h3>
                <p>Role: {user.role}</p>
              </div>
            </div>
            <div className="profile-details">
              <h4>Account Information</h4>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-input" value={user.email} readOnly />
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-input" value={user.name} readOnly />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input type="text" className="form-input" value={user.role} readOnly />
              </div>
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 