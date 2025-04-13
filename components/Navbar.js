"use client"
import { useState } from 'react';
import { Search, Filter, ChevronRight ,Facebook, Instagram, Twitter, Linkedin, Youtube, Music } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa'; // Font Awesome Pinterest icon

const Navbar = () => {
    return (
   
     <header className="border-b border-gray-200 py-4 px-6">
     <div className="flex items-center justify-between">
       <div className="flex items-center space-x-2">
         <div className="flex items-center">
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
           <span className="text-2xl font-bold text-green-900 ml-2">Piscal<span className="text-orange-500">+</span></span>
         </div>
       </div>
       
       <nav className="hidden md:flex space-x-6">
         <a href="#" className="text-gray-700 hover:text-green-800">To research</a>
         <a href="#" className="text-gray-700 hover:text-green-800">Buy</a>
         <a href="#" className="text-gray-700 hover:text-green-800">Sell</a>
         <a href="#" className="text-gray-700 hover:text-green-800">Blog</a>
         <a href="#" className="text-gray-700 hover:text-green-800">Companies</a>
         <a href="#" className="text-gray-700 hover:text-green-800">Rates</a>
       </nav>
       
       <div className="flex items-center space-x-4">
         <a href="#" className="text-sm text-gray-700">Contact us</a>
         <a href="#" className="text-sm text-gray-700">Careers</a>
         <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm">Log in</a>
       </div>
     </div>
   </header>
    );
}

export default Navbar;
