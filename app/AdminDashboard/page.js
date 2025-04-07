"use client"

import React, { useState, useEffect } from 'react';

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');
  
  // Sample data for dashboard stats
  const [stats, setStats] = useState({
    totalUsers: 5483,
    activeListings: 1247,
    revenueThisMonth: '$24,892',
    ongoingRefunds: 12
  });

  // Handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Render the appropriate section based on activeSection state
  const renderSection = () => {
    switch(activeSection) {
      case 'dashboard':
        return <DashboardOverview stats={stats} />;
      case 'users':
        return <UserManagement />;
      case 'properties':
        return <PropertyListings />;
      case 'reports':
        return <ReportsAnalytics />;
      case 'transactions':
        return <Transactions />;
      case 'messaging':
        return <MessagingSupport />;
      case 'settings':
        return <Settings />;
      default:
        return <DashboardOverview stats={stats} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#2D4939] text-white">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-2xl font-serif font-bold">
            <span className="text-[#E37019]">Piscal</span>+
          </h1>
        </div>
        <nav className="mt-6">
          <SidebarItem 
            icon="📊" 
            title="Dashboard Overview" 
            active={activeSection === 'dashboard'} 
            onClick={() => handleSectionChange('dashboard')} 
          />
          <SidebarItem 
            icon="👥" 
            title="User Management" 
            active={activeSection === 'users'} 
            onClick={() => handleSectionChange('users')} 
          />
          <SidebarItem 
            icon="🏠" 
            title="Property Listings" 
            active={activeSection === 'properties'} 
            onClick={() => handleSectionChange('properties')} 
          />
          <SidebarItem 
            icon="📈" 
            title="Reports & Analytics" 
            active={activeSection === 'reports'} 
            onClick={() => handleSectionChange('reports')} 
          />
          <SidebarItem 
            icon="💰" 
            title="Transactions" 
            active={activeSection === 'transactions'} 
            onClick={() => handleSectionChange('transactions')} 
          />
          <SidebarItem 
            icon="💬" 
            title="Messaging & Support" 
            active={activeSection === 'messaging'} 
            onClick={() => handleSectionChange('messaging')} 
          />
          <SidebarItem 
            icon="⚙️" 
            title="Settings" 
            active={activeSection === 'settings'} 
            onClick={() => handleSectionChange('settings')} 
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="bg-white p-4 flex justify-between items-center shadow-sm">
          <div className="flex-1 max-w-md">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2">Language</button>
            <button className="p-2 relative">
              🔔
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center cursor-pointer">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="ml-2">Admin</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

// Sidebar Item Component
const SidebarItem = ({ icon, title, active, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center p-4 cursor-pointer transition-colors ${
        active ? 'bg-[#E37019] text-white' : 'text-gray-300 hover:bg-gray-700'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{title}</span>
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview = ({ stats }) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold">Hello Admin 👋 Welcome to Piscal+ Dashboard</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard title="Total Users" value={stats.totalUsers} color="from-[#5D913B] to-[#E37019]" />
        <StatCard title="Active Listings" value={stats.activeListings} color="from-[#5D913B] to-[#E37019]" />
        <StatCard title="Revenue This Month" value={stats.revenueThisMonth} color="from-[#5D913B] to-[#E37019]" />
        <StatCard title="Ongoing Refunds" value={stats.ongoingRefunds} color="from-[#5D913B] to-[#E37019]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Area Chart Placeholder</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">User Growth</h3>
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-500">Bar Chart Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, color }) => {
  return (
    <div className={`bg-gradient-to-r ${color} p-6 rounded-lg text-white`}>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

// User Management Component
const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', lastActive: '2h ago' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Partner', status: 'Active', lastActive: '1d ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'User', status: 'Inactive', lastActive: '5d ago' }
  ];

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold">User Management</h2>
        <div className="flex mt-4 border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'all' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            View All Users
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'banned' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('banned')}
          >
            Banned Users
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'roles' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('roles')}
          >
            Roles & Permissions
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Role</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Last Active</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-t">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs ${user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{user.lastActive}</td>
                  <td className="py-3 px-4 flex space-x-2">
                    <button className="p-1 text-blue-600">🔍</button>
                    <button className="p-1 text-red-600">❌</button>
                    <button className="p-1 text-gray-600">📝</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Property Listings Component
const PropertyListings = () => {
  const [activeTab, setActiveTab] = useState('pending');
  
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold">Property Listings</h2>
        <div className="flex mt-4 border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'pending' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('pending')}
          >
            Pending Approvals
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'all' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Listings
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'flagged' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('flagged')}
          >
            Flagged Listings
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sample Property Card */}
          <div className="border rounded-lg overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold">3-Bedroom Apartment</h3>
              <p className="text-gray-600">$1,200/month - Downtown</p>
              <p className="text-sm text-gray-500">Seller: John Doe</p>
              <div className="mt-4 flex space-x-2">
                <button className="px-3 py-1 bg-green-500 text-white rounded">✅ Approve</button>
                <button className="px-3 py-1 bg-red-500 text-white rounded">❌ Reject</button>
                <button className="px-3 py-1 bg-blue-500 text-white rounded">🔍 View</button>
              </div>
            </div>
          </div>
          
          {/* Additional property cards would go here */}
        </div>
      </div>
    </div>
  );
};

// Reports & Analytics Component
const ReportsAnalytics = () => {
  const [activeTab, setActiveTab] = useState('revenue');
  
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold">Reports & Analytics</h2>
        <div className="flex mt-4 border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'revenue' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('revenue')}
          >
            Revenue Report
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'activity' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            User Activity
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'ads' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('ads')}
          >
            Ads Performance
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'engagement' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('engagement')}
          >
            Engagement Metrics
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="h-64 bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">Chart Placeholder for {activeTab} data</p>
        </div>
      </div>
    </div>
  );
};

