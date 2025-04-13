"use client"

import React, { useState } from 'react';
import { Search, X, Plus, Minus, Home } from 'lucide-react';

export default function RealEstateMapView() {
  const [currentView, setCurrentView] = useState('map');
  const [priceFilter, setPriceFilter] = useState(475000);
  const [showFilters, setShowFilters] = useState(true);
  
  const properties = [
    {
      id: 1,
      price: 190000,
      address: "123 Main St, Riverside",
      details: "3 bedrooms • 1 bathroom • 1200 sq ft",
      type: "House",
      isNew: true,
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      price: 285000,
      address: "456 Oak Ave, Pinewood",
      details: "4 bedrooms • 2 bathrooms • 1800 sq ft",
      type: "House",
      isNew: true,
      image: "https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      price: 430000,
      address: "789 Elm St, Lakeside",
      details: "5 bedrooms • 3 bathrooms • 2500 sq ft",
      type: "House",
      isNew: false,
      image: "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      price: 165000,
      address: "321 Pine Rd, Mountainview",
      details: "2 bedrooms • 1 bathroom • 950 sq ft",
      type: "Condo",
      isNew: false,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      price: 540000,
      address: "654 Cedar Ln, Hillcrest",
      details: "6 bedrooms • 4 bathrooms • 3200 sq ft",
      type: "House",
      isNew: true,
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      price: 375000,
      address: "987 Birch Blvd, Valleydale",
      details: "4 bedrooms • 2 bathrooms • 2100 sq ft",
      type: "House",
      isNew: false,
      image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 7,
      price: 490000,
      address: "159 Maple Dr, Sunnyside",
      details: "5 bedrooms • 3 bathrooms • 2800 sq ft",
      type: "House",
      isNew: true,
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      price: 210000,
      address: "753 Spruce St, Brookside",
      details: "3 bedrooms • 1 bathroom • 1350 sq ft",
      type: "Condo",
      isNew: false,
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  // Filter properties based on price
  const filteredProperties = properties.filter(property => property.price <= priceFilter);

  // Mock coordinates for properties on map
  const mapCoordinates = [
    { id: 1, lat: 40, lng: 30, count: 6 },
    { id: 2, lat: 35, lng: 35, count: 3 },
    { id: 3, lat: 45, lng: 25, count: 9 },
    { id: 4, lat: 42, lng: 40, count: 4 },
    { id: 5, lat: 38, lng: 38, count: 2 },
    { id: 6, lat: 50, lng: 30, count: 5 },
    { id: 7, lat: 48, lng: 42, count: 7 },
    { id: 8, lat: 43, lng: 33, count: 8 },
    { id: 9, lat: 46, lng: 36, count: 11 },
    { id: 10, lat: 39, lng: 29, count: 14 },
    { id: 11, lat: 52, lng: 40, count: 3 },
    { id: 12, lat: 44, lng: 39, count: 2 },
    { id: 13, lat: 41, lng: 26, count: 6 },
    { id: 14, lat: 37, lng: 32, count: 4 },
    { id: 15, lat: 53, lng: 28, count: 7 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center">
            {/* Logo */}
           
            
            {/* Toggle buttons */}
            <div className="border border-gray-300 rounded-md inline-flex mr-4">
              <button 
                className={`px-4 py-1 text-sm ${currentView === 'sell' ? 'bg-gray-200' : 'bg-white'}`}
                onClick={() => setCurrentView('sell')}
              >
                FOR SALE
              </button>
              <button 
                className={`px-4 py-1 text-sm ${currentView === 'rent' ? 'bg-gray-200' : 'bg-white'}`}
                onClick={() => setCurrentView('rent')}
              >
                FOR RENT
              </button>
              <button 
                className={`px-4 py-1 text-sm ${currentView === 'sold' ? 'bg-gray-200' : 'bg-white'}`}
                onClick={() => setCurrentView('sold')}
              >
                SOLD
              </button>
            </div>
            
            {/* Search bar */}
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Region, city, street, phone number"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            {/* Filter buttons */}
            <div className="flex ml-2 space-x-2">
              <button className="px-3 py-2 text-sm bg-green-100 text-green-800 rounded-md">
                All properties
              </button>
              <button className="px-3 py-2 text-sm bg-green-100 text-green-800 rounded-md">
                New properties
              </button>
              <div className="relative">
                <button className="px-3 py-2 text-sm border border-gray-300 rounded-md bg-white inline-flex items-center">
                  Price <span className="ml-1">▼</span>
                </button>
              </div>
              <div className="relative">
                <button className="px-3 py-2 text-sm border border-gray-300 rounded-md bg-white inline-flex items-center">
                  Property type <span className="ml-1">▼</span>
                </button>
              </div>
              <div className="relative">
                <button className="px-3 py-2 text-sm border border-gray-300 rounded-md bg-white inline-flex items-center">
                  Filters <span className="ml-1">▼</span>
                </button>
              </div>
              <button className="px-3 py-2 text-sm bg-gray-800 text-white rounded-md flex items-center">
                Update <div className="ml-1 w-4 h-4 rounded-full bg-white"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Active filters */}
      {showFilters && (
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-600">Your criteria (1)</span>
                <div className="mt-2 inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm">
                  ${priceFilter.toLocaleString()} or less
                  <button 
                    className="ml-1 text-green-600"
                    onClick={() => {
                      setPriceFilter(1000000);
                      setShowFilters(false);
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
              <button 
                className="text-sm text-gray-600 underline"
                onClick={() => setShowFilters(false)}
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Results count and view toggle */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-green-600 font-semibold">344 listings found</span>
          <div className="flex space-x-2">
            <button 
              className={`p-2 border ${currentView === 'list' ? 'bg-gray-200' : 'bg-white'}`}
              onClick={() => setCurrentView('list')}
            >
              <div className="flex flex-col space-y-1">
                <div className="w-4 h-0.5 bg-gray-500"></div>
                <div className="w-4 h-0.5 bg-gray-500"></div>
                <div className="w-4 h-0.5 bg-gray-500"></div>
              </div>
            </button>
            <button 
              className={`p-2 border ${currentView === 'map' ? 'bg-gray-200' : 'bg-white'}`}
              onClick={() => setCurrentView('map')}
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="w-2 h-2 bg-gray-500"></div>
                <div className="w-2 h-2 bg-gray-500"></div>
                <div className="w-2 h-2 bg-gray-500"></div>
                <div className="w-2 h-2 bg-gray-500"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Map view */}
      <div className="container mx-auto px-4 pb-6">
        <div className="relative border rounded-md overflow-hidden" style={{ height: '500px' }}>
          {/* Map */}
          <div className="absolute inset-0 bg-gray-200">
            <div style={{ 
              width: '100%', 
              height: '100%', 
              background: 'url(https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-73.9,45.5,8/800x500?access_token=pk.placeholder) center/cover'
            }}></div>
            
            {/* Map markers */}
            {mapCoordinates.map((coord) => (
              <div 
                key={coord.id} 
                className="absolute flex items-center justify-center"
                style={{ 
                  left: `${coord.lng}%`, 
                  top: `${coord.lat}%`, 
                  transform: 'translate(-50%, -50%)' 
                }}
              >
                <div className="bg-green-500 text-white text-xs font-bold rounded-md w-6 h-6 flex items-center justify-center shadow-md">
                  {coord.count}
                </div>
              </div>
            ))}
            
            {/* Home markers */}
            <div 
              className="absolute flex items-center justify-center"
              style={{ left: '32%', top: '47%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="bg-white rounded-full p-1 shadow-md">
                <Home className="h-5 w-5 text-green-600" />
              </div>
            </div>
            
            <div 
              className="absolute flex items-center justify-center"
              style={{ left: '48%', top: '35%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="bg-white rounded-full p-1 shadow-md">
                <Home className="h-5 w-5 text-green-600" />
              </div>
            </div>
            
            {/* Map controls */}
            <div className="absolute left-2 top-2 flex flex-col space-y-1">
              <button className="bg-white w-8 h-8 rounded-md shadow flex items-center justify-center">
                <Plus size={18} />
              </button>
              <button className="bg-white w-8 h-8 rounded-md shadow flex items-center justify-center">
                <Minus size={18} />
              </button>
            </div>
            
            {/* Attribution */}
            <div className="absolute right-1 bottom-1 text-xs text-gray-500 bg-white bg-opacity-70 px-1 rounded">
              Data © contributors of OpenStreetMap | Map © OPenMaps
            </div>
          </div>
        </div>
      </div>
      
      {/* Property listings */}
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.address} 
                  className="w-full h-48 object-cover"
                />
                {property.isNew && (
                  <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded">
                    NEW
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">${property.price.toLocaleString()}</h3>
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {property.type}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-1">{property.address}</p>
                <p className="text-sm text-gray-500">{property.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}