/** @format */

import { motion } from "framer-motion";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Booking from "./components/Booking";
import Artist from "./components/Artist";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import { Facebook, Instagram, Twitter } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Artist />
      <Countdown />
      <Booking />

      {/* Gallery Section */}
      <Gallery />
      {/* Contact Section */}
      <ContactUs />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-[#F5EBE0] py-10 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[#8B7355] hover:text-[#6B5745] transition"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="text-[#8B7355] hover:text-[#6B5745] transition"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="#"
                className="text-[#8B7355] hover:text-[#6B5745] transition"
                aria-label="Twitter"
              >
                <Twitter size={22} />
              </a>
            </div>

            {/* Divider */}
            <div className="w-20 border-t border-gray-300"></div>

            {/* Copyright */}
            <p className="text-gray-600 text-sm text-center">
              &copy; 2025{" "}
              <span className="font-medium text-[#8B7355]">
                Sandakadapahana Musical Concert
              </span>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
