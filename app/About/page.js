// pages/about.js
import Image from 'next/image'

export default function About() {
  return (
    <div className="font-sans ">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: 'url(/searchBg.jpg)' }}>
  <div className="absolute inset-0 bg-[#2D4939] opacity-60"></div>
  <div className="relative justify-center   z-10 text-center py-20 px-6">
    <h1 className="text-5xl font-bold text-white">Welcome to Piscal+ – Your Path to <br/> a Healthier and More Sustainable Lifestyle</h1>
    <p className="text-lg text-white mt-4">At Piscal+, we combine wellness with eco-conscious challenges, rewarding you for your efforts while supporting ecological initiatives across Africa and beyond.</p>
  </div>

        {/* Mission Section */}
        <section className=" text-white py-16 px-6">
       
      </section>
</section>




{/* What We Do Section */}
<section className="bg-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold">What We Do</h2>
    <div className="mt-8 flex flex-wrap justify-center gap-12">
      <div className="w-64">
        <span className="text-6xl">👟</span> {/* Activity Tracking Emoji */}
        <h3 className="text-xl font-semibold mt-4">Activity Tracking</h3>
        <p className="mt-2">Monitor your steps, runs, and workouts with smartphone sensors or connected devices.</p>
      </div>
      <div className="w-64">
        <span className="text-6xl">🌍</span> {/* Eco Actions Emoji */}
        <h3 className="text-xl font-semibold mt-4">Eco Actions</h3>
        <p className="mt-2">Track your impact through ecological tasks like recycling or tree planting.</p>
      </div>
      <div className="w-64">
        <span className="text-6xl">🎁</span> {/* Rewards Emoji */}
        <h3 className="text-xl font-semibold mt-4">Rewards & Donations</h3>
        <p className="mt-2">Earn points for actions, redeem them for discounts, services, or donate to trusted NGOs.</p>
      </div>
      <div className="w-64">
        <span className="text-6xl">🏆</span> {/* Challenge Emoji */}
        <h3 className="text-xl font-semibold mt-4">Real-Time Challenges</h3>
        <p className="mt-2">Compete solo or with friends, and win rewards for top performances.</p>
      </div>
    </div>
  </div>
</section>


      {/* How It Works Section */}
      <section className="bg-[#5D913B] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-8 flex justify-around">
            <div className="w-1/4">
              <h3 className="text-2xl font-semibold">1. Join Us</h3>
              <p className="mt-2">Sign up and start tracking your activities.</p>
            </div>
            <div className="w-1/4">
              <h3 className="text-2xl font-semibold">2. Earn Points</h3>
              <p className="mt-2">Complete challenges to earn points for your eco-friendly actions.</p>
            </div>
            <div className="w-1/4">
              <h3 className="text-2xl font-semibold">3. Redeem Rewards</h3>
              <p className="mt-2">Use your points to access rewards like discounts or donate to causes.</p>
            </div>
            <div className="w-1/4">
              <h3 className="text-2xl font-semibold">4. Support Sustainability</h3>
              <p className="mt-2">Contribute to environmental projects with your points.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Why Choose Piscal+</h2>
          <p className="text-lg mt-6">
            We believe in creating a positive impact for our users and the environment. With Piscal+, you don’t just live healthily – you contribute to a better world. Here's why you should join us:
          </p>
          <ul className="list-disc list-inside mt-6 text-left">
            <li>Comprehensive activity tracking across various devices.</li>
            <li>Gamified experience with engaging community challenges.</li>
            <li>Real rewards for your actions, redeemable for products or donations.</li>
            <li>Easy mobile payments for donations and rewards.</li>
          </ul>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="bg-[#5D913B] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Join the Movement</h2>
          <p className="text-lg mt-6">Together, we can make a difference. Sign up today and start living a healthier, eco-conscious life while earning rewards!</p>
          <div className="mt-8">
            <a href="/signup" className="bg-[#E37019] text-white px-6 py-3 rounded-lg text-xl font-semibold">Sign Up Today</a>
            <a href="/learn-more" className="text-[#E37019] ml-6 text-xl font-semibold">Learn More About Us</a>
          </div>
        </div>
      </section>

 
    </div>
  )
}
