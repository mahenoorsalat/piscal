"use client"

import { FiMapPin, FiDollarSign, FiSearch } from 'react-icons/fi';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
                  {/* 1. Top Navigation Bar (Sticky) */}
                  <nav className="sticky top-0 z-50 bg-transparent text-black py-4 px-6">
                    <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
            <div className="flex items-center cursor-pointer">
              <span className="text-2xl font-bold text-[#2D4939]">Piscal</span>
              <span className="text-2xl font-bold text-[#E37019]">+</span>
            </div>
          </Link>
                      <div className="hidden md:flex items-center space-x-6">
                        <a href="/" className="hover:text-gray-300">Home</a>
                        <a href="/PropertyPage" className="hover:text-gray-300">Properties</a>
                        <a href="/ChallengesPage" className="hover:text-gray-300">Challenges</a>
                        <a href="/RewardsWalletPage" className="hover:text-gray-300">Rewards</a>
                        <a href="/DonationsPage" className="hover:text-gray-300">Donate</a>
                        <a href="/About" className="hover:text-gray-300">About Us</a>
                        <a href="/Contact" className="hover:text-gray-300">Contact</a>
                        <a href="/Search" className="hover:text-gray-300"><FiSearch /></a>
                        <a href="#" className="bg-[#E37019] hover:bg-orange-600 py-2 px-4 rounded-full">Login / Signup</a>
                      </div>
                      <div className="md:hidden">
                        <button className="text-white">☰</button>
                      </div>
                    </div>
                  </nav>
        </div>
    );
}

export default Navbar;
