/** @format */

import { motion } from "framer-motion";

const TicketCard = ({ category, price, popular = false, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className={`relative bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border ${
      popular ? "border-amber-300 ring-2 ring-amber-100" : "border-gray-200"
    } group hover:scale-[1.02]`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
          Best Value
        </span>
      </div>
    )}

    <div className="text-center">
      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
        {category}
      </h3>
      <div className="flex items-center justify-center">
        <span className="text-sm text-gray-500 mr-1">LKR</span>
        <span className="text-3xl lg:text-4xl font-bold text-amber-800">
          {price}
        </span>
      </div>
    </div>
  </motion.div>
);

const Booking = () => {
  const ticketCategories = [
    { category: "Balcony", price: "3,500" },
    { category: "Silver", price: "6,000" },
    { category: "Gold", price: "10,000", popular: true },
    { category: "VIP", price: "18,000" },
  ];

  return (
    <section
      id="booking"
      className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.03),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/* 🎤 Event Details - Bigger Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-xl p-8 lg:p-12 shadow-md border border-gray-200">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Flyer Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074"
                  alt="Concert Flyer"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </motion.div>

              {/* Event Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-amber-800">
                  Sandakadapahana Musical Concert
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Join us for a magical evening with{" "}
                  <strong>Sunil Edirisingha</strong>
                  in an unforgettable live performance filled with timeless
                  melodies and cultural harmony.
                </p>
                <div className="space-y-3 text-gray-700">
                  <p>📅 December 25, 2025 at 7:00 PM</p>
                  <p>📍 National Arts Center, Colombo</p>
                  <p>⏰ Doors open at 6:30 PM</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full sm:w-auto px-10 py-4 bg-amber-700 text-white rounded-xl shadow-md hover:bg-amber-800 transition-all"
                >
                  Book Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 🎟 Ticket Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-amber-800 mb-4">
            Ticket Categories
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select from a range of seating options for the perfect concert
            experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {ticketCategories.map((ticket, index) => (
            <TicketCard key={ticket.category} {...ticket} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;
