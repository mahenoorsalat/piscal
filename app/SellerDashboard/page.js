"use client"

import React, { useState } from 'react';

const SellerDashboard = () => {
  // State to track which tab is active
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sidebar navigation items
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'listings', label: 'My Listings', icon: '🏠' },
    { id: 'new-property', label: 'Post New Property', icon: '➕' },
    { id: 'performance', label: 'Performance Stats', icon: '📈' },
    { id: 'virtual-tours', label: 'Virtual Tours', icon: '🎥' },
    { id: 'boost', label: 'Boost Listings', icon: '🚀' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'settings', label: 'Account Settings', icon: '⚙️' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        {/* Logo in sidebar */}
        <div className="p-4 border-b">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-[#2D4939]">Piscal<span className="text-[#E37019]">+</span></h1>
          </div>
        </div>
        
        {/* Sidebar navigation */}
        <nav className="mt-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center w-full p-3 text-left hover:bg-gray-100 ${
                    activeTab === item.id ? 'bg-gray-100 border-l-4 border-[#5D913B]' : ''
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Seller Dashboard</h2>
            <p className="text-gray-600 mb-6">Manage your listings, track performance, and boost your sales!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">➕</span>
                  <h3 className="text-lg font-semibold">Add a New Listing</h3>
                </div>
                <p className="text-gray-600 mb-4">Create a new property listing to get started.</p>
                <button className="bg-[#E37019] text-white px-4 py-2 rounded">Add New Listing</button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📊</span>
                  <h3 className="text-lg font-semibold">Performance Overview</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm text-gray-500">Total Views</p>
                    <p className="text-2xl font-bold">1,245</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-sm text-gray-500">Inquiries</p>
                    <p className="text-2xl font-bold">37</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* My Listings Tab */}
        {activeTab === 'listings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">My Listings</h2>
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Active Listings (3)</h3>
                  <button className="text-[#E37019]">+ Add New</button>
                </div>
              </div>
              <div className="p-4">
                <div className="border rounded mb-4 p-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Luxury Apartment in Downtown</h4>
                    <div className="text-[#5D913B]">$250,000</div>
                  </div>
                  <div className="flex mt-2 text-sm text-gray-500">
                    <div className="mr-4">Views: 423</div>
                    <div>Inquiries: 12</div>
                  </div>
                  <div className="flex mt-4">
                    <button className="text-sm text-blue-600 mr-4">Edit</button>
                    <button className="text-sm text-blue-600 mr-4">Boost</button>
                    <button className="text-sm text-red-600">Delete</button>
                  </div>
                </div>
                
                <div className="border rounded mb-4 p-4">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">3BR Family Home in Suburbs</h4>
                    <div className="text-[#5D913B]">$320,000</div>
                  </div>
                  <div className="flex mt-2 text-sm text-gray-500">
                    <div className="mr-4">Views: 289</div>
                    <div>Inquiries: 8</div>
                  </div>
                  <div className="flex mt-4">
                    <button className="text-sm text-blue-600 mr-4">Edit</button>
                    <button className="text-sm text-blue-600 mr-4">Boost</button>
                    <button className="text-sm text-red-600">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Post New Property Tab */}
        {activeTab === 'new-property' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Post a New Property</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Property Title</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter property title" />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Property Type</label>
                <select className="w-full p-2 border rounded">
                  <option>Select type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Land</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Price</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter price" />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea className="w-full p-2 border rounded h-32" placeholder="Enter property description"></textarea>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Upload Photos</label>
                <div className="border-2 border-dashed p-8 text-center rounded">
                  <p className="text-gray-500">Drag and drop images here or click to browse</p>
                </div>
              </div>
              
              <button className="bg-[#E37019] text-white px-6 py-2 rounded">Submit Listing</button>
            </div>
          </div>
        )}

        {/* Performance Stats Tab */}
        {activeTab === 'performance' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Performance Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 mb-2">Total Views</h3>
                <p className="text-3xl font-bold">1,245</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 mb-2">Total Inquiries</h3>
                <p className="text-3xl font-bold">37</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 mb-2">Conversion Rate</h3>
                <p className="text-3xl font-bold">2.97%</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Property Views - Last 30 Days</h3>
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Chart placeholder</p>
              </div>
            </div>
          </div>
        )}

        {/* Virtual Tours Tab */}
        {activeTab === 'virtual-tours' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Add Virtual Tours & Videos</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Select Property</label>
                <select className="w-full p-2 border rounded">
                  <option>Luxury Apartment in Downtown</option>
                  <option>3BR Family Home in Suburbs</option>
                </select>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Upload Virtual Tour (360°)</h3>
                <div className="border-2 border-dashed p-8 text-center rounded">
                  <p className="text-gray-500">Drag and drop 360° tour file here or enter URL</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Upload Property Video</h3>
                <div className="mb-4">
                  <input type="text" className="w-full p-2 border rounded" placeholder="Enter YouTube or Vimeo URL" />
                </div>
                <p className="text-sm text-gray-500">- OR -</p>
                <div className="mt-2 border-2 border-dashed p-8 text-center rounded">
                  <p className="text-gray-500">Drag and drop video file here</p>
                </div>
              </div>
              
              <button className="bg-[#E37019] text-white px-6 py-2 rounded">Save Changes</button>
            </div>
          </div>
        )}

        {/* Boost Listings Tab */}
        {activeTab === 'boost' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Boost Your Listings</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="mb-6 text-gray-600">Increase visibility with a paid promotion to reach more potential buyers.</p>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Choose Listing to Boost</label>
                <select className="w-full p-2 border rounded">
                  <option>Luxury Apartment in Downtown</option>
                  <option>3BR Family Home in Suburbs</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Select Promotion Duration</label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border p-4 rounded text-center cursor-pointer hover:bg-gray-50">
                    <h4 className="font-bold">7 Days</h4>
                    <p className="text-[#5D913B] font-bold">$19.99</p>
                  </div>
                  <div className="border p-4 rounded text-center cursor-pointer hover:bg-gray-50 border-[#E37019]">
                    <h4 className="font-bold">14 Days</h4>
                    <p className="text-[#5D913B] font-bold">$34.99</p>
                    <p className="text-xs text-[#E37019]">Most Popular</p>
                  </div>
                  <div className="border p-4 rounded text-center cursor-pointer hover:bg-gray-50">
                    <h4 className="font-bold">30 Days</h4>
                    <p className="text-[#5D913B] font-bold">$59.99</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-[#E37019] text-white px-6 py-2 rounded w-full">Boost Now</button>
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Buyer Inquiries</h2>
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Recent Inquiries (8)</h3>
              </div>
              <div>
                <div className="border-b p-4 hover:bg-gray-50">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">John Smith</h4>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-600">Interested in: Luxury Apartment in Downtown</p>
                  <p className="text-sm mt-2">Hi, I'm interested in viewing this property. Is it available this weekend?</p>
                  <button className="mt-2 text-[#E37019] text-sm">Reply</button>
                </div>
                
                <div className="border-b p-4 hover:bg-gray-50">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <span className="text-sm text-gray-500">4 days ago</span>
                  </div>
                  <p className="text-sm text-gray-600">Interested in: 3BR Family Home in Suburbs</p>
                  <p className="text-sm mt-2">Hello, I have a few questions about the property. Is the price negotiable?</p>
                  <button className="mt-2 text-[#E37019] text-sm">Reply</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-6">
                <h3 className="font-semibold mb-4">Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full p-2 border rounded" value="James Wilson" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full p-2 border rounded" value="james@example.com" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input type="text" className="w-full p-2 border rounded" value="+1 (555) 123-4567" />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-4">Notification Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="checkbox" id="email-notif" checked className="mr-2" />
                    <label htmlFor="email-notif">Email notifications for new inquiries</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="sms-notif" className="mr-2" />
                    <label htmlFor="sms-notif">SMS notifications for new inquiries</label>
                  </div>
                </div>
              </div>
              
              <button className="bg-[#E37019] text-white px-6 py-2 rounded">Save Changes</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;