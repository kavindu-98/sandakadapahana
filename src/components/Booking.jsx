/** @format */

import { motion } from "framer-motion";

const Booking = () => {
  return (
    <section
      id="booking"
      className="py-24 bg-brown-light relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/diamond-upholstery.png')] opacity-10"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brown-DEFAULT mb-4">
            Book Your Tickets Now
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Join us for an unforgettable evening of musical excellence with the
            legendary Sunil Edirisinghe
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-brown-DEFAULT rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074"
              alt="Concert Flyer"
              className="rounded-lg shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-semibold">Date: December 25, 2025</p>
                <p>Venue: National Arts Center</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-brown-DEFAULT mb-6">
                Ticket Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 border border-brown-light rounded-lg hover:bg-brown-light/20 transition-colors">
                  <span>VIP Experience</span>
                  <span className="font-semibold">$150</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-brown-light rounded-lg hover:bg-brown-light/20 transition-colors">
                  <span>Premium Seating</span>
                  <span className="font-semibold">$100</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-brown-light rounded-lg hover:bg-brown-light/20 transition-colors">
                  <span>Regular Entry</span>
                  <span className="font-semibold">$50</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-brown-DEFAULT text-white px-8 py-4 rounded-full hover:bg-brown-dark transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Book Now</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
