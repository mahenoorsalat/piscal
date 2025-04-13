"use client"
import { useState } from 'react';
import { Search, Filter, ChevronRight ,Facebook, Instagram, Twitter, Linkedin, Youtube, Music } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa'; // Font Awesome Pinterest icon

const Footer = () => {
  return (
    <div>
         {/* Stats & Footer section */}
         <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <ol className="list-decimal pl-6 space-y-4 mb-12">
            <li className="text-sm text-gray-600">
              Total savings made by sellers who have sold on piscal-plus.com since our inception, based on an average commission of 5%, including applicable taxes. As of November 21, 2022.
            </li>
            <li className="text-sm text-gray-600">
              According to a study on the sales experience of 521 customers who sold with Piscal+, conducted via a web survey by Ad Hoc Research, 2022.
            </li>
            <li className="text-sm text-gray-600">
              Most appreciated service by customers (8.6 out of 10 overall rating) among all banners according to Protégez-Vous in 2023, according to a survey carried out with 620 respondents.
            </li>
          </ol>

          <hr className="border-gray-300 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-8">
                <div className="relative">
                  <div className="w-6 h-6 bg-orange-500 rotate-45 absolute -top-3"></div>
                  <div className="w-6 h-6 rounded-md border-2 border-white bg-white relative z-10 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="w-1 h-1 bg-green-600 rounded-sm"></div>
                      <div className="w-1 h-1 bg-green-600 rounded-sm"></div>
                      <div className="w-1 h-1 bg-green-600 rounded-sm"></div>
                      <div className="w-1 h-1 bg-green-600 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <span className="text-xl font-bold text-green-900 ml-2">Piscal<span className="text-orange-500">+</span></span>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 uppercase">Selling a property</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-800">How does it work?</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Rates</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Payment options</a></li>
              </ul>
              
              <h3 className="font-bold mt-8 mb-4 uppercase">Buying a property</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-800">Why buy on Piscal+.com?</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">How does it work?</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Tools for searching for a property</a></li>
              </ul>
              
              <h3 className="font-bold mt-8 mb-4 uppercase">Rent a property</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-800">Advertise for free</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 uppercase">Blog</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-800">All about the sale</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">All about buying</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Real estate news</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Homemade passion</a></li>
              </ul>
              
              <h3 className="font-bold mt-8 mb-4 uppercase">About</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-800">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Career</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Advertising on Piscal+.com</a></li>
              </ul>
              
              <h3 className="font-bold mt-8 mb-4 uppercase">Partners</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-800">Home insurance</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Car insurance</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Mortgages</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-800">Renovation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4 uppercase">Contact us</h3>
              <div className="flex gap-4 mb-4">
                <button className="flex items-center justify-center bg-white rounded-full p-3 border border-gray-300 hover:bg-gray-50">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </button>
                <button className="flex-1 bg-white rounded-full p-3 border border-gray-300 text-left hover:bg-gray-50">
                  1-866-387-7677
                </button>
              </div>
              <button className="w-full bg-white rounded-full p-3 border border-gray-300 mb-8 text-left hover:bg-gray-50">
                E-mail
              </button>
              
              <h3 className="font-bold mb-4 uppercase">Follow us</h3>
              <div className="flex gap-2 mb-8">
                <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                <FaPinterest size={24} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                  <Youtube size={20} />
                </a>
                <a href="#" className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                  <Music size={20} />
                </a>
              </div>
              
              <h3 className="font-bold mb-4 uppercase">Download the app</h3>
              <div className="space-y-2">
                <a href="#" className="block w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800">
                  Download on the App Store
                </a>
                <a href="#" className="block w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800">
                  Get it on Google Play
                </a>
              </div>
            </div>
          </div>
          
          <hr className="border-gray-300 mb-8" />
          
          <div className="text-sm text-gray-600 mb-4">
            Copyright © 2025 Piscal+. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#" className="text-gray-700 hover:underline">Website Usage Policy</a>
            <a href="#" className="text-gray-700 hover:underline">Privacy Policy</a>
            <a href="#" className="text-gray-700 hover:underline">Cookie Policy</a>
          </div>
          
          <div className="mt-8 text-xs text-gray-500 space-y-2">
            <p>The PISCAL+ trademark is owned by 4520094 Canada Inc., doing business as Piscal+.</p>
            <p>The small house logo is a registered trademark of the Fédération des caisses Desjardins du Québec, used under license.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
