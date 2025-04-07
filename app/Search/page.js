"use client"

import { useState } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiMapPin, FiDollarSign, FiSearch } from 'react-icons/fi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCheckCircleFill, BsHouseDoor } from 'react-icons/bs';
import { BiSlider } from 'react-icons/bi';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { RiLeafLine } from 'react-icons/ri';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Search() {
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Sample properties data
  const properties = [
    {
      id: 1,
      title: "3 Bedroom Eco-Friendly Villa in Abidjan",
      address: "Cocody Riviera, Abidjan",
      price: 350000,
      beds: 3,
      baths: 2,
      area: 150,
      image: "https://images.pexels.com/photos/5997960/pexels-photo-5997960.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["new", "eco-verified"],
    },
    {
      id: 2,
      title: "Modern 2BR Apartment with Solar Panels",
      address: "Marcory Zone 4, Abidjan",
      price: 220000,
      beds: 2,
      baths: 1,
      area: 95,
      image: "https://images.pexels.com/photos/30332467/pexels-photo-30332467/free-photo-of-smartphone-capturing-modern-kitchen-interior.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["hot-deal"],
    },
    {
      id: 3,
      title: "Luxury 4BR House with Garden",
      address: "Deux Plateaux, Abidjan",
      price: 450000,
      beds: 4,
      baths: 3,
      area: 210,
      image: "https://images.pexels.com/photos/31473379/pexels-photo-31473379/free-photo-of-cozy-bedroom-with-classic-decor-and-wooden-wardrobe.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["eco-verified"],
    },
    {
      id: 4,
      title: "Cozy 1BR Apartment Near Beach",
      address: "Assinie, Abidjan",
      price: 175000,
      beds: 1,
      baths: 1,
      area: 65,
      image: "https://images.pexels.com/photos/31473376/pexels-photo-31473376/free-photo-of-cozy-bedroom-in-elegant-modern-home.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: [],
    },
    {
      id: 5,
      title: "Spacious 3BR Duplex with Garden",
      address: "Bingerville, Abidjan",
      price: 320000,
      beds: 3,
      baths: 2.5,
      area: 180,
      image: "https://images.pexels.com/photos/31473363/pexels-photo-31473363/free-photo-of-cozy-minimalist-bathroom-with-bathtub-and-tiles.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["eco-verified", "hot-deal"],
    },
    {
      id: 6,
      title: "Contemporary 2BR Condo Downtown",
      address: "Plateau, Abidjan",
      price: 280000,
      beds: 2,
      baths: 2,
      area: 110,
      image: "https://images.pexels.com/photos/31473374/pexels-photo-31473374/free-photo-of-charming-traditional-living-room-with-garden-view.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["new"],
    },
  ];

  // Format price with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Property Search | Piscal+</title>
        <meta name="description" content="Find your eco-smart home with Piscal+" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      {/* Mobile Navigation Menu (hidden by default) */}
      <div className="hidden fixed inset-0 bg-white z-50 p-6">
        <div className="flex justify-end">
          <button className="text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-12">
          <Link href="/" className="text-xl text-gray-800 hover:text-[#2D4939]">Home</Link>
          <Link href="/buy" className="text-xl text-gray-800 hover:text-[#2D4939]">Buy</Link>
          <Link href="/rent" className="text-xl text-gray-800 hover:text-[#2D4939]">Rent</Link>
          <Link href="/eco-rewards" className="text-xl text-gray-800 hover:text-[#2D4939]">EcoRewards</Link>
          <Link href="/challenges" className="text-xl text-gray-800 hover:text-[#2D4939]">Challenges</Link>
          <Link href="/contact" className="text-xl text-gray-800 hover:text-[#2D4939]">Contact</Link>
          <Link href="/post-listing" className="bg-[#E37019] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all text-center">
            🏡 Post Your Listing
          </Link>
        </nav>
      </div>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center px-6 md:px-12"
        style={{
          backgroundImage: "url('/searchBg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-[#2D4939] opacity-30"></div>
        <div className="relative z-10 w-full max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find your eco-smart home with Piscal+</h1>
            <p className="text-xl text-white">Verified listings. Transparent pricing. Eco rewards.</p>
          </div>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="flex items-center border border-gray-300 rounded px-4 py-2 bg-white">
                  <BsHouseDoor className="text-gray-400 mr-2" />
                  <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="w-full outline-none text-gray-700"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center border border-gray-300 rounded px-4 py-2 bg-white">
                  <FiMapPin className="text-gray-400 mr-2" />
                  <input 
                    type="text" 
                    placeholder="City or Postal Code" 
                    className="w-full outline-none text-gray-700" 
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center border border-gray-300 rounded px-4 py-2 bg-white">
                  <FiDollarSign className="text-gray-400 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Min - Max Price" 
                    className="w-full outline-none text-gray-700" 
                  />
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="flex items-center border border-gray-300 rounded px-4 py-2 bg-white">
                  <FaBed className="text-gray-400 mr-2" />
                  <select className="w-full outline-none text-gray-700 bg-transparent">
                    <option value="">Beds</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="flex items-center border border-gray-300 rounded px-4 py-2 bg-white">
                  <FaBath className="text-gray-400 mr-2" />
                  <select className="w-full outline-none text-gray-700 bg-transparent">
                    <option value="">Baths</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="w-full md:w-auto bg-[#E37019] text-white px-6 py-3 rounded hover:bg-opacity-90 transition-all flex items-center justify-center">
                <FiSearch className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* View Toggle & Filter Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Properties Available</h2>
          <div className="flex space-x-4">
            <button 
              onClick={() => setShowMap(!showMap)}
              className="flex items-center text-gray-600 hover:text-[#2D4939]"
            >
              {showMap ? 'List View' : 'Map View'}
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {showMap ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                )}
              </svg>
            </button>
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center text-gray-600 hover:text-[#2D4939]"
            >
              Filters
              <BiSlider className="ml-1" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          {(showFilters || !showMap) && (
            <div className={`${showMap ? 'hidden md:block' : ''} md:w-72 bg-white p-6 rounded-lg shadow-md h-fit`}>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Property Type</h3>
                <div className="space-y-2">
                  {["House", "Apartment", "Land", "Duplex", "Villa"].map((type) => (
                    <div key={type} className="flex items-center">
                      <input type="checkbox" id={type.toLowerCase()} className="mr-2" />
                      <label htmlFor={type.toLowerCase()} className="text-gray-600">{type}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Budget Range</h3>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="1000000" 
                    step="10000" 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#E37019]" 
                  />
                </div>
                <div className="flex justify-between mt-2 text-gray-600">
                  <span>$0</span>
                  <span>$1,000,000</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Bedrooms</h3>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, "5+"].map((num) => (
                    <div 
                      key={num} 
                      className="px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:border-[#2D4939] hover:text-[#2D4939] cursor-pointer"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Bathrooms</h3>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, "4+"].map((num) => (
                    <div 
                      key={num} 
                      className="px-4 py-2 border border-gray-300 rounded-full text-gray-600 hover:border-[#2D4939] hover:text-[#2D4939] cursor-pointer"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">Eco-Certified Only</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5D913B]"></div>
                  </label>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">With Virtual Tour</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#5D913B]"></div>
                  </label>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Proximity (km)</h3>
                <div className="px-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="50" 
                    step="1" 
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2D4939]" 
                  />
                </div>
                <div className="flex justify-between mt-2 text-gray-600">
                  <span>0 km</span>
                  <span>50 km</span>
                </div>
              </div>
              
              <button className="w-full bg-[#2D4939] text-white py-3 rounded-lg hover:bg-opacity-90 transition-all">
                Apply Filters
              </button>
            </div>
          )}

          {/* Map View */}
          {showMap && (
            <div className="flex-1 h-[500px] bg-gray-200 rounded-lg relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Interactive Map would be displayed here
              </div>
            </div>
          )}

          {/* Property Listings */}
          {!showMap && (
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <div className="h-48 w-full bg-gray-300 relative">
                        {/* Using a placeholder div instead of real images for this code sample */}
                        <img
  src={property.image}
  alt={property.title}
  className="absolute inset-0 h-full w-full object-cover"
/>

                      </div>
                      
                      {/* Property Tags */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {property.tags.includes('new') && (
                          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                            🏷 New
                          </span>
                        )}
                        {property.tags.includes('eco-verified') && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            🌱 Eco-Verified
                          </span>
                        )}
                        {property.tags.includes('hot-deal') && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                            🔥 Hot Deal
                          </span>
                        )}
                      </div>
                      
                      {/* Favorite Button */}
                      <button 
                        className="absolute top-4 right-4 text-white" 
                        onClick={() => toggleFavorite(property.id)}
                      >
                        {favorites[property.id] ? (
                          <FaHeart className="text-red-500 text-xl" />
                        ) : (
                          <FaRegHeart className="text-xl" />
                        )}
                      </button>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{property.title}</h3>
                      <p className="text-gray-600 mb-2 flex items-center">
                        <FiMapPin className="mr-1" /> {property.address}
                      </p>
                      <div className="text-2xl font-bold text-[#E37019] mb-3">
                        ${formatPrice(property.price)}
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <span className="flex items-center mr-3">
                          <FaBed className="mr-1" /> {property.beds} Beds
                        </span>
                        <span className="flex items-center mr-3">
                          <FaBath className="mr-1" /> {property.baths} Baths
                        </span>
                        <span className="flex items-center">
                          <FaRulerCombined className="mr-1" /> {property.area} m²
                        </span>
                      </div>
                      <Link href={`/property/${property.id}`} className="block w-full text-center bg-[#5D913B] hover:bg-[#2D4939] text-white py-2 rounded transition-colors">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Don't miss out on eco-listings in your city 🌍
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and get notified about new properties that match your criteria.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5D913B]" 
            />
            <button className="bg-[#5D913B] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Mobile Bottom Sticky Panel */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-500">Starting from</span>
          <div className="text-lg font-bold text-[#E37019]">$175,000</div>
        </div>
        <div className="flex space-x-3">
          <button className="p-2 rounded-full border border-gray-300">
            <FaRegHeart className="text-xl text-gray-600" />
          </button>
          <button className="bg-[#E37019] text-white px-6 py-2 rounded-lg">
            Contact Seller
          </button>
        </div>
      </div>

      {/* Footer
      <footer className="bg-[#2D4939] text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Piscal</span>
              <span className="text-[#E37019]">+</span>
            </div>
            <p className="text-gray-300 mb-4">
              Find your eco-smart home with Piscal+. Verified listings. Transparent pricing. Eco rewards.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/buy" className="text-gray-300 hover:text-white">Buy</Link></li>
              <li><Link href="/rent" className="text-gray-300 hover:text-white">Rent</Link></li>
              <li><Link href="/eco-rewards" className="text-gray-300 hover:text-white">EcoRewards</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.91c-.8.36-1.66.6-2.55.71a4.45 4.45 0 0 0 1.95-2.45c-.86.51-1.82.88-2.83 1.08a4.45 4.45 0 0 0-7.7 3.04 4.3 4.3 0 0 0 .11 1.01A12.63 12.63 0 0 1 1.67 3.5a4.45 4.45 0 0 0 1.37 5.94A4.4 4.4 0 0 1 1 8.7v.05a4.45 4.45 0 0 0 3.56 4.36c-.65.18-1.33.2-2 .07a4.45 4.45 0 0 0 4.15 3.09 8.92 8.92 0 0 1-5.52 1.9A9.1 9.1 0 0 1 0 18.1a12.58 12.58 0 0 0 6.82 2c8.18 0 12.66-6.78 12.66-12.66 0-.19 0-.38-.01-.57a9.02 9.02 0 0 0 2.22-2.3l.01-.04z"></path>
                </svg>
              </a>
              </div>
              </div>
              </div>
              </footer>
              </div> */}
              </div>
              );
            }
            

