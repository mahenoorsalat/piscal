"use client"

// pages/property/[id].js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShareAlt, FaFlag, FaBed, FaBath, FaRulerCombined, FaHome, FaCalendarAlt, FaCarAlt } from 'react-icons/fa';

export default function PropertyPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
// Mock property data
const property = {
    id: '12345',
    title: 'Charming 3-Bedroom Family Home in Downtown',
    address: '123 Maple Street, Downtown, City, 12345',
    price: '$750,000',
    images: [
      'https://picsum.photos/600/400?random=1',
      'https://picsum.photos/600/400?random=2',
      'https://picsum.photos/600/400?random=3',
      'https://picsum.photos/600/400?random=4',
      'https://picsum.photos/600/400?random=5',
    ],
    hasVirtualTour: true,
    details: {
      bedrooms: 3,
      bathrooms: 2.5,
      squareFeet: 2200,
      propertyType: 'Single-Family Home',
      yearBuilt: 2019,
      parking: '2-Car Garage',
    },
    description: 'This beautiful family home offers modern amenities while maintaining its classic charm. Recently renovated with high-end finishes throughout, this property boasts an open floor plan perfect for entertaining. The chef\'s kitchen features premium appliances and custom cabinetry, while large windows flood the space with natural light.',
    keyFeatures: [
      'Modern kitchen with stainless steel appliances',
      'Spacious backyard with landscaped garden',
      'Energy-efficient windows and insulation',
      'Proximity to schools, parks, and public transport',
      'Newly refinished hardwood floors',
      'Updated electrical and plumbing systems',
    ],
    neighborhood: {
      walkability: 85,
      amenities: ['Whole Foods (0.5 mi)', 'Downtown Park (0.3 mi)', 'Memorial Hospital (2.1 mi)'],
      schools: ['Lincoln Elementary (Rating: A)', 'Washington Middle School (Rating: A-)', 'Jefferson High School (Rating: B+)'],
    },
    similarProperties: [
      { id: '12346', image: 'https://picsum.photos/600/400?random=6', title: 'Modern Townhouse', price: '$685,000' },
      { id: '12347', image: 'https://picsum.photos/600/400?random=7', title: 'Cozy Bungalow', price: '$595,000' },
      { id: '12348', image: 'https://picsum.photos/600/400?random=8', title: 'Luxury Condo', price: '$825,000' },
      { id: '12349', image: 'https://picsum.photos/600/400?random=9', title: 'Spacious Loft', price: '$715,000' },
    ]
  };
  

  // Mortgage calculator state
  const [mortgageInfo, setMortgageInfo] = useState({
    price: 750000,
    downPayment: 150000,
    loanTerm: 30,
    interestRate: 4.5,
  });

  const calculateMortgage = () => {
    const principal = mortgageInfo.price - mortgageInfo.downPayment;
    const monthlyRate = mortgageInfo.interestRate / 100 / 12;
    const payments = mortgageInfo.loanTerm * 12;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);
    
    return monthlyPayment.toFixed(2);
  };

  const handleMortgageChange = (e) => {
    const { name, value } = e.target;
    setMortgageInfo({
      ...mortgageInfo,
      [name]: parseFloat(value),
    });
  };

  return (
    <>
      <Head>
        <title>{property.title} | Piscal+</title>
        <meta name="description" content={property.description.substring(0, 160)} />
      </Head>



      <main className="container mx-auto px-4 py-8">
        {/* 2. Property Title & Basic Info */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <p className="text-gray-600 mb-3">{property.address}</p>
          <p className="text-2xl font-bold text-[#E37019]">{property.price}</p>
        </div>

        {/* 3. Image Gallery */}
        <div className="mb-8">
  <div className="relative h-96 w-full mb-4 rounded-lg overflow-hidden">
    <Image
      src={property.images[selectedImage]}
      alt={`Main property image ${selectedImage + 1}`}
      fill
      className="object-cover"
    />
  </div>

  <div className="flex space-x-4 overflow-x-auto pb-2">
    {property.images.map((image, index) => (
      <div
        key={index}
        className={`relative min-w-[100px] h-20 rounded cursor-pointer overflow-hidden border ${
          selectedImage === index ? 'ring-2 ring-[#E37019]' : 'border-gray-300'
        }`}
        onClick={() => setSelectedImage(index)}
      >
        <Image
          src={image}
          alt={`Thumbnail ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>

  {property.hasVirtualTour && (
    <button className="mt-4 bg-[#5D913B] hover:bg-[#4D8130] text-white py-2 px-4 rounded">
      Take a Virtual Tour
    </button>
  )}
</div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {/* 4. Property Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex flex-col items-center">
                <div className="flex items-center text-[#2D4939] mb-1">
                  <FaBed className="mr-2" /> <span className="font-bold">Bedrooms</span>
                </div>
                <span>{property.details.bedrooms}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-[#2D4939] mb-1">
                  <FaBath className="mr-2" /> <span className="font-bold">Bathrooms</span>
                </div>
                <span>{property.details.bathrooms}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-[#2D4939] mb-1">
                  <FaRulerCombined className="mr-2" /> <span className="font-bold">Square Feet</span>
                </div>
                <span>{property.details.squareFeet}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-[#2D4939] mb-1">
                  <FaHome className="mr-2" /> <span className="font-bold">Property Type</span>
                </div>
                <span>{property.details.propertyType}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-[#2D4939] mb-1">
                  <FaCalendarAlt className="mr-2" /> <span className="font-bold">Year Built</span>
                </div>
                <span>{property.details.yearBuilt}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center text-[#2D4939] mb-1">
                  <FaCarAlt className="mr-2" /> <span className="font-bold">Parking</span>
                </div>
                <span>{property.details.parking}</span>
              </div>
            </div>

            {/* 5. Detailed Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#2D4939]">Property Description</h2>
              <p className="mb-6 text-gray-700 leading-relaxed">{property.description}</p>
              
              <h3 className="text-xl font-semibold mb-3 text-[#2D4939]">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {property.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start mb-1">
                    <span className="inline-block mr-2 text-[#5D913B]">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Location & Neighborhood */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-[#2D4939]">Location & Neighborhood</h2>
              
              {/* Map placeholder */}
              <div className="w-full h-64 bg-gray-200 mb-6 rounded flex items-center justify-center">
                <span className="text-gray-500">Interactive Map</span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-[#2D4939]">Walkability</h3>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-[#5D913B] text-white flex items-center justify-center text-xl font-bold">
                      {property.neighborhood.walkability}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Walk Score</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-[#2D4939]">Nearby Amenities</h3>
                  <ul className="text-sm text-gray-700">
                    {property.neighborhood.amenities.map((amenity, index) => (
                      <li key={index} className="mb-1">• {amenity}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-[#2D4939]">Schools</h3>
                  <ul className="text-sm text-gray-700">
                    {property.neighborhood.schools.map((school, index) => (
                      <li key={index} className="mb-1">• {school}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            {/* 7. Contact & Schedule Viewing */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold mb-4 text-[#2D4939]">Contact Seller</h2>
              
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#5D913B]"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#5D913B]"
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#5D913B]"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#5D913B]"
                    id="message"
                    placeholder="I'm interested in this property and would like more information..."
                    rows="4"
                  ></textarea>
                </div>
                
                <div className="mb-4">
                  <button
                    className="w-full bg-[#E37019] hover:bg-[#D26010] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Contact Seller
                  </button>
                </div>
              </form>
              
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2 text-[#2D4939]">Schedule a Viewing</h3>
                <p className="text-sm text-gray-600 mb-3">Select a date and time for property viewing</p>
                
                {/* Calendar placeholder */}
                <div className="border rounded p-3 mb-3 bg-gray-50 text-center text-sm text-gray-500">
                  Calendar Selector
                </div>
                
                <button
                  className="w-full bg-[#5D913B] hover:bg-[#4D8130] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Request Viewing
                </button>
              </div>
            </div>

            {/* 8. Mortgage Calculator */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-bold mb-4 text-[#2D4939]">Mortgage Calculator</h2>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                  Property Price ($)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  name="price"
                  type="number"
                  value={mortgageInfo.price}
                  onChange={handleMortgageChange}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="downPayment">
                  Down Payment ($)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="downPayment"
                  name="downPayment"
                  type="number"
                  value={mortgageInfo.downPayment}
                  onChange={handleMortgageChange}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loanTerm">
                  Loan Term (years)
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="loanTerm"
                  name="loanTerm"
                  value={mortgageInfo.loanTerm}
                  onChange={handleMortgageChange}
                >
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="30">30 years</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interestRate">
                  Interest Rate (%)
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="interestRate"
                  name="interestRate"
                  type="number"
                  step="0.1"
                  value={mortgageInfo.interestRate}
                  onChange={handleMortgageChange}
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">Estimated Monthly Payment</p>
                <p className="text-2xl font-bold text-[#5D913B]">${calculateMortgage()}</p>
              </div>
              
              <button
                className="w-full bg-[#5D913B] hover:bg-[#4D8130] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Calculate
              </button>
            </div>

            {/* 10. User Engagement */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex justify-between mb-6">
                <button 
                  className={`flex items-center ${isFavorite ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <FaHeart className="mr-2" /> {isFavorite ? 'Saved' : 'Save to Favorites'}
                </button>
                
                <button className="flex items-center text-gray-500 hover:text-[#5D913B]">
                  <FaShareAlt className="mr-2" /> Share
                </button>
                
                <button className="flex items-center text-gray-500 hover:text-[#E37019]">
                  <FaFlag className="mr-2" /> Report
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <button className="bg-[#1877F2] text-white p-2 rounded">Facebook</button>
                <button className="bg-[#1DA1F2] text-white p-2 rounded">Twitter</button>
                <button className="bg-[#0A66C2] text-white p-2 rounded">LinkedIn</button>
                <button className="bg-gray-200 text-gray-700 p-2 rounded">Copy Link</button>
              </div>
            </div>
          </div>
        </div>

        {/* 9. Similar Properties */}
        <div className="mt-12 mb-8">
  <h2 className="text-2xl font-bold mb-6 text-[#2D4939]">Similar Properties</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {property.similarProperties.map((similarProperty) => (
      <div key={similarProperty.id} className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-48 bg-gray-200 relative">
          {/* Rendering property image */}
          <Image
            src={similarProperty.image}
            alt={similarProperty.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{similarProperty.title}</h3>
          <p className="text-[#E37019] font-bold mb-2">{similarProperty.price}</p>
          <Link legacyBehavior href={`/property/${similarProperty.id}`}>
            <a className="text-[#5D913B] hover:underline text-sm">View Details</a>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
      </main>



</>
     );
    }