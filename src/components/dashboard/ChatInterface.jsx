import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ChatInterface = ({ user }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      content: 'Hello! I\'m your AI learning assistant. How can I help you today?',
      timestamp: new Date().toISOString()
    }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    
    // Simulate AI response (in a real app, this would call an AI API)
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! I'd recommend starting with our beginner tutorials on digital literacy.",
        "Based on your interests, you might want to check out our resources on basic computer skills first.",
        "I can help you with that. Let's break down the concept into smaller, more manageable parts.",
        "Have you tried our interactive modules on this topic? They're designed to make learning more engaging.",
        "I understand your concern. Many learners find this challenging at first, but with practice, it becomes easier."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage = {
        id: messages.length + 2,
        sender: 'ai',
        content: randomResponse,
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 bg-blue-50 border-b">
        <h3 className="font-bold">AI Learning Assistant</h3>
        <p className="text-sm text-gray-600">Ask any questions about your learning journey</p>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map(msg => (
            <div 
              key={msg.id} 
              className={`flex items-start ${msg.sender === 'user' ? 'justify-end' : ''}`}
            >
              {msg.sender === 'ai' && (
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-2">
                  A
                </div>
              )}
              
              <div 
                className={`rounded-lg p-3 max-w-[80%] ${
                  msg.sender === 'user' ? 'bg-gray-100' : 'bg-blue-50'
                }`}
              >
                <p>{msg.content}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              
              {msg.sender === 'user' && (
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold ml-2">
                  {user?.name?.charAt(0) || 'U'}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 flex items-center justify-center"
          >
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface; 