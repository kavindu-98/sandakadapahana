/** @format */

import { motion } from "framer-motion";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Booking from "./components/Booking";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Countdown />
      <Booking />

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#8B7355] mb-12">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="relative overflow-hidden group">
                <img
                  src={`/gallery-${index}.jpg`}
                  alt={`Gallery Image ${index}`}
                  className="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F5EBE0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#8B7355] mb-12">
            Contact Us
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#8B7355] text-white px-8 py-3 rounded-lg hover:bg-[#6B5745] transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-[#8B7355] hover:text-[#6B5745]">
                Facebook
              </a>
              <a href="#" className="text-[#8B7355] hover:text-[#6B5745]">
                Instagram
              </a>
              <a href="#" className="text-[#8B7355] hover:text-[#6B5745]">
                Twitter
              </a>
            </div>
            <p className="text-gray-600">
              &copy; 2025 Sandakadapahana Musical Concert. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
