"use client"

import React, { useState } from 'react';
import { FaLeaf, FaHome, FaChartLine, FaBullseye, FaGift, FaHeart, FaUser, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaWallet, FaExchangeAlt, FaFilePdf, FaFileExcel, FaLock, FaHistory, FaFilter } from 'react-icons/fa';

function RewardsWalletPage() {
  const [activeTransactionFilter, setActiveTransactionFilter] = useState('All');
  const [show2FAModal, setShow2FAModal] = useState(false);

  const transactions = [
    { date: '12 Mar 2025', type: 'Amazon Gift Card', status: 'Completed', amount: '$10', statusIcon: '✅' },
    { date: '10 Mar 2025', type: 'Bank Withdrawal', status: 'Pending', amount: '$25', statusIcon: '⏳' },
    { date: '08 Mar 2025', type: 'Eco-Discount Voucher', status: 'Failed', amount: '500 pts', statusIcon: '❌' },
    { date: '05 Mar 2025', type: 'Netflix Gift Card', status: 'Completed', amount: '$15', statusIcon: '✅' },
    { date: '01 Mar 2025', type: 'Donation to ForestNOW', status: 'Completed', amount: '200 pts', statusIcon: '✅' },
  ];

  const redeemOptions = [
    { title: 'Amazon Gift Card', icon: '🎟', description: 'Redeem for digital gift cards', minPoints: 500 },
    { title: 'Bank Transfer', icon: '💰', description: 'Convert points to cash', minPoints: 1000 },
    { title: 'Solar Panel Discount', icon: '☀️', description: '15% off at GreenEnergy', minPoints: 2000 },
    { title: 'E-Bike Voucher', icon: '🚲', description: '$50 off any e-bike purchase', minPoints: 2500 },
    { title: 'Netflix Subscription', icon: '🎬', description: '1-month premium plan', minPoints: 1500 },
    { title: 'Google Play Credit', icon: '🎮', description: 'For apps and games', minPoints: 800 },
  ];

  const ngoPartners = [
    { name: 'ForestNOW', logo: '🌳', description: 'Reforestation projects worldwide', impact: '1 tree planted per 100 pts' },
    { name: 'CleanWater Initiative', logo: '💧', description: 'Providing clean water access', impact: '5 people get clean water per 200 pts' },
    { name: 'RenewableWorld', logo: '🔋', description: 'Renewable energy projects', impact: 'Powers 1 home for a day per 150 pts' },
  ];

  const filterTransactions = (filter) => {
    setActiveTransactionFilter(filter);
  };

  const filteredTransactions = activeTransactionFilter === 'All' 
    ? transactions 
    : transactions.filter(t => t.status === activeTransactionFilter);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Page Title */}
      <div className="bg-[#2D4939] text-white pt-4 pb-10">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Rewards & Wallet</h1>
          <p>Manage your points and redeem awesome rewards</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-6">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Wallet Summary Card */}
          <div className="md:col-span-3 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-green-100 p-4 rounded-full mr-4">
                    <FaWallet className="text-[#2D4939] text-2xl" />
                  </div>
                  <div>
                    <h2 className="text-lg text-gray-500">Your Balance</h2>
                    <div className="text-4xl font-bold text-gray-800">2,450 <span className="text-[#2D4939]">pts</span></div>
                    <div className="text-gray-500 mt-1">Equivalent to approximately $24.50</div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 bg-[#2D4939] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
                    <FaExchangeAlt />
                    <span>Convert Points</span>
                  </button>
                  <button className="flex items-center space-x-2 border border-green-500 text-[#2D4939] px-6 py-3 rounded-lg hover:bg-green-50 transition duration-300">
                    <FaHistory />
                    <span>History</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Redeem Options Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b px-6 py-4">
                <h2 className="text-xl font-bold">Redeem Options</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {redeemOptions.map((option, index) => (
                    <div key={index} className="border rounded-xl p-4 hover:shadow-md transition duration-300">
                      <div className="flex items-start">
                        <div className="text-3xl mr-3">{option.icon}</div>
                        <div>
                          <h3 className="font-bold">{option.title}</h3>
                          <p className="text-sm text-gray-500">{option.description}</p>
                          <div className="mt-2 text-xs text-gray-400">Minimum: {option.minPoints} pts</div>
                          <div className="mt-3 flex space-x-2">
                            <button className="bg-[#2D4939] text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition duration-300">
                              Redeem Now
                            </button>
                            <button className="border border-gray-300 text-gray-500 px-3 py-1 rounded-lg text-sm hover:bg-gray-50 transition duration-300">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-xl font-bold">Recent Transactions</h2>
                <div className="flex space-x-2">
                  {['All', 'Completed', 'Pending', 'Failed'].map((filter) => (
                    <button 
                      key={filter}
                      onClick={() => filterTransactions(filter)}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        activeTransactionFilter === filter 
                          ? 'bg-[#2D4939] text-white' 
                          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                      } transition duration-300`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left text-gray-500 font-medium">Date</th>
                        <th className="px-4 py-2 text-left text-gray-500 font-medium">Reward Type</th>
                        <th className="px-4 py-2 text-left text-gray-500 font-medium">Status</th>
                        <th className="px-4 py-2 text-right text-gray-500 font-medium">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredTransactions.map((transaction, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-800">{transaction.date}</td>
                          <td className="px-4 py-3 text-gray-800">{transaction.type}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center ${
                              transaction.status === 'Completed' ? 'text-[#2D4939]' :
                              transaction.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'
                            }`}>
                              {transaction.statusIcon} <span className="ml-1">{transaction.status}</span>
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right font-medium">{transaction.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <button className="text-[#2D4939] hover:text-green-600 text-sm font-medium">View All Transactions</button>
                  <div className="flex space-x-2">
                    <button className="flex items-center space-x-1 text-gray-500 text-sm hover:text-gray-700">
                      <FaFilePdf />
                      <span>Export PDF</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 text-sm hover:text-gray-700">
                      <FaFileExcel />
                      <span>Export CSV</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Donations and Security */}
          <div className="space-y-6">
            {/* Donations Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b px-6 py-4">
                <h2 className="text-xl font-bold">Donations</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">Use your points to make a real environmental impact.</p>
                
                {/* Featured NGO */}
                <div className="bg-green-50 p-4 rounded-lg mb-4 border border-green-100">
                  <div className="flex items-center mb-2">
                    <span className="text-3xl mr-2">🌳</span>
                    <h3 className="font-bold">Featured: ForestNOW</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Help plant trees in deforested areas around the world.</p>
                  <div className="text-xs bg-white rounded p-2 mb-3">
                    <span className="font-bold text-[#2D4939]">Your Impact:</span> 1 tree planted per 100 points donated
                  </div>
                  <button className="w-full bg-[#2D4939] text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">
                    Donate Now
                  </button>
                </div>
                
                {/* Other NGOs */}
                <div className="space-y-3">
                  {ngoPartners.slice(1).map((ngo, index) => (
                    <div key={index} className="border rounded-lg p-3 hover:shadow-sm transition duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl mr-2">{ngo.logo}</span>
                          <div>
                            <h3 className="font-medium text-sm">{ngo.name}</h3>
                            <p className="text-xs text-gray-500">{ngo.impact}</p>
                          </div>
                        </div>
                        <button className="text-[#2D4939] text-sm hover:text-green-600">
                          Donate
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <a href="#" className="text-[#2D4939] hover:text-green-600 text-sm font-medium">
                    View All NGO Partners
                  </a>
                </div>
              </div>
            </div>
            
            {/* Security Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="border-b px-6 py-4">
                <h2 className="text-xl font-bold">Security & Settings</h2>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4 p-3 border rounded-lg hover:bg-gray-50 transition duration-300">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <FaLock className="text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Two-Factor Authentication</h3>
                      <p className="text-xs text-gray-500">Secure your account with 2FA</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShow2FAModal(true)}
                    className="border border-blue-500 text-blue-500 px-3 py-1 rounded-lg text-sm hover:bg-blue-50"
                  >
                    Setup
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition duration-300">
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <FaHistory className="text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Transaction Preferences</h3>
                      <p className="text-xs text-gray-500">Manage withdrawal methods</p>
                    </div>
                  </div>
                  <button className="border border-purple-500 text-purple-500 px-3 py-1 rounded-lg text-sm hover:bg-purple-50">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            
            {/* Points Tracker */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="font-bold mb-4">Points Goal Progress</h2>
                <div className="mb-2 flex justify-between text-sm">
                  <span>Monthly Goal: 5,000 pts</span>
                  <span className="font-bold">2,450 / 5,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#2D4939] h-2.5 rounded-full" style={{ width: '49%' }}></div>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  You've earned 49% of your monthly goal. Keep going!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* 2FA Modal */}
      {show2FAModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Set Up Two-Factor Authentication</h2>
            <p className="text-gray-600 mb-4">
              Enhance your account security by enabling two-factor authentication. We'll send a verification code to your device each time you log in.
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Verification Method
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-2">
                  <option>SMS (Text Message)</option>
                  <option>Email</option>
                  <option>Authenticator App</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
              </div>
            </div>
            <div className="flex space-x-3 justify-end">
              <button 
                onClick={() => setShow2FAModal(false)} 
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#2D4939] text-white rounded-lg hover:bg-green-600">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RewardsWalletPage;