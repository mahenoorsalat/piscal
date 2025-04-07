"use client"

import React, { useState } from 'react';
import { FaFingerprint } from 'react-icons/fa';
import { FaLeaf } from 'react-icons/fa';

function SignUp() {
  
  // Declare state for email, password, and confirm password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleContinue = (e) => {
    e.preventDefault();
    // Navigate to password step or authenticate
    // For demo purposes, navigate to homepage
    navigate('/homepage');
  };

  const handleGoogleSignUp = () => {
    // Implement Google sign in
    navigate('/homepage');
  };

  const handleAppleSignUp = () => {
    // Implement Apple sign in
    navigate('/homepage');
  };

  return (
    <div className="min-h-screen text-green-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8">
        {/* Left side - Sign in form */}
        <div className="bg-gray-200 p-8 rounded-3xl border">
          <div className="flex items-center mb-4">
            <FaLeaf className="text-green-500 text-2xl mr-2" />
            <h2 className="text-xl font-bold">EcoPoints</h2>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Create your account</h1>
          <p className="text-gray-800 mb-4">Access the EcoPoints app to earn rewards with a single account</p>

          <div className="mb-4">
            <label htmlFor="Username" className="block text-sm mb-2">Username</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Username"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-sm mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
            />
          </div>

          <button 
            onClick={handleContinue}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg mb-8 flex items-center justify-center"
          >
            Continue
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="px-4 text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          <button 
            onClick={handleGoogleSignUp}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg mb-4 flex items-center justify-between"
          >
            <span>Sign Up With Google</span>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </button>

          <button 
            onClick={handleAppleSignUp}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg flex items-center justify-between"
          >
            <span>Sign Up With Apple</span>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M17.6 13.8c-.2-.6-.3-1.2-.3-1.8 0-2.4 1.9-4.3 4.3-4.3 0 0 .1 1.4-.9 2.8-1 1.3-2 1.3-2 1.3-.1 1.3.9 2.9 2 3.8-1.1 1.5-2 2.9-3.5 2.9-1.3 0-1.7-.7-3.2-.7-1.5 0-2 .7-3.2.7-1.5 0-2.7-1.6-3.7-3.1-1.4-2.1-2.4-6-.9-8.6.9-1.5 2.4-2.3 3.9-2.3 1.3 0 2.4.7 3.2.7.8 0 2.3-.8 3.8-.7 1.6 0 3 1 3.8 2.6-4.3 2.3-3.6 7.6.7 9.1z" />
            </svg>
          </button>

          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => (window.location.href = '/SignIn')}
              className="text-green-500 hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>

        {/* Right side - QR code */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-lg mb-4 w-64 h-64 flex items-center justify-center">
            <div className="relative">
              <div className="bg-gray-200 w-56 h-56 flex items-center justify-center">
                {/* QR Code placeholder - in a real app, you'd use a QR code library */}
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
          
          <div className="flex items-center bg-gray-300 rounded-full px-4 py-2">
            <FaFingerprint className="text-green-500 mr-2" />
            <span className="text-sm">https://www.ecopoints.com</span>
          </div>
          
          <p className="mt-6 text-xs text-gray-400 text-center max-w-md">
            A safe and transparent platform for tracking eco-friendly activities, with a high level of security and legal protection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
