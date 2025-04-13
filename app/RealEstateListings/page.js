"use client"

import React, { useState } from 'react';
import { Search, MapPin, Heart, Phone } from 'lucide-react';

export default function RealEstateListings() {
  const [filterPrice, setFilterPrice] = useState(500000);
  const [propertyType, setPropertyType] = useState("All");
  const [viewType, setViewType] = useState("grid");
  
  // Sample property data translated from French to English
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
  

  // Filter properties based on price and type
  const filteredProperties = properties.filter(property => {
    const matchesPrice = property.price <= filterPrice;
    const matchesType = propertyType === "All" || property.type === propertyType;
    return matchesPrice && matchesType;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header filters */}
      <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
        <div className="flex flex-row mb-4 items-center">
          <div className="flex-1">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search by city, MLS number..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex gap-2 ml-4">
            <button className="px-4 py-2 bg-green-100 text-green-800 rounded-md">Property type</button>
            <button className="px-4 py-2 bg-green-100 text-green-800 rounded-md">Price range</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md">More</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md">Reset filters</button>
          </div>
        </div>
        
        {/* Featured locations */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Featured Locations</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <div className="relative min-w-[150px] h-24 rounded-md overflow-hidden group">
              <img src="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600" alt="City view" className="w-full h-full object-cover" />
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-medium">Downtown</span>
              </div>
            </div>
            <div className="relative min-w-[150px] h-24 rounded-md overflow-hidden group">
              <img src="https://images.pexels.com/photos/130576/pexels-photo-130576.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Suburb view" className="w-full h-full object-cover" />
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-medium">Oak Hills</span>
              </div>
            </div>
            <div className="relative min-w-[150px] h-24 rounded-md overflow-hidden group">
              <img src="https://images.pexels.com/photos/16418617/pexels-photo-16418617/free-photo-of-the-sun-shines-through-the-trees-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Waterfront view" className="w-full h-full object-cover" />
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-medium">Riverside</span>
              </div>
            </div>
            <div className="relative min-w-[150px] h-24 rounded-md overflow-hidden group">
              <img src="https://images.pexels.com/photos/29083462/pexels-photo-29083462/free-photo-of-serene-pine-forest-with-sunlit-pathway.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Suburban view" className="w-full h-full object-cover" />
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-medium">Pinewood</span>
              </div>
            </div>
            <div className="relative min-w-[150px] h-24 rounded-md overflow-hidden group">
              <img src="https://images.pexels.com/photos/210288/pexels-photo-210288.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Rural view" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-medium">Lakeside</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-wrap">
        {/* Listings */}
        <div className="w-full lg:w-3/4 pr-0 lg:pr-6">
          {/* Filter bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">{filteredProperties.length}</span> properties available
            </div>
            <div className="flex items-center">
              <select 
                className="mr-2 border border-gray-300 rounded-md px-2 py-1 text-sm"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="All">All types</option>
                <option value="House">Houses</option>
                <option value="Condo">Condos</option>
                <option value="Land">Land</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-md">
                <button 
                  className={`px-2 py-1 ${viewType === 'grid' ? 'bg-gray-200' : 'bg-white'}`}
                  onClick={() => setViewType('grid')}
                >
                  <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-gray-600"></div>
                    <div className="w-1.5 h-1.5 bg-gray-600"></div>
                    <div className="w-1.5 h-1.5 bg-gray-600"></div>
                    <div className="w-1.5 h-1.5 bg-gray-600"></div>
                  </div>
                </button>
                <button 
                  className={`px-2 py-1 ${viewType === 'list' ? 'bg-gray-200' : 'bg-white'}`}
                  onClick={() => setViewType('list')}
                >
                  <div className="flex flex-col gap-0.5">
                    <div className="w-4 h-1 bg-gray-600"></div>
                    <div className="w-4 h-1 bg-gray-600"></div>
                    <div className="w-4 h-1 bg-gray-600"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Property grid */}
          <div className={`grid ${viewType === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-4`}>
            {filteredProperties.map(property => (
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
                  <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-sm">
                    <Heart className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">${property.price.toLocaleString()}</h3>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {property.type}
                    </div>
                  </div>
                  <div className="mb-2 flex items-start">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1 mt-0.5" />
                    <p className="text-gray-600 text-sm">{property.address}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{property.details}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
                        <Heart className="h-4 w-4 text-gray-500" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
                        <Phone className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                    <div>
                      <img src="/api/placeholder/80/20" alt="Agency logo" className="h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded-l-md">
                &laquo;
              </button>
              {[1, 2, 3, 4, 5].map(page => (
                <button 
                  key={page}
                  className={`px-3 py-2 border border-gray-300 ${page === 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-2 border border-gray-300 bg-white text-gray-700 rounded-r-md">
                &raquo;
              </button>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 mt-6 lg:mt-0">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex justify-between items-center">
              <img 
                src="/api/placeholder/120/40" 
                alt="Piscal+ Logo" 
                className="h-8" 
              />
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h3 className="font-bold text-lg mb-4">Questions about buying without an agent?</h3>
            <p className="text-gray-600 mb-4">Tell us when you want to visit!</p>
            
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                <Phone className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <button className="w-full bg-green-500 text-white py-2 rounded-md">
              Chat with an agent
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price range: Up to ${filterPrice.toLocaleString()}
              </label>
              <input 
                type="range" 
                min="100000" 
                max="1000000" 
                step="50000" 
                value={filterPrice}
                onChange={(e) => setFilterPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property type
              </label>
              <select 
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="All">All types</option>
                <option value="House">Houses</option>
                <option value="Condo">Condos</option>
                <option value="Land">Land</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bedrooms
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bathrooms
              </label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>
            
            <button className="w-full bg-blue-500 text-white py-2 rounded-md">
              Apply filters
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-bold text-lg mb-4">Sell with an experienced agent</h3>
            <div className="flex items-center mb-4">
              <img src="/api/placeholder/60/60" alt="Agent" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="font-medium">Contact our agents</p>
                <p className="text-sm text-gray-600">We're here to help!</p>
              </div>
            </div>
            <div className="relative">
              <img src="/api/placeholder/400/100" alt="Piscal+ promotion" className="w-full h-24 object-cover rounded-md" />
              <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-md transform rotate-6">
                NEW!
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logo at bottom for branding */}
      <div className="mt-8 flex justify-center">
        <div className="flex items-center">
          <div className="relative h-8 w-8 mr-1">
            <div className="absolute inset-0">
              <div className="w-8 h-4 bg-orange-500 transform rotate-45 origin-bottom-left"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-green-600 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-green-600 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-green-600 rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-green-600 rounded-sm"></div>
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold text-gray-800">Piscal<span className="text-orange-500">+</span></span>
        </div>
      </div>
    </div>
  );
}