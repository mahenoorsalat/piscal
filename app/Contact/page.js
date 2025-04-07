import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Head */}
      <Head>
        <title>Contact Us | Piscal+</title>
        <meta name="description" content="Get in touch with us for any inquiries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      {/* Hero Section */}
      <section className="bg-[#2D4939] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl">We'd love to hear from you! Reach out with any questions or feedback.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">Send Us a Message</h2>
          <form action="#" method="POST" className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E37019]" />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E37019]" />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" placeholder="Your message here..." rows="6" className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E37019]"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="mt-4 py-3 px-6 bg-[#E37019] text-white font-semibold rounded-lg hover:bg-[#D2590E]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section (Geolocation) */}
      <section className="py-16 px-8 bg-[#F4F4F4]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#2D4939]">Our Location</h2>
          <p className="mt-4 text-lg text-gray-600">You can find us at our office. Visit us or drop us a line anytime!</p>
          <div className="mt-8 h-[400px]">
            {/* Google Maps or Placeholder Map */}
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.297702553935!2d144.95592331531613!3d-37.81720937975119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5be3f9d687%3A0xbfa91d68403b59b7!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sus!4v1629834753066!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#2D4939]">Follow Us</h2>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#5D913B] hover:text-[#E37019]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#5D913B] hover:text-[#E37019]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-[#5D913B] hover:text-[#E37019]">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
