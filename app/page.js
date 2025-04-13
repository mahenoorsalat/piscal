"use client"
import { useState } from 'react';
import { Search, Filter, ChevronRight ,Facebook, Instagram, Twitter, Linkedin, Youtube, Music } from 'lucide-react';
import { FaPinterest } from 'react-icons/fa'; // Font Awesome Pinterest icon


export default function Home() {
  const [selectedTab, setSelectedTab] = useState('FOR SALE');
  
  return (
    <div className="flex flex-col min-h-screen bg-white">
  

      {/* Notification banner */}
      <div className="bg-blue-50 py-2 px-6 flex justify-center items-center relative">
        <p className="text-sm">Complete a short survey and get a chance to win a $100 prepaid card! <a href="#" className="underline">I participate</a></p>
        <button className="absolute right-4 top-2">×</button>
      </div>

{/* Hero section */}
<section
  className="relative h-96 bg-cover bg-center"
  style={{ backgroundImage: "url('./HomeBg.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute  bg-black bg-opacity-30"></div>

  {/* Content */}
  <div className="relative px-6 py-12 h-full flex flex-col justify-center">
    <h1 className="text-4xl font-bold text-white mb-4">
      Sell well supported by our experienced team!
    </h1>
    <button className="bg-green-500 text-white px-6 py-3 rounded-full w-fit">
      Discover our services
    </button>
  </div>
</section>


      {/* Search section */}
      <section className="bg-white -mt-12 mx-6 rounded-lg shadow-md p-4">
        <div className="flex mb-4">
          <button 
            className={`px-6 py-2 ${selectedTab === 'FOR SALE' ? 'bg-green-50 border-b-2 border-green-500' : 'bg-white'}`}
            onClick={() => setSelectedTab('FOR SALE')}
          >
            FOR SALE
          </button>
          <button 
            className={`px-6 py-2 ${selectedTab === 'FOR RENT' ? 'bg-green-50 border-b-2 border-green-500' : 'bg-white'}`}
            onClick={() => setSelectedTab('FOR RENT')}
          >
            FOR RENT
          </button>
          <button 
            className={`px-6 py-2 ${selectedTab === 'SOLD' ? 'bg-green-50 border-b-2 border-green-500' : 'bg-white'}`}
            onClick={() => setSelectedTab('SOLD')}
          >
            SOLD
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Region, city, street, telephone" 
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex gap-2">
            <button className="bg-green-100 border border-green-300 px-4 py-2 rounded-md">All properties</button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md">New properties</button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md flex items-center">
              Price <span className="ml-1">$</span>
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md flex items-center">
              Property Types <Filter size={16} className="ml-1" />
            </button>
            <button className="bg-white border border-gray-300 px-4 py-2 rounded-md flex items-center">
              Filters <Filter size={16} className="ml-1" />
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center">
              To research <Search size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Property types section */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">What style of home are you looking for?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <a href="#" className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:shadow-md">
            <div className="flex items-center">
              <div className="mr-3 bg-gray-100 p-2 rounded-full">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <span>Single-family home</span>
            </div>
            <ChevronRight size={20} />
          </a>
          <a href="#" className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:shadow-md">
            <div className="flex items-center">
              <div className="mr-3 bg-gray-100 p-2 rounded-full">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                </svg>
              </div>
              <span>Condo</span>
            </div>
            <ChevronRight size={20} />
          </a>
          <a href="#" className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:shadow-md">
            <div className="flex items-center">
              <div className="mr-3 bg-gray-100 p-2 rounded-full">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <span>Cottage</span>
            </div>
            <ChevronRight size={20} />
          </a>
          <a href="#" className="flex items-center justify-between border border-gray-200 rounded-lg p-4 hover:shadow-md">
            <div className="flex items-center">
              <div className="mr-3 bg-gray-100 p-2 rounded-full">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </div>
              <span>Multiplex</span>
            </div>
            <ChevronRight size={20} />
          </a>
        </div>
      </section>

   {/* Commission-free section */}
<section className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
  
  {/* Left Image Section */}
  <div className="rounded-lg overflow-hidden h-80 md:h-auto">
    <div 
      className="h-full w-full bg-cover bg-center relative" 
      style={{ backgroundImage: "url('/about.jpg')" }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="bg-green-500 text-white p-6 rounded-lg relative">
          <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 -translate-y-1/2 rounded-md">
            SOLD!
          </div>
          <p className="text-xl font-bold">FOR SALE</p>
        </div>
      </div>
    </div>
  </div>

  {/* Right Text Section */}
  <div className="flex flex-col justify-center">
    <h2 className="text-3xl font-bold mb-6">
      Selling your property without an intermediary with the help of our team pays off!
    </h2>
    <p className="mb-4">
      Our mission is to provide commission-free sales in your best interests.
    </p>
    <p className="mb-6">
      Our professional team, which includes appraisers, real estate coaches, and notaries, will guide you toward a successful real estate transaction without an intermediary.
    </p>
    <p className="mb-6">
      Discover all the benefits of doing business with Piscal+.
    </p>
    <button className="bg-black text-white px-6 py-3 rounded-full w-fit">Learn more</button>
  </div>

</section>


      {/* Stats section */}
      <section className="bg-green-100 px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">27</p>
            <p className="text-gray-700">years at your service</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">3.7 billion</p>
            <p className="text-gray-700">dollars in savings achieved</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">92%</p>
            <p className="text-gray-700">of our customers would do business with Piscal+ again</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">8.6 out of 10</p>
            <p className="text-gray-700">overall rating according to Protégez-Vous</p>
          </div>
        </div>
      </section>

     {/* Services section */}
<section className="px-6 py-12">
  <h2 className="text-3xl font-bold text-center mb-12">Piscal+, we are here for you</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
    {/* Card 1 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/home1.jpg')" }}></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Sale of property</h3>
        <p className="text-gray-700">For your sale project without a broker, benefit from the expertise of our real estate team.</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/home2.jpg')" }}></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Property rental</h3>
        <p className="text-gray-700">Advertise your property for rent using the tools at your disposal to showcase it in a professional manner.</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('/home3.jpg')" }}></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Real Estate Business Services</h3>
        <p className="text-gray-700">Our tailored solutions for builders, property developers, and real estate companies meet their unique needs.</p>
      </div>
    </div>

  </div>
</section>


      <div className="bg-gray-50">
 {/* Free explanatory videos section */}
<section className="py-12 px-6 bg-amber-50 rounded-lg mx-6 my-12 flex flex-col md:flex-row gap-8 items-center">
  
  {/* Left Image Section */}
  <div className="md:w-1/3 h-64 rounded-lg overflow-hidden">
    <img 
      src="/explanation.jpg" 
      alt="Explanatory Video Preview" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Text Section */}
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold mb-4">Free explanatory videos</h2>
    <p className="text-gray-700 mb-6">
      Sign up to discover everything you can accomplish with Piscal+'s help, and learn more about 
      commission-free selling.
    </p>
    <button className="border border-black px-8 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
      Register
    </button>
  </div>

</section>


    {/* Blog section */}
<section className="py-12 px-6">
  <h2 className="text-3xl font-bold mb-12 text-center">Our blog</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Blog Post 1 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="h-48">
        <img 
          src="/blog.jpg" 
          alt="Green Homes" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-xs text-gray-500 uppercase">ALL ABOUT THE SALE</span>
        <h3 className="text-xl font-bold mt-2 mb-4">Green Homes: Tips and Advice for Eco-Friendly Renovations</h3>
      </div>
    </div>

    {/* Blog Post 2 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="h-48">
        <img 
          src="/blog1.jpg" 
          alt="House Expenses" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-xs text-gray-500 uppercase">ALL ABOUT BUYING</span>
        <h3 className="text-xl font-bold mt-2 mb-4">What expenses should I expect when buying a house?</h3>
      </div>
    </div>

    {/* Blog Post 3 */}
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="h-48">
        <img 
          src="/blog2.jpg" 
          alt="Selling Documents" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <span className="text-xs text-gray-500 uppercase">ALL ABOUT THE SALE</span>
        <h3 className="text-xl font-bold mt-2 mb-4">The 7 documents needed to sell a house</h3>
      </div>
    </div>

  </div>

  <div className="text-center mt-10">
    <p className="mb-4">Check out Piscal+'s real estate guides and advice.</p>
    <button className="border border-black px-8 py-2 rounded-full hover:bg-black hover:text-white transition-colors">
      All articles
    </button>
  </div>
</section>


      {/* Partners section */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-center">Partners who listen and are at your service</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          From renovations to buying or selling a house, we are by your side from start to finish to bring your dreams and real estate projects to fruition.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center">
                <div className="text-orange-500 font-bold text-2xl">R</div>
                <div className="text-green-900 font-bold text-2xl">A</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Need to renovate?</h3>
              <p className="text-gray-700 mb-4">
                Whether you're looking for quick or major renovations, residential or commercial, 
                RénoAssistance is here to help. Trust our Verified Contractors and an experienced 
                team to ensure your renovations are a success.
              </p>
              <a href="#" className="text-green-700 font-semibold hover:underline">Learn more</a>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center">
                <div className="text-green-900 font-bold text-2xl">EP</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our real estate ecosystem</h3>
              <p className="text-gray-700 mb-4">
                EspaceProprio is a Desjardins initiative that brings together a group of companies 
                offering support services in the areas of housing, buying and selling real estate, 
                including renovation, construction and maintenance of your living space.
              </p>
              <a href="#" className="text-green-700 font-semibold hover:underline">Learn more</a>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 flex gap-6 items-center">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-500 rounded-md flex items-center justify-center">
              <div className="text-white font-bold text-2xl">D</div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">We've been doing this for a long time, and that's - it's reassuring.</h3>
            <p className="text-gray-700">
              Change to Desjardins and save up to $550 by combining your car and home insurance.
            </p>
          </div>
        </div>
      </section>

 
    </div>
    </div>
  );
}