/** @format */

import { motion } from "framer-motion";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Booking from "./components/Booking";
import Artist from "./components/Artist";
import Gallery from "./components/Gallery";
import ContactUs from "./components/ContactUs";
import Whatsapp from "./components/Whatsapp";
import { Facebook, Instagram } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Analytics } from "@vercel/analytics/react";

// Custom TikTok FontAwesome Component for Footer
const TikTokIcon = ({ size = 22, className = "" }) => (
  <FontAwesomeIcon
    icon={faTiktok}
    style={{ fontSize: size }}
    className={className}
  />
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div id="home">
        <Header />
      </div>

      {/* <Countdown /> */}
      <Booking />
      <Artist />

      {/* Gallery Section */}
      <Gallery />
      {/* Contact Section */}
      <ContactUs />

      {/* WhatsApp Widget */}
      <Whatsapp />

      <Analytics />

      {/* Footer */}
      <footer className="bg-gradient-to-b from-white to-[#F5EBE0] py-10 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/trioslk"
                className="text-[#8B7355] hover:text-[#6B5745] transition"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/_trioslk_/"
                className="text-[#8B7355] hover:text-[#6B5745] transition"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.tiktok.com/@trioslk"
                className="text-[#8B7355] hover:text-[#6B5745] transition"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon size={22} />
              </a>
            </div>

            {/* Divider */}
            <div className="w-20 border-t border-gray-300"></div>

            {/* Copyright */}
            <p className="text-gray-600 text-sm text-center">
              &copy; 2025{" "}
              <span className="font-medium text-[#8B7355]">trios.lk</span>. All
              rights reserved.
            </p>

            {/* Powered by */}
            <p className="text-gray-500 text-xs text-center">
              Powered by{" "}
              <a
                href="https://www.trios.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B7355] hover:text-[#6B5745] font-medium transition-colors duration-200 hover:underline"
              >
                TRIOSLK
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