// Transactions Component
const Transactions = () => {
  const [activeTab, setActiveTab] = useState('payments');
  
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <div className="flex mt-4 border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'payments' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('payments')}
          >
            Payment Logs
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'refunds' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('refunds')}
          >
            Refund Requests
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'mobile' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            Mobile Money Overview
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === 'payments' && (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">User</th>
                  <th className="py-3 px-4 text-left">Type</th>
                  <th className="py-3 px-4 text-left">Amount</th>
                  <th className="py-3 px-4 text-left">Status</th>
                  <th className="py-3 px-4 text-left">Method</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-3 px-4">04/05/2025</td>
                  <td className="py-3 px-4">John Doe</td>
                  <td className="py-3 px-4">Subscription</td>
                  <td className="py-3 px-4">$49.99</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">Completed</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded text-xs bg-purple-100 text-purple-800">Stripe</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// Messaging & Support Component
const MessagingSupport = () => {
  const [activeTab, setActiveTab] = useState('inquiries');
  
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold">Messaging & Support</h2>
        <div className="flex mt-4 border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'inquiries' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('inquiries')}
          >
            User Inquiries
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'chatbot' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('chatbot')}
          >
            Chatbot Feedback
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="border p-4 rounded-lg">
              <div className="flex justify-between">
                <h3 className="font-medium">Jane Smith</h3>
                <span className="text-sm text-gray-500">2h ago</span>
              </div>
              <p className="text-sm font-medium text-gray-600">Payment Issue</p>
              <p className="text-sm text-gray-500 mt-1">I've been charged twice for my last subscription payment...</p>
              <div className="mt-2">
                <button className="text-sm text-blue-600">Reply</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Settings Component
const Settings = () => {
  const [activeTab, setActiveTab] = useState('platform');
  
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold">Settings</h2>
        <div className="flex mt-4 border-b">
          <button 
            className={`px-4 py-2 ${activeTab === 'platform' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('platform')}
          >
            Platform Settings
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'email' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('email')}
          >
            Email Templates
          </button>
          <button 
            className={`px-4 py-2 ${activeTab === 'notifications' ? 'border-b-2 border-[#E37019] text-[#E37019]' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            Notification Triggers
          </button>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === 'platform' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Listing Duration (days)
              </label>
              <input 
                type="number" 
                className="w-full px-3 py-2 border rounded-md" 
                defaultValue={30} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Primary Color
              </label>
              <div className="flex items-center">
                <input 
                  type="color" 
                  className="p-1 border rounded" 
                  defaultValue="#E37019" 
                />
                <span className="ml-2 text-sm text-gray-500">#E37019</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-md font-medium mb-2">Feature Toggles</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="virtualTours" className="mr-2" defaultChecked />
                  <label htmlFor="virtualTours">Enable Virtual Tours</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="gamification" className="mr-2" defaultChecked />
                  <label htmlFor="gamification">Enable Gamification</label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;