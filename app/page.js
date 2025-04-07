"use client"

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaSearch, FaApple, FaGooglePlay, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Piscal+ | Find Your Dream Home & Make an Impact</title>
        <meta name="description" content="Earn rewards by walking, recycling, or helping the planet — and use them toward property savings!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main>
{/* 2. Hero Section */}
<section className="relative h-[600px]">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-10"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-[#2D4939]/70 to-transparent z-10"></div>

  {/* Background Image */}
  <div className="relative h-full w-full">
    <Image 
      src="/bg.jpg" 
      alt="Urban nature blend with person walking in green neighborhood" 
      layout="fill"
      objectFit="cover"
      priority
    />
  </div>

  {/* Content */}
  <div className="container mx-auto absolute top-0 left-0 right-0 bottom-0 z-20 flex flex-col justify-center items-center px-6">
    <div className="max-w-xl text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Find Your Dream Home & Make an Impact 🌱
      </h1>
      <p className="text-gray-200 text-lg mb-8">
        Earn rewards by walking, recycling, or helping the planet — and use them toward property savings!
      </p>
    </div>

    {/* Search Form */}
    <div className="max-w-3xl">
      <div className="bg-white p-2 rounded-lg flex flex-wrap">
        
        {/* Search Input */}
        <input 
          type="text" 
          placeholder="Search by city, postal code, or property type" 
          className="flex-grow px-4 py-2 focus:outline-none rounded-l"
        />

        {/* Price Range Select */}
        <div className="border-l border-gray-300 px-3 py-2">
          <select className="focus:outline-none">
            <option>Price Range</option>
            <option>$100k - $200k</option>
            <option>$200k - $300k</option>
            <option>$300k+</option>
          </select>
        </div>

        {/* Bedrooms Select */}
        <div className="border-l border-gray-300 px-3 py-2">
          <select className="focus:outline-none">
            <option>Bedrooms</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>
        </div>

        {/* Property Type Select */}
        <div className="border-l border-gray-300 px-3 py-2">
          <select className="focus:outline-none">
            <option>Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Condo</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-[#E37019] text-white px-6 py-2 rounded-r flex items-center">
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </div>
  </div>
</section>



        {/* 3. Key Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-[#5D913B]/10 w-20 h-20 mx-auto flex items-center justify-center mb-4">
                  <span className="text-3xl text-[#5D913B]">🏡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2D4939]">Eco-Friendly Living</h3>
                <p className="text-gray-600">Find green homes and neighborhoods that reward your choices.</p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-[#5D913B]/10 w-20 h-20 mx-auto flex items-center justify-center mb-4">
                  <span className="text-3xl text-[#5D913B]">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2D4939]">Challenges with Rewards</h3>
                <p className="text-gray-600">Track steps, eco-actions, and earn points toward rent or mortgage.</p>
              </div>
              <div className="text-center">
                <div className="rounded-full bg-[#5D913B]/10 w-20 h-20 mx-auto flex items-center justify-center mb-4">
                  <span className="text-3xl text-[#5D913B]">❤️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2D4939]">Give Back with Impact</h3>
                <p className="text-gray-600">Convert points to donations for local initiatives and NPOs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Featured Properties */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2D4939] mb-8 text-center">Explore Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Property Card 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image 
                    src="/home1.jpg" 
                    alt="Modern eco-friendly house" 
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    Eco-friendly
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">$425,000</h3>
                    <span className="text-gray-600 text-sm">Portland, OR</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-3">3 beds</span>
                    <span>2 baths</span>
                  </div>
                  <button className="w-full bg-[#E37019] text-white py-2 rounded hover:bg-orange-600 transition">
                    View Listing
                  </button>
                </div>
              </div>

              {/* Property Card 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image 
                    src="/home2.jpg" 
                    alt="Suburban eco home" 
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#5D913B] text-white px-2 py-1 rounded-full text-xs">
                    Challenge-friendly
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">$375,000</h3>
                    <span className="text-gray-600 text-sm">Austin, TX</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-3">2 beds</span>
                    <span>2 baths</span>
                  </div>
                  <button className="w-full bg-[#E37019] text-white py-2 rounded hover:bg-orange-600 transition">
                    View Listing
                  </button>
                </div>
              </div>

              {/* Property Card 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image 
                    src="/home3.jpg" 
                    alt="Urban apartment with green features" 
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    Eco-friendly
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">$299,000</h3>
                    <span className="text-gray-600 text-sm">Chicago, IL</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <span className="mr-3">1 bed</span>
                    <span>1 bath</span>
                  </div>
                  <button className="w-full bg-[#E37019] text-white py-2 rounded hover:bg-orange-600 transition">
                    View Listing
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-white border border-[#2D4939] text-[#2D4939] px-6 py-2 rounded-full hover:bg-[#2D4939] hover:text-white transition">
                View All Properties
              </button>
            </div>
          </div>
        </section>

        {/* 5. Active Challenges */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2D4939] mb-8 text-center">Join a Challenge, Earn Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Challenge Card 1 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🎽</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Walk 10,000 steps today</h3>
                <p className="text-gray-600 text-center mb-4">Track your steps and earn points for each milestone reached!</p>
                <div className="bg-gray-100 h-2 rounded-full mb-2">
                  <div className="bg-[#5D913B] h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-sm text-gray-600 text-center mb-4">7,500 steps completed</p>
                <button className="w-full bg-[#5D913B] text-white py-2 rounded hover:bg-green-700 transition">
                  Join Now
                </button>
              </div>

              {/* Challenge Card 2 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">🚲</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Bike to work week</h3>
                <p className="text-gray-600 text-center mb-4">Ditch the car! Earn 500 points for every commute by bicycle.</p>
                <div className="bg-gray-100 h-2 rounded-full mb-2">
                  <div className="bg-[#5D913B] h-2 rounded-full w-1/2"></div>
                </div>
                <p className="text-sm text-gray-600 text-center mb-4">2 days completed</p>
                <button className="w-full bg-[#5D913B] text-white py-2 rounded hover:bg-green-700 transition">
                  Join Now
                </button>
              </div>

              {/* Challenge Card 3 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl">♻️</span>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Recycling champion</h3>
                <p className="text-gray-600 text-center mb-4">Log your recycling daily and compete for bonus points!</p>
                <div className="text-sm text-center mb-2 text-[#E37019] font-bold">
                  Starts in 2 days
                </div>
                <p className="text-sm text-gray-600 text-center mb-4">235 participants registered</p>
                <button className="w-full bg-[#5D913B] text-white py-2 rounded hover:bg-green-700 transition">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Points & Rewards Marketplace */}
        <section className="py-16 bg-[#F7F7F7]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2D4939] mb-8 text-center">Spend Your Points</h2>
            
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button className="py-2 px-4 bg-[#2D4939] text-white rounded-l-lg">💸 Cashback</button>
                <button className="py-2 px-4 bg-white text-[#2D4939]">🎁 Gifts</button>
                <button className="py-2 px-4 bg-white text-[#2D4939]">🎟 Subscriptions</button>
                <button className="py-2 px-4 bg-white text-[#2D4939] rounded-r-lg">💚 Donations</button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Reward Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image 
                    src="/cash1.jpg" 
                    alt="Cashback reward" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">$50 Property Credit</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#5D913B] font-bold">2,500 points</span>
                    <button className="bg-[#E37019] text-white px-4 py-1 rounded text-sm">Redeem</button>
                  </div>
                </div>
              </div>
              
              {/* Reward Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image 
                    src="/cash2.jpg" 
                    alt="Cashback reward" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">$100 Property Credit</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#5D913B] font-bold">5,000 points</span>
                    <button className="bg-[#E37019] text-white px-4 py-1 rounded text-sm">Redeem</button>
                  </div>
                </div>
              </div>
              
              {/* Reward Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image 
                    src="/cash3.jpg" 
                    alt="Cashback reward" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">$200 Property Credit</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#5D913B] font-bold">10,000 points</span>
                    <button className="bg-[#E37019] text-white px-4 py-1 rounded text-sm">Redeem</button>
                  </div>
                </div>
              </div>
              
              {/* Reward Card 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-40">
                  <Image 
                    src="/cash1.jpg" 
                    alt="Cashback reward" 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">$500 Property Credit</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-[#5D913B] font-bold">25,000 points</span>
                    <button className="bg-[#E37019] text-white px-4 py-1 rounded text-sm">Redeem</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Donation & Eco Impact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2D4939] mb-8 text-center">Your Points Can Change Lives</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96">
                <Image 
                  src="/map.jpg" 
                  alt="Map of Africa highlighting eco-NPOs" 
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#2D4939]">Our Impact Partners</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-gray-100 p-3 rounded-lg w-24 h-12 flex items-center justify-center">NGO 1</div>
                    <div className="bg-gray-100 p-3 rounded-lg w-24 h-12 flex items-center justify-center">NGO 2</div>
                    <div className="bg-gray-100 p-3 rounded-lg w-24 h-12 flex items-center justify-center">NGO 3</div>
                    <div className="bg-gray-100 p-3 rounded-lg w-24 h-12 flex items-center justify-center">NGO 4</div>
                    <div className="bg-gray-100 p-3 rounded-lg w-24 h-12 flex items-center justify-center">NGO 5</div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-[#2D4939]">Total Impact</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-[#EDF5EC] p-4 rounded-lg">
                      <div className="text-3xl font-bold text-[#5D913B]">$125K</div>
                      <div className="text-sm">Donated</div>
                    </div>
                    <div className="bg-[#EDF5EC] p-4 rounded-lg">
                      <div className="text-3xl font-bold text-[#5D913B]">75</div>
                      <div className="text-sm">Projects</div>
                    </div>
                    <div className="bg-[#EDF5EC] p-4 rounded-lg">
                      <div className="text-3xl font-bold text-[#5D913B]">12K</div>
                      <div className="text-sm">Participants</div>
                    </div>
                  </div>
                </div>
                
                <button className="bg-[#E37019] text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition flex items-center justify-center">
                  Donate My Points
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Testimonials */}
        <section className="py-16 bg-[#EDF5EC]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#2D4939] mb-8 text-center">What Our Users Are Saying</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src='https://i.pravatar.cc/150?img=5' className="w-12 h-12 bg-gray-300 rounded-full mr-4"></img>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">Canada</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-gray-600">"I never thought my daily walks would help me save for a house! I've earned over $1,200 in property credits in just 6 months."</p>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                <img src='https://i.pravatar.cc/150?img=3' className="w-12 h-12 bg-gray-300 rounded-full mr-4"></img>
                <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-gray-600">United States</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-gray-600">"The challenge system makes sustainability fun. My kids love tracking our family recycling efforts and watching the points add up."</p>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                <img src='https://i.pravatar.cc/150?img5' className="w-12 h-12 bg-gray-300 rounded-full mr-4"></img>
                <div>
                    <h4 className="font-bold">Priya Patel</h4>
                    <p className="text-sm text-gray-600">United Kingdom</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                </div>
                <p className="text-gray-600">"Donating my points to help build eco-schools in Africa gives me so much joy. Thank you Piscal+ for connecting us to these opportunities."</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Mobile App Promotion */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#2D4939] mb-4">Track. Earn. Win. Anywhere.</h2>
                <p className="text-gray-600 mb-8">Download our app and sync with your watch or phone to earn real rewards for daily action.</p>
                <div className="flex space-x-4">
                  <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center">
                    <FaApple className="mr-2" /> App Store
                  </button>
                  <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center">
                    <FaGooglePlay className="mr-2" /> Google Play
                  </button>
                </div>
              </div>
              <div className="relative h-96">
                <Image 
                  src="/images/mobile-app.png" 
                  alt="Piscal+ mobile app interface" 
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 10. Newsletter */}
        <section className="py-12 bg-[#5D913B]">
          <div className="container mx-auto px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h2>
              <p className="text-gray-100 mb-6">Get updates on new properties, challenges, and eco-initiatives.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-l focus:outline-none"
                />
                <button className="bg-[#2D4939] text-white px-6 py-3 rounded-r hover:bg-green-900 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>


                </div>
              
  );
}
