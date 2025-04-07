"use client"

import React, { useState, useEffect } from 'react';

const userDashboard = () => {
  // State for active section
  const [activeSection, setActiveSection] = useState('dashboard');
  // State for user data
  const [userData, setUserData] = useState({
    firstName: 'Alex',
    savedProperties: 12,
    achievements: 5,
    newListings: 7,
    priceDropAlerts: 3,
    notifications: [
      { id: 1, type: 'newListing', message: 'New listing matches your criteria', read: false },
      { id: 2, type: 'priceDrop', message: '10% price drop on saved property', read: false },
      { id: 3, type: 'challenge', message: 'New eco challenge available nearby', read: true }
    ],
    challenges: [
      { id: 1, title: 'Visit 3 eco-verified homes', progress: 66, type: 'Eco', completed: false },
      { id: 2, title: 'Complete property survey', progress: 50, type: 'Solo', completed: false }
    ],
    achievementsEarned: [
      { id: 1, title: 'First Save', description: 'Saved your first property', date: '2025-03-15' },
      { id: 2, title: 'Quick Explorer', description: 'Visited 5 properties in a week', date: '2025-03-28' }
    ],
    savedPropertiesList: [
      { id: 1, address: '123 Green St', price: '$450,000', tags: ['Eco-Friendly Zone'], favorited: true, image: 'house1' },
      { id: 2, address: '456 Solar Ave', price: '$525,000', tags: ['New', 'Price Dropped'], favorited: false, image: 'house2' },
      { id: 3, address: '789 Sustainable Rd', price: '$375,000', tags: ['Eco-Friendly Zone'], favorited: true, image: 'house3' }
    ],
    messages: [
      { id: 1, agent: 'Sarah Kim', property: '123 Green St', status: 'Online', unread: true },
      { id: 2, agent: 'John Smith', property: '456 Solar Ave', status: 'Offline', unread: false }
    ]
  });

  // Effect to simulate loading user data
  useEffect(() => {
    // This would typically fetch from an API
    console.log('Dashboard loaded');
  }, []);

  // Handle navigation click
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  // Placeholder images for properties
  const getPlaceholderImage = (image) => {
    return `/api/placeholder/300/200`;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Navigation Panel */}
      <div className="w-64 bg-[#2D4939] text-white flex flex-col">
        <div className="p-4 text-xl font-bold">
          <span className="text-[#E37019]">Piscal</span>
          <span className="text-white">+</span>
        </div>
        <nav className="flex-1">
          <button 
            onClick={() => handleNavClick('dashboard')} 
            className={`flex items-center w-full p-4 hover:bg-[#3a5a48] ${activeSection === 'dashboard' ? 'border-l-4 border-[#E37019]' : ''}`}
          >
            <span className="mr-3">🏠</span>
            <span>Dashboard Home</span>
          </button>
          <button 
            onClick={() => handleNavClick('savedProperties')} 
            className={`flex items-center w-full p-4 hover:bg-[#3a5a48] ${activeSection === 'savedProperties' ? 'border-l-4 border-[#E37019]' : ''}`}
          >
            <span className="mr-3">💾</span>
            <span>Saved Properties</span>
          </button>
          <button 
            onClick={() => handleNavClick('notifications')} 
            className={`flex items-center w-full p-4 hover:bg-[#3a5a48] ${activeSection === 'notifications' ? 'border-l-4 border-[#E37019]' : ''}`}
          >
            <span className="mr-3">📣</span>
            <span>Notifications</span>
          </button>
          <button 
            onClick={() => handleNavClick('challenges')} 
            className={`flex items-center w-full p-4 hover:bg-[#3a5a48] ${activeSection === 'challenges' ? 'border-l-4 border-[#E37019]' : ''}`}
          >
            <span className="mr-3">🏅</span>
            <span>Challenges</span>
          </button>
          <button 
            onClick={() => handleNavClick('messages')} 
            className={`flex items-center w-full p-4 hover:bg-[#3a5a48] ${activeSection === 'messages' ? 'border-l-4 border-[#E37019]' : ''}`}
          >
            <span className="mr-3">💬</span>
            <span>Messages</span>
          </button>
          <button 
            onClick={() => handleNavClick('settings')} 
            className={`flex items-center w-full p-4 hover:bg-[#3a5a48] ${activeSection === 'settings' ? 'border-l-4 border-[#E37019]' : ''}`}
          >
            <span className="mr-3">⚙️</span>
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome back, {userData.firstName} 👋</h1>
          <div className="flex items-center">
            <div className="relative mr-4">
              <input 
                type="text" 
                placeholder="Search listings, agents, or guides..." 
                className="bg-gray-100 rounded-full py-2 px-4 text-sm"
              />
              <span className="absolute right-3 top-2 text-gray-400">🔍</span>
            </div>
            <div className="relative mr-4">
              <span className="text-xl">🛎</span>
              {userData.notifications.some(n => !n.read) && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </div>
            <div className="w-8 h-8 rounded-full bg-[#E37019] text-white flex items-center justify-center">
              {userData.firstName.charAt(0)}
            </div>
          </div>
        </header>

        {/* Dynamic Content Based on Active Section */}
        <div className="p-6">
          {activeSection === 'dashboard' && (
            <>
              {/* Quick Glance Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow-sm border-t-4 border-[#E37019] p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-500 text-sm">Saved Properties</div>
                      <div className="text-2xl font-bold">{userData.savedProperties}</div>
                    </div>
                    <div className="text-2xl">💾</div>
                  </div>
                  <button className="text-sm text-[#E37019] mt-2">View All</button>
                </div>
                <div className="bg-white rounded-lg shadow-sm border-t-4 border-[#5D913B] p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-500 text-sm">Achievements Unlocked</div>
                      <div className="text-2xl font-bold">{userData.achievements}</div>
                    </div>
                    <div className="text-2xl">🏅</div>
                  </div>
                  <button className="text-sm text-[#E37019] mt-2">See Challenges</button>
                </div>
                <div className="bg-white rounded-lg shadow-sm border-t-4 border-[#2D4939] p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-500 text-sm">New Listings Near You</div>
                      <div className="text-2xl font-bold">{userData.newListings}</div>
                    </div>
                    <div className="text-2xl">🏠</div>
                  </div>
                  <button className="text-sm text-[#E37019] mt-2">Explore</button>
                </div>
                <div className="bg-white rounded-lg shadow-sm border-t-4 border-[#E37019] p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-gray-500 text-sm">Price Drop Alerts</div>
                      <div className="text-2xl font-bold">{userData.priceDropAlerts}</div>
                    </div>
                    <div className="text-2xl">📉</div>
                  </div>
                  <button className="text-sm text-[#E37019] mt-2">View</button>
                </div>
              </div>

              {/* Preview of Saved Properties */}
              <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Recently Saved Properties</h2>
                  <button className="text-sm text-[#E37019]">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {userData.savedPropertiesList.slice(0, 3).map(property => (
                    <div key={property.id} className="border rounded-lg overflow-hidden">
                      <div className="relative h-40 bg-gray-200">
                        <img src={getPlaceholderImage(property.image)} alt="Property" className="w-full h-full object-cover" />
                        {property.favorited && (
                          <div className="absolute top-2 right-2 text-lg">🧡</div>
                        )}
                      </div>
                      <div className="p-3">
                        <div className="font-semibold">{property.address}</div>
                        <div className="text-lg text-[#2D4939] font-bold">{property.price}</div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {property.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 rounded-full px-2 py-1">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Notifications Preview */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Recent Notifications</h2>
                  <button className="text-sm text-[#E37019]">View All</button>
                </div>
                <div className="space-y-2">
                  {userData.notifications.slice(0, 3).map(notification => (
                    <div 
                      key={notification.id} 
                      className={`p-3 rounded-lg border ${notification.read ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <div className="flex items-center">
                        <span className="mr-3 text-xl">
                          {notification.type === 'newListing' && '🔔'}
                          {notification.type === 'priceDrop' && '💸'}
                          {notification.type === 'challenge' && '📍'}
                        </span>
                        <div>
                          <div className="font-medium">{notification.message}</div>
                          <div className="text-xs text-gray-500">Today</div>
                        </div>
                        {!notification.read && (
                          <div className="ml-auto">
                            <span className="inline-block w-2 h-2 bg-[#E37019] rounded-full"></span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeSection === 'savedProperties' && (
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold mb-4">Saved Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {userData.savedPropertiesList.map(property => (
                  <div key={property.id} className="border rounded-lg overflow-hidden">
                    <div className="relative h-40 bg-gray-200">
                      <img src={getPlaceholderImage(property.image)} alt="Property" className="w-full h-full object-cover" />
                      {property.favorited && (
                        <div className="absolute top-2 right-2 text-lg">🧡</div>
                      )}
                    </div>
                    <div className="p-3">
                      <div className="font-semibold">{property.address}</div>
                      <div className="text-lg text-[#2D4939] font-bold">{property.price}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {property.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 rounded-full px-2 py-1">{tag}</span>
                        ))}
                      </div>
                      <div className="flex justify-between mt-3">
                        <button className="text-sm text-gray-500">🧡 Remove</button>
                        <button className="text-sm text-[#E37019]">🏷 Contact Agent</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <button className="text-sm bg-gray-100 rounded-full px-3 py-1">
                  Toggle Read/Unread
                </button>
              </div>
              <div className="space-y-2">
                {userData.notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`p-3 rounded-lg border ${notification.read ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <div className="flex items-center">
                      <span className={`mr-3 text-xl ${
                        notification.type === 'newListing' ? 'text-[#E37019]' : 
                        notification.type === 'priceDrop' ? 'text-[#E37019]' : 
                        'text-[#5D913B]'
                      }`}>
                        {notification.type === 'newListing' && '🔔'}
                        {notification.type === 'priceDrop' && '💸'}
                        {notification.type === 'challenge' && '📍'}
                      </span>
                      <div className="flex-1">
                        <div className="font-medium">{notification.message}</div>
                        <div className="text-xs text-gray-500">Today</div>
                      </div>
                      <button className="text-sm text-[#E37019]">Take Action</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'challenges' && (
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex mb-4">
                <button className="py-2 px-4 font-medium border-b-2 border-[#2D4939]">Current Challenges</button>
                <button className="py-2 px-4 font-medium text-gray-500">Earned Achievements</button>
              </div>
              
              <div className="space-y-4">
                {userData.challenges.map(challenge => (
                  <div key={challenge.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">{challenge.title}</div>
                      <span className="text-xs bg-gray-100 rounded-full px-2 py-1">
                        {challenge.type}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div 
                        className="bg-[#5D913B] h-3 rounded-full" 
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">{challenge.progress}% complete</div>
                      <button className="text-sm text-[#E37019]">✅ Mark Step as Done</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'messages' && (
            <div className="bg-white rounded-lg shadow-sm h-full">
              <div className="flex h-full">
                <div className="w-1/3 border-r">
                  <div className="p-4 border-b">
                    <h2 className="font-semibold">Messages</h2>
                  </div>
                  <div className="overflow-y-auto">
                    {userData.messages.map(message => (
                      <div 
                        key={message.id} 
                        className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${message.unread ? 'bg-[#fff4e7]' : ''}`}
                      >
                        <div className="flex justify-between">
                          <div className="font-medium">{message.agent}</div>
                          <div className="text-xs text-gray-500">12:30 PM</div>
                        </div>
                        <div className="text-sm text-gray-500">Re: {message.property}</div>
                        <div className="flex items-center text-xs mt-1">
                          <span className={`w-2 h-2 rounded-full ${message.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'} mr-1`}></span>
                          <span>{message.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-2/3 flex flex-col">
                  <div className="p-4 border-b">
                    <div className="font-medium">Sarah Kim</div>
                    <div className="text-sm text-gray-500">123 Green St</div>
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
                    <div className="text-center text-sm text-gray-500 mb-4">Today</div>
                    <div className="flex justify-end mb-4">
                      <div className="bg-[#E37019] text-white rounded-lg rounded-tr-none p-3 max-w-xs">
                        Hi Sarah, I'm interested in viewing the property this weekend.
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="bg-white border rounded-lg rounded-tl-none p-3 max-w-xs">
                        Hi there! I'd be happy to arrange a viewing. Would Saturday at 2pm work for you?
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t flex">
                    <input 
                      type="text" 
                      className="flex-1 bg-gray-100 rounded-full py-2 px-4 text-sm" 
                      placeholder="Type a message..."
                    />
                    <button className="ml-2 text-[#E37019]">Send</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex mb-4">
                <button className="py-2 px-4 font-medium border-b-2 border-[#2D4939]">Edit Profile</button>
                <button className="py-2 px-4 font-medium text-gray-500">Security</button>
                <button className="py-2 px-4 font-medium text-gray-500">Notification Preferences</button>
                <button className="py-2 px-4 font-medium text-gray-500">Referral Program</button>
              </div>
              
              <div className="flex space-x-6">
                <div className="w-24 h-24 bg-[#E37019] rounded-full flex items-center justify-center text-white text-2xl">
                  {userData.firstName.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full border rounded-lg p-2" 
                        value={userData.firstName}
                        onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full border rounded-lg p-2" 
                        placeholder="Enter last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full border rounded-lg p-2" 
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-500 mb-1">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full border rounded-lg p-2" 
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm text-gray-500 mb-1">Bio</label>
                    <textarea 
                      className="w-full border rounded-lg p-2" 
                      rows="3"
                      placeholder="Tell us about yourself"
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button className="bg-[#E37019] text-white py-2 px-4 rounded-lg">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default userDashboard;