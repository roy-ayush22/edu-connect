import { useState } from 'react';
import { FaBook, FaUsers, FaComment, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data - in a real app this would come from authentication/API
  const user = {
    name: 'John Doe',
    role: 'learner',
    progress: 65,
    upcomingLessons: [
      { id: 1, title: 'Introduction to Digital Literacy', date: '2023-08-15', time: '10:00 AM' },
      { id: 2, title: 'Basic Computer Skills', date: '2023-08-18', time: '11:00 AM' }
    ]
  };
  
  // Mock mentors data - in a real app this would come from an API
  const mentors = [
    { id: 1, name: 'Dr. Sarah Johnson', expertise: 'Computer Science', rating: 4.9, available: true },
    { id: 2, name: 'Prof. Michael Chen', expertise: 'Digital Marketing', rating: 4.7, available: true },
    { id: 3, name: 'Amanda Williams', expertise: 'Web Development', rating: 4.8, available: false }
  ];
  
  // Mock learning resources
  const resources = [
    { id: 1, title: 'Fundamentals of Computer Science', type: 'Course', source: 'Khan Academy' },
    { id: 2, title: 'Digital Literacy Basics', type: 'eBook', source: 'EduConnect Library' },
    { id: 3, title: 'Web Development Bootcamp', type: 'Video Series', source: 'YouTube' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-700 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">EduConnect</h1>
        </div>
        <nav className="mt-8">
          <ul>
            <li>
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center w-full px-4 py-3 text-left ${
                  activeTab === 'overview' ? 'bg-blue-800' : 'hover:bg-blue-600'
                }`}
              >
                <FaBook className="mr-3" />
                <span>Overview</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('mentors')}
                className={`flex items-center w-full px-4 py-3 text-left ${
                  activeTab === 'mentors' ? 'bg-blue-800' : 'hover:bg-blue-600'
                }`}
              >
                <FaUsers className="mr-3" />
                <span>Find Mentors</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex items-center w-full px-4 py-3 text-left ${
                  activeTab === 'chat' ? 'bg-blue-800' : 'hover:bg-blue-600'
                }`}
              >
                <FaComment className="mr-3" />
                <span>AI Chat</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('resources')}
                className={`flex items-center w-full px-4 py-3 text-left ${
                  activeTab === 'resources' ? 'bg-blue-800' : 'hover:bg-blue-600'
                }`}
              >
                <FaBook className="mr-3" />
                <span>Resources</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center w-full px-4 py-3 text-left ${
                  activeTab === 'profile' ? 'bg-blue-800' : 'hover:bg-blue-600'
                }`}
              >
                <FaUserCircle className="mr-3" />
                <span>Profile</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 w-64 p-4">
          <button 
            onClick={() => window.location.href = '/signin'} 
            className="flex items-center text-white hover:text-gray-200"
          >
            <FaSignOutAlt className="mr-3" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            {activeTab === 'overview' && 'Dashboard Overview'}
            {activeTab === 'mentors' && 'Find Mentors'}
            {activeTab === 'chat' && 'AI Learning Assistant'}
            {activeTab === 'resources' && 'Learning Resources'}
            {activeTab === 'profile' && 'Your Profile'}
          </h2>
          <div className="flex items-center">
            <div className="mr-4 text-right">
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-gray-500 capitalize">{user.role}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              {user.name.charAt(0)}
            </div>
          </div>
        </div>
        
        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Your Learning Progress</h3>
              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-blue-600 h-4 rounded-full"
                    style={{ width: `${user.progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-sm text-gray-600 mt-1">{user.progress}% Complete</p>
              </div>
              <p className="text-gray-600">
                You're making great progress! Continue your learning journey to unlock more advanced topics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">Upcoming Lessons</h3>
              {user.upcomingLessons.length > 0 ? (
                <ul className="space-y-4">
                  {user.upcomingLessons.map(lesson => (
                    <li key={lesson.id} className="border-b pb-3">
                      <p className="font-medium">{lesson.title}</p>
                      <p className="text-sm text-gray-600">
                        {lesson.date} at {lesson.time}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No upcoming lessons scheduled.</p>
              )}
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Schedule New Lesson
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setActiveTab('mentors')}
                  className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center"
                >
                  <FaUsers className="text-3xl text-blue-600 mb-2" />
                  <span>Find a Mentor</span>
                </button>
                <button
                  onClick={() => setActiveTab('chat')}
                  className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center"
                >
                  <FaComment className="text-3xl text-blue-600 mb-2" />
                  <span>Ask AI Assistant</span>
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className="p-4 border rounded-lg hover:bg-gray-50 flex flex-col items-center justify-center"
                >
                  <FaBook className="text-3xl text-blue-600 mb-2" />
                  <span>Browse Resources</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'mentors' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search mentors by name or expertise..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map(mentor => (
                <div key={mentor.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold mr-4">
                      {mentor.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{mentor.name}</h4>
                      <p className="text-sm text-gray-600">{mentor.expertise}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span>{mentor.rating}/5.0</span>
                    </div>
                    <div>
                      {mentor.available ? (
                        <span className="text-green-600 text-sm font-medium">Available</span>
                      ) : (
                        <span className="text-gray-500 text-sm">Unavailable</span>
                      )}
                    </div>
                  </div>
                  <button
                    className={`mt-4 w-full py-2 rounded-lg font-medium text-white ${
                      mentor.available ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    disabled={!mentor.available}
                  >
                    {mentor.available ? 'Connect' : 'Currently Unavailable'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'chat' && (
          <div className="bg-white rounded-lg shadow overflow-hidden h-[80vh] flex flex-col">
            <div className="p-4 bg-blue-50 border-b">
              <h3 className="font-bold">AI Learning Assistant</h3>
              <p className="text-sm text-gray-600">Ask any questions about your learning journey</p>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">
                    A
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                    <p>Hello! I'm your AI learning assistant. How can I help you today?</p>
                  </div>
                </div>
                
                <div className="flex items-start justify-end">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p>I want to learn more about digital literacy. Where should I start?</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold ml-2">
                    {user.name.charAt(0)}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">
                    A
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
                    <p>
                      That's a great goal! Digital literacy starts with understanding the basics of using digital 
                      devices and the internet safely. I recommend starting with our "Digital Literacy Basics" course.
                      Would you like me to show you some resources to get started?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border-t">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'resources' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-4">
              {resources.map(resource => (
                <div key={resource.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h4 className="font-bold">{resource.title}</h4>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">{resource.type}</span>
                    <span className="text-sm text-gray-600">Source: {resource.source}</span>
                  </div>
                  <button className="mt-3 text-blue-600 hover:text-blue-800 font-medium">
                    Access Resource
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'profile' && (
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-6">
              <div className="h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold mr-6">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{user.name}</h3>
                <p className="text-gray-600 capitalize">{user.role}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3">Personal Information</h4>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      value={user.name}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      value="john.doe@example.com"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Learning Interests</label>
                    <input
                      type="text"
                      value="Digital Literacy, Computer Skills, Internet Safety"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Save Changes
                  </button>
                </form>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Account Settings</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Change Password</label>
                    <button className="mt-1 text-blue-600 hover:text-blue-800">
                      Update your password
                    </button>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Notification Preferences</label>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <input
                          id="email-notifications"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-700">
                          Email notifications
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="sms-notifications"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="sms-notifications" className="ml-2 block text-sm text-gray-700">
                          SMS notifications
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <button className="text-red-600 hover:text-red-800">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 