"use client"

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      {/* 11. Footer */}
      <footer className="bg-[#2D4939] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🌍 About Piscal+</h3>
              <p className="text-gray-300">Making eco-friendly living rewarding, accessible, and impactful for everyone.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">🏠 Explore</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Properties</a></li>
                <li><a href="#" className="hover:text-white">Challenges</a></li>
                <li><a href="#" className="hover:text-white">Rewards</a></li>
                <li><a href="#" className="hover:text-white">Donate</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">📱 Follow Us</h3>
              <div className="flex space-x-4">
                {/* LinkedIn SVG */}
                <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.6v2.1h.05c.5-.95 1.7-2.1 3.5-2.1 3.75 0 4.45 2.4 4.45 5.55V24h-4v-8.25c0-1.95-.05-4.45-2.7-4.45-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
                  </svg>
                </a>
                {/* Facebook SVG */}
                <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0H1.326C.593 0 0 .593 0 1.326V22.67c0 .733.593 1.326 1.326 1.326H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.326V1.326C24 .593 23.406 0 22.675 0z" />
                  </svg>
                </a>
                {/* Instagram SVG */}
                <a href="#" className="hover:text-gray-300" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.847s-.012 3.581-.07 4.847c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.628 2.163 15.248 2.163 12s.012-3.581.07-4.847c.062-1.366.337-2.633 1.312-3.608C4.52 2.5 5.787 2.225 7.153 2.163 8.419 2.105 8.8 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.77.13 4.602.396 3.6 1.398c-1.002 1.002-1.268 2.17-1.326 3.452C2.014 6.668 2 7.077 2 12c0 4.923.014 5.332.072 6.613.058 1.282.324 2.45 1.326 3.452 1.002 1.002 2.17 1.268 3.452 1.326C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.282-.058 2.45-.324 3.452-1.326 1.002-1.002 1.268-2.17 1.326-3.452.058-1.281.072-1.69.072-6.613 0-4.923-.014-5.332-.072-6.613-.058-1.282-.324-2.45-1.326-3.452-1.002-1.002-2.17-1.268-3.452-1.326C15.668.014 15.259 0 12 0zM12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4.005 4.005 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
