'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaFingerprint, FaLeaf } from 'react-icons/fa';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleContinue = (e) => {
    e.preventDefault();

    if (email === 'user@gmail.com' && password === 'user123') {
      router.push('/userDashboard');
    } else if (email === 'admin@gmail.com' && password === 'admin123') {
      router.push('/AdminDashboard');
    } else if (email === 'seller@gmail.com' && password === 'seller123') {
      router.push('/SellerDashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen text-green-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        <div className="bg-gray-200 p-8 rounded-3xl border">
          <div className="flex items-center mb-6">
            <FaLeaf className="text-green-500 text-2xl mr-2" />
            <h2 className="text-xl font-bold">EcoPoints</h2>
          </div>
          <h1 className="text-2xl font-bold mb-2">Sign In</h1>
          <p className="text-gray-800 mb-6">Choose your role to continue</p>

          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg mb-8 flex items-center justify-center"
          >
            Continue
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-lg mb-4 w-64 h-64 flex items-center justify-center">
            <div className="relative">
              <div className="bg-gray-200 w-56 h-56 flex items-center justify-center">
                <svg viewBox="0 0 100 100" width="200" height="200">
                  <rect x="10" y="10" width="80" height="80" fill="none" stroke="black" strokeWidth="2" />
                  <path d="M20 20h20v20h-20z M60 20h20v20h-20z M20 60h20v20h-20z" fill="black" />
                  <path d="M50 50h10v10h-10z M70 70h10v10h-10z M40 40h10v10h-10z" fill="black" />
                  <circle cx="50" cy="50" r="5" fill="green" />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <FaFingerprint className="text-green-500 text-2xl" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 mb-2">Scan QR code for Login</p>
          <h2 className="text-2xl font-bold mb-6">Secure 2FA Login!</h2>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
