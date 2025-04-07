"use client"

import React, { useState } from 'react';
import { FaLeaf, FaHome, FaChartLine, FaBullseye, FaGift, FaHeart, FaUser, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaTree, FaSun, FaGraduationCap, FaTint, FaInfoCircle, FaQuestion, FaLock, FaPhone } from 'react-icons/fa';

function DonationsPage() {
  const [donationPoints, setDonationPoints] = useState(500);
  const [selectedNGO, setSelectedNGO] = useState('reforestation-org');
  
  const causes = [
    { 
      id: 'reforestation-org',
      name: 'Forest Restoration Initiative', 
      logo: '/api/placeholder/60/60', 
      title: 'Plant Trees, Save Lives', 
      description: 'Help us restore forest ecosystems devastated by wildfires and deforestation.',
      goal: 50000,
      current: 32560,
      impact: 'trees planted',
      conversionRate: 50 // 50 points = 1 tree
    },
    { 
      id: 'solar-power-ngo',
      name: 'Renewable Energy Foundation', 
      logo: '/api/placeholder/60/60', 
      title: 'Power for Rural Communities', 
      description: 'Bringing clean solar energy to off-grid villages in developing countries.',
      goal: 75000,
      current: 41250,
      impact: 'solar panels installed',
      conversionRate: 1000 // 1000 points = 1 solar panel
    },
    { 
      id: 'education-alliance',
      name: 'Education for All Alliance', 
      logo: '/api/placeholder/60/60', 
      title: 'Books & Resources for Children', 
      description: 'Providing educational materials to underprivileged schools worldwide.',
      goal: 30000,
      current: 18750,
      impact: 'children supported',
      conversionRate: 250 // 250 points = 1 child supported
    },
    { 
      id: 'clean-water-project',
      name: 'Clean Water Initiative', 
      logo: '/api/placeholder/60/60', 
      title: 'Safe Water for Communities', 
      description: 'Building wells and water purification systems in water-scarce regions.',
      goal: 60000,
      current: 27300,
      impact: 'liters of clean water',
      conversionRate: 10 // 10 points = 1 liter
    }
  ];
  
  const recentDonations = [
    { name: 'Sarah K.', points: 1500, ngo: 'Forest Restoration Initiative', time: '2 hours ago' },
    { name: 'Michael B.', points: 3000, ngo: 'Renewable Energy Foundation', time: '5 hours ago' },
    { name: 'Jessica T.', points: 1000, ngo: 'Education for All Alliance', time: '12 hours ago' },
    { name: 'David L.', points: 2500, ngo: 'Clean Water Initiative', time: '1 day ago' },
    { name: 'Amanda R.', points: 500, ngo: 'Forest Restoration Initiative', time: '1 day ago' }
  ];
  
  const topDonors = [
    { name: 'Robert J.', points: 15000, avatar: 'https://i.pravatar.cc/150?img=10' },
    { name: 'Emily S.', points: 12500, avatar: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Thomas B.', points: 10000, avatar: 'https://i.pravatar.cc/150?img=8' }
  ];
  
  const faqs = [
    { 
      question: 'How are donations used?', 
      answer: 'Your donated points are converted to real funds that go directly to our partner NGOs. We ensure that 95% of all donations reach the intended causes with only 5% used for operational costs.' 
    },
    { 
      question: 'How do you ensure transparency?', 
      answer: 'We provide detailed impact reports for all donations. Our partner NGOs are verified annually, and all financial transactions are audited by independent third parties.' 
    },
    { 
      question: 'Can I get a tax receipt?', 
      answer: 'Yes! All donations are eligible for tax deductions. You can download your receipt from your profile dashboard after making a donation.' 
    }
  ];
  
  const categories = [
    { name: 'Reforestation', icon: <FaTree />, color: 'bg-[#2D4939]' },
    { name: 'Renewable Energy', icon: <FaSun />, color: 'bg-yellow-500' },
    { name: 'Education', icon: <FaGraduationCap />, color: 'bg-blue-500' },
    { name: 'Clean Water', icon: <FaTint />, color: 'bg-cyan-500' }
  ];
  
  const handleDonationChange = (e) => {
    setDonationPoints(Number(e.target.value));
  };
  
  const handleNGOChange = (e) => {
    setSelectedNGO(e.target.value);
  };
  
  const calculateImpact = () => {
    const selected = causes.find(cause => cause.id === selectedNGO);
    if (selected) {
      const impact = Math.floor(donationPoints / selected.conversionRate);
      return `${impact} ${selected.impact}`;
    }
    return '';
  };
  
  const getProgressPercentage = (current, goal) => {
    return Math.min((current / goal) * 100, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
 

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#2D4939] to-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Turn Your Points Into Real-World Impact</h1>
          <p className="text-xl max-w-2xl mx-auto">Donate your earned points to support environmental and social causes around the world.</p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <a 
                key={index} 
                href={`#${category.name.toLowerCase()}`} 
                className={`${category.color} text-white rounded-full px-6 py-2 flex items-center space-x-2 hover:opacity-90 transition`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Causes */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Causes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause) => (
              <div key={cause.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
                <div className="h-40 bg-gray-200 relative">
                  <img src="/api/placeholder/400/160" alt={cause.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-white p-1 rounded-md">
                    <img src={cause.logo} alt={cause.name} className="w-10 h-10" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2">{cause.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{cause.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{cause.current.toLocaleString()} points</span>
                      <span>{cause.goal.toLocaleString()} goal</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#2D4939] h-2 rounded-full" 
                        style={{ width: `${getProgressPercentage(cause.current, cause.goal)}%` }}
                      ></div>
                    </div>
                  </div>
                  <button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
                    onClick={() => {
                      setSelectedNGO(cause.id);
                      document.getElementById('donation-section').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Donations Work */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How Donations Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                <FaGift />
              </div>
              <h3 className="text-xl font-bold mb-2">Earn Points</h3>
              <p className="text-gray-600">Earn points through daily activities, challenges, and eco-friendly actions.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                <FaHeart />
              </div>
              <h3 className="text-xl font-bold mb-2">Convert to Donations</h3>
              <p className="text-gray-600">Choose a cause and convert your points into real-world impact.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-bold mb-2">Track Impact</h3>
              <p className="text-gray-600">See your contribution's real-world effect with transparent reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Input Section */}
      <section id="donation-section" className="py-12 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Make Your Donation</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Points to Donate</label>
              <div className="flex items-center gap-4">
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100" 
                  value={donationPoints} 
                  onChange={handleDonationChange}
                  className="w-full accent-green-500"
                />
                <input 
                  type="number" 
                  value={donationPoints} 
                  onChange={handleDonationChange}
                  className="w-24 p-2 border rounded text-center"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Select Cause</label>
              <select 
                value={selectedNGO} 
                onChange={handleNGOChange}
                className="w-full p-3 border rounded bg-white"
              >
                {causes.map(cause => (
                  <option key={cause.id} value={cause.id}>{cause.name} - {cause.title}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold text-center mb-2">Your Impact Preview</h3>
              <div className="text-center text-2xl text-green-600">
                Your {donationPoints} points = {calculateImpact()}
              </div>
            </div>
            
            <button className="w-full bg-[#2D4939] hover:bg-green-600 text-white py-3 rounded-md font-bold transition">
              Confirm Donation
            </button>
          </div>
        </div>
      </section>

      {/* Recent Donations & Community Impact */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Community Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Top Donors */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-xl mb-6 text-center">Top Donors This Month</h3>
              <div className="space-y-4">
                {topDonors.map((donor, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 text-blue-600 font-bold rounded-full h-8 w-8 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <img src={donor.avatar} alt={donor.name} className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="font-bold">{donor.name}</div>
                      <div className="text-gray-500 text-sm">{donor.points.toLocaleString()} points donated</div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      Top Donor
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Donations */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-xl mb-6 text-center">Recent Donations</h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {recentDonations.map((donation, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border-b">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-500">
                      <FaHeart />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{donation.name}</div>
                      <div className="text-sm text-gray-500">Donated to {donation.ngo}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">{donation.points} points</div>
                      <div className="text-xs text-gray-500">{donation.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4">
                <img src="/api/placeholder/100/100" alt="Success Story" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <h3 className="font-bold text-xl mb-2">Reforestation in Amazon</h3>
              <p className="text-gray-600 mb-4">
                "Thanks to EcoPoints donations, we've planted over 50,000 trees in deforested areas of the Amazon rainforest, creating new habitats for endangered species."
              </p>
              <p className="text-sm text-gray-500 italic">- Amazon Conservation Team</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4">
                <img src="/api/placeholder/100/100" alt="Success Story" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <h3 className="font-bold text-xl mb-2">Solar Power for Schools</h3>
              <p className="text-gray-600 mb-4">
                "Our school now has reliable electricity thanks to the solar panels funded by EcoPoints users. Our students can now study after dark."
              </p>
              <p className="text-sm text-gray-500 italic">- Rukia, Headmistress in Tanzania</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4">
                <img src="/api/placeholder/100/100" alt="Success Story" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <h3 className="font-bold text-xl mb-2">Clean Water Wells</h3>
              <p className="text-gray-600 mb-4">
                "The new water well in our village has transformed our community. Women no longer have to walk miles for clean water."
              </p>
              <p className="text-sm text-gray-500 italic">- Clean Water Initiative</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-xl mb-3 flex items-center">
                  <FaQuestion className="text-[#2D4939] mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <h3 className="font-bold text-xl mb-4">Still have questions?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="flex items-center bg-blue-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-200 transition">
                <FaInfoCircle className="mr-2" /> Learn More
              </a>
              <a href="#" className="flex items-center bg-blue-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-200 transition">
                <FaLock className="mr-2" /> Transparency Report
              </a>
              <a href="#" className="flex items-center bg-blue-100 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-200 transition">
                <FaPhone className="mr-2" /> Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-12 bg-gradient-to-r from-[#2D4939] to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Make a Difference Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Every point counts. Join thousands of users making real impact with their everyday activities.</p>
          <a 
            href="#donation-section" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition inline-block"
          >
            Start Donating
          </a>
        </div>
      </section>

    </div>
  );
}

export default DonationsPage;