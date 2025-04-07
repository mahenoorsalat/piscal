"use client"

import React, { useState } from 'react';
import { FaLeaf, FaHome, FaChartLine, FaBullseye, FaGift, FaHeart, FaUser, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaFilter, FaFire, FaUsers, FaMedal, FaShare, FaPlus, FaClock, FaCheck, FaCamera, FaComment, FaRocket, FaTrophy, FaRunning, FaTree, FaBicycle } from 'react-icons/fa';

function ChallengesPage() {
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [isCreatingChallenge, setIsCreatingChallenge] = useState(false);
  
  const challenges = {
    trending: [
      { id: 1, title: "Walk 10,000 Steps Today!", progress: 75, points: 50, timeLeft: "12h", category: "Steps", participants: 1245, difficulty: "Easy" },
      { id: 2, title: "Cycle to Work Week", progress: 60, points: 150, timeLeft: "3d", category: "Distance", participants: 985, difficulty: "Medium" },
      { id: 3, title: "Zero Waste Weekend", progress: 40, points: 200, timeLeft: "2d", category: "Eco Action", participants: 567, difficulty: "Hard" },
      { id: 4, title: "Plant a Tree", progress: 0, points: 300, timeLeft: "14d", category: "Eco Action", participants: 890, difficulty: "Medium" }
    ],
    new: [
      { id: 5, title: "Morning Meditation", progress: 0, points: 30, timeLeft: "24h", category: "Wellness", participants: 125, difficulty: "Easy" },
      { id: 6, title: "Plastic-Free Week", progress: 0, points: 250, timeLeft: "7d", category: "Eco Action", participants: 78, difficulty: "Hard" },
      { id: 7, title: "30,000 Steps in 3 Days", progress: 0, points: 100, timeLeft: "3d", category: "Steps", participants: 215, difficulty: "Medium" }
    ],
    community: [
      { id: 8, title: "City Clean-up Day", progress: 0, points: 400, timeLeft: "5d", category: "Eco Action", participants: 345, difficulty: "Medium" },
      { id: 9, title: "Neighborhood Bike Tour", progress: 30, points: 200, timeLeft: "1d", category: "Distance", participants: 156, difficulty: "Easy" }
    ],
    personal: [
      { id: 10, title: "My Daily 5K Run", progress: 80, points: 50, timeLeft: "4h", category: "Distance", participants: 1, difficulty: "Medium" }
    ]
  };

  const leaderboard = [
    { rank: 1, name: "Sarah J.", points: 8760, avatar: "https://i.pravatar.cc/150?img=1" },
    { rank: 2, name: "Michael T.", points: 8450, avatar: "https://i.pravatar.cc/150?img=2" },
    { rank: 3, name: "Lisa R.", points: 7890, avatar: "https://i.pravatar.cc/150?img=3" },
    { rank: 4, name: "John D.", points: 7650, avatar: "https://i.pravatar.cc/150?img=4" },
    { rank: 5, name: "Emily W.", points: 7320, avatar: "https://i.pravatar.cc/150?img=5" }
  ];

  const challengeTypes = [
    { id: 'steps', name: 'Steps', icon: <FaRunning /> },
    { id: 'eco', name: 'Eco Action', icon: <FaTree /> },
    { id: 'distance', name: 'Distance', icon: <FaBicycle /> }
  ];

  const durations = [
    { id: '24h', name: '24 Hours' },
    { id: '7d', name: '7 Days' },
    { id: 'custom', name: 'Custom' }
  ];

  const renderTabs = () => {
    return (
      <div className="flex flex-wrap mb-8">
        <button 
          onClick={() => setActiveTab('trending')} 
          className={`flex items-center px-4 py-2 mr-2 mb-2 rounded-full ${activeTab === 'trending' ? 'bg-[#2D4939] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <FaFire className="mr-2" /> Trending
        </button>
        <button 
          onClick={() => setActiveTab('new')} 
          className={`flex items-center px-4 py-2 mr-2 mb-2 rounded-full ${activeTab === 'new' ? 'bg-[#2D4939] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <FaPlus className="mr-2" /> New Challenges
        </button>
        <button 
          onClick={() => setActiveTab('community')} 
          className={`flex items-center px-4 py-2 mr-2 mb-2 rounded-full ${activeTab === 'community' ? 'bg-[#2D4939] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <FaUsers className="mr-2" /> Community Challenges
        </button>
        <button 
          onClick={() => setActiveTab('personal')} 
          className={`flex items-center px-4 py-2 mr-2 mb-2 rounded-full ${activeTab === 'personal' ? 'bg-[#2D4939] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <FaMedal className="mr-2" /> Personal Challenges
        </button>
      </div>
    );
  };

  const renderChallengeCard = (challenge) => {
    return (
      <div key={challenge.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
        <div className="h-4 bg-[#2D4939]"></div>
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-bold text-lg">{challenge.title}</h3>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">{challenge.category}</span>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{challenge.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-[#2D4939] h-2.5 rounded-full" 
                style={{ width: `${challenge.progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex justify-between mb-6">
            <div className="flex items-center text-green-600">
              <FaTrophy className="mr-1" />
              <span>+{challenge.points} XP</span>
            </div>
            <div className="flex items-center text-gray-500">
              <FaClock className="mr-1" />
              <span>Ends in {challenge.timeLeft}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{challenge.participants} participants</span>
            <button 
              onClick={() => setSelectedChallenge(challenge)}
              className="bg-[#2D4939] hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300"
            >
              Accept Challenge
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderChallengeList = () => {
    const currentChallenges = challenges[activeTab] || [];
    
    if (currentChallenges.length === 0) {
      return (
        <div className="text-center py-10">
          <p className="text-gray-500">No challenges found in this category.</p>
          <button 
            onClick={() => setIsCreatingChallenge(true)}
            className="mt-4 bg-[#2D4939] hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Create a Challenge
          </button>
        </div>
      );
    }
    
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentChallenges.map(challenge => renderChallengeCard(challenge))}
      </div>
    );
  };

  const renderChallengeDetails = () => {
    const challenge = selectedChallenge;
    
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div 
          className="h-48 bg-[#2D4939] flex items-center justify-center text-white"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/api/placeholder/1200/400)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <h2 className="text-3xl font-bold">{challenge.title}</h2>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full flex items-center">
              <FaTrophy className="mr-2" />
              <span>{challenge.points} XP</span>
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center">
              <FaUsers className="mr-2" />
              <span>{challenge.participants} Participants</span>
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full flex items-center">
              <FaClock className="mr-2" />
              <span>Ends in {challenge.timeLeft}</span>
            </div>
            <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full flex items-center">
              <FaFilter className="mr-2" />
              <span>Difficulty: {challenge.difficulty}</span>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Challenge Overview</h3>
            <p className="text-gray-600 mb-4">
              Complete this challenge by achieving the specified goal within the time limit. Track your progress, 
              compete with others, and earn rewards upon completion!
            </p>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Your Progress</span>
                <span>{challenge.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-[#2D4939] h-2.5 rounded-full" 
                  style={{ width: `${challenge.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Participation Options</h3>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#2D4939] hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center">
                <FaRunning className="mr-2" />
                Individual Mode
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl flex items-center">
                <FaUsers className="mr-2" />
                Team Mode
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              {leaderboard.map((user, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-3 ${index < leaderboard.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${index < 3 ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {user.rank}
                  </div>
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
                  <div className="flex-grow">
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div className="font-bold text-green-600">{user.points} XP</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#2D4939] hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center">
              <FaCheck className="mr-2" />
              Mark as Completed
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center">
              <FaCamera className="mr-2" />
              Upload Proof
            </button>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl flex items-center">
              <FaComment className="mr-2" />
              Comment & Engage
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderCreateChallenge = () => {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Create a Custom Challenge</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Challenge Name</label>
            <input 
              type="text" 
              placeholder="E.g., Daily 10K Steps Challenge" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Challenge Type</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {challengeTypes.map(type => (
                <div key={type.id} className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-green-50 hover:border-green-500">
                  <div className="flex items-center">
                    <div className="bg-green-100 text-green-600 p-3 rounded-full mr-3">
                      {type.icon}
                    </div>
                    <span>{type.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Challenge Duration</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {durations.map(duration => (
                <div key={duration.id} className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-green-50 hover:border-green-500">
                  <span>{duration.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Points & Rewards</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">XP Points</label>
                <input 
                  type="number" 
                  placeholder="100" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Difficulty Level</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500">
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={() => setIsCreatingChallenge(false)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl mr-4"
            >
              Cancel
            </button>
            <button 
              onClick={() => {
                setIsCreatingChallenge(false);
                setActiveTab('personal');
              }}
              className="bg-[#2D4939] hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center"
            >
              <FaRocket className="mr-2" />
              Publish Challenge
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">


      {/* Hero Section */}
      <section className="bg-[#2D4939] text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Challenges, Earn Rewards!</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Compete with friends, complete daily tasks, and earn exciting rewards.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setIsCreatingChallenge(false)}
              className="bg-white text-[#2D4939] px-8 py-3 rounded-full font-bold hover:bg-green-100 transition duration-300 shadow-lg"
            >
              Join a Challenge
            </button>
            <button 
              onClick={() => setIsCreatingChallenge(true)}
              className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition duration-300 shadow-lg"
            >
              Create Your Own
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {!selectedChallenge && !isCreatingChallenge && (
            <>
              <h2 className="text-3xl font-bold mb-6">Active Challenges</h2>
              {renderTabs()}
              {renderChallengeList()}
            </>
          )}
          
          {selectedChallenge && !isCreatingChallenge && (
            <div>
              <button 
                onClick={() => setSelectedChallenge(null)}
                className="mb-6 flex items-center text-green-600 hover:text-green-700"
              >
                <FaChevronLeft className="mr-1" /> Back to Challenges
              </button>
              {renderChallengeDetails()}
            </div>
          )}
          
          {isCreatingChallenge && (
            <div>
              <button 
                onClick={() => setIsCreatingChallenge(false)}
                className="mb-6 flex items-center text-green-600 hover:text-green-700"
              >
                <FaChevronLeft className="mr-1" /> Back to Challenges
              </button>
              {renderCreateChallenge()}
            </div>
          )}
        </div>
      </section>

      {/* Gamification Section */}
      {!selectedChallenge && !isCreatingChallenge && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Gamification & Rewards</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl text-[#2D4939] mb-4">🔥</div>
                <h3 className="text-xl font-bold mb-3">Progress Tracking</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheck className="text-[#2D4939] mr-2" />
                    Daily Streaks
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-[#2D4939] mr-2" />
                    Achievements & Badges
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-[#2D4939] mr-2" />
                    Weekly Summary Reports
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl text-[#2D4939] mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">XP & Level System</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheck className="text-[#2D4939] mr-2" />
                    Earn XP for completing challenges
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-[#2D4939] mr-2" />
                    Level up your profile
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-[#2D4939] mr-2" />
                    Unlock new reward tiers
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl text-[#2D4939] mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-3">Virtual Store</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <FaCheck className="text-[#2D4939] mr-2" />
                    Discounts & Gift Cards
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-[#2D4939] mr-2" />
                    Donate to NGOs
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-[#2D4939] mr-2" />
                    Special Perks & Features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Social & Engagement */}
      {!selectedChallenge && !isCreatingChallenge && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Social & Engagement</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl text-[#2D4939] mb-4">📢</div>
                <h3 className="text-xl font-bold mb-3">Share & Invite Friends</h3>
                <p className="text-gray-600 mb-4">
                  Share your accomplishments and invite friends to join the platform.
                </p>
                <button className="bg-[#2D4939] hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300 flex items-center">
                  <FaShare className="mr-2" />
                  Share on Social Media
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl text-[#2D4939] mb-4">👥</div>
                <h3 className="text-xl font-bold mb-3">Community Feed</h3>
                <p className="text-gray-600 mb-4">
                  See updates from your friends and the community. Interact and stay motivated!
                </p>
                <button className="bg-[#2D4939] hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300">
                  View Feed
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl text-[#2D4939] mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3">AI Chatbot Help</h3>
                <p className="text-gray-600 mb-4">
                  Get instant answers to your questions about challenges and rewards.
                </p>
                <button className="bg-[#2D4939] hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-300">
                  Ask EcoBot
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
      </div>

);
}

export default ChallengesPage ;