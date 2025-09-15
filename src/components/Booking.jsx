/** @format */

import { motion } from "framer-motion";
import flyerImg from "../assets/images/flyer.jpg";

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
    { category: "Balcony", price: "3,000.00" },
    { category: "Bronze", price: "5,000.00" },
    { category: "Silver", price: "7,500.00" },
    { category: "Gold", price: "10,000.00", popular: true },
    { category: "VIP", price: "15,000.00" },
  ];

  return (
    <section
      id="booking"
      className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.03),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.03),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        {/*  Event Details - Multiple Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="space-y-10">
            {/* Event 1 */}
            <div className="bg-white rounded-xl p-4 lg:p-8 shadow-md border border-gray-200 flex flex-col md:flex-row items-center gap-6">
              <img
                src={flyerImg}
                alt="Concert Flyer Colombo"
                className="rounded-lg shadow-lg w-full md:w-96 h-80 object-cover mb-4 md:mb-0"
              />
              <div className="flex-1 flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-amber-800 mb-2">
                    Sandakadapahana - Colombo
                    <span className="block text-base lg:text-lg text-amber-600 font-semibold mt-1">
                      සඳකඩපහණ - කොළඹ
                    </span>
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    Join us for a magical evening with{" "}
                    <strong>Sunil Edirisingha</strong> in an unforgettable live
                    performance filled with timeless melodies and cultural
                    harmony.
                  </p>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p>📅 December 25, 2025 at 7:00 PM</p>
                    <p>📍 National Arts Center, Colombo</p>
                    <p>⏰ Doors open at 6:30 PM</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto px-8 py-3 bg-amber-700 text-white rounded-xl shadow-md hover:bg-amber-800 transition-all"
                >
                  Book Now
                </motion.button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-white rounded-xl p-4 lg:p-8 shadow-md border border-gray-200 flex flex-col md:flex-row items-center gap-6 relative opacity-60 pointer-events-none">
              <img
                src={flyerImg}
                alt="Concert Flyer Kandy"
                className="rounded-lg shadow-lg w-full md:w-96 h-80 object-cover mb-4 md:mb-0"
              />
              <div className="flex-1 flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-amber-800 mb-2">
                    Sandakadapahana - Kandy
                    <span className="block text-base lg:text-lg text-amber-600 font-semibold mt-1">
                      සඳකඩපහණ - මහනුවර
                    </span>
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    Experience the magic of <strong>Sunil Edirisingha</strong>
                    in the hill capital with a night of classical music and
                    culture.
                  </p>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p>📅 January 10, 2026 at 6:30 PM</p>
                    <p>📍 Queen's Hotel, Kandy</p>
                    <p>⏰ Doors open at 6:00 PM</p>
                  </div>
                </div>
                <motion.button
                  disabled
                  className="w-full md:w-auto px-8 py-3 bg-gray-300 text-gray-500 rounded-xl shadow-md cursor-not-allowed"
                >
                  Tickets Not Released
                </motion.button>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/80 text-amber-700 font-bold px-6 py-3 rounded-xl shadow-lg border border-amber-200 text-lg">
                  Tickets Not Released
                </span>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-white rounded-xl p-4 lg:p-8 shadow-md border border-gray-200 flex flex-col md:flex-row items-center gap-6 relative opacity-60 pointer-events-none">
              <img
                src={flyerImg}
                alt="Concert Flyer Galle"
                className="rounded-lg shadow-lg w-full md:w-96 h-80 object-cover mb-4 md:mb-0"
              />
              <div className="flex-1 flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-amber-800 mb-2">
                    Sandakadapahana - Matara
                    <span className="block text-base lg:text-lg text-amber-600 font-semibold mt-1">
                      සඳකඩපහණ - මාතර
                    </span>
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    Don’t miss <strong>Sunil Edirisingha</strong> performing
                    live by the southern coast for a night of unforgettable
                    music.
                  </p>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p>📅 February 2, 2026 at 7:30 PM</p>
                    <p>📍 Hall de Galle, Galle</p>
                    <p>⏰ Doors open at 7:00 PM</p>
                  </div>
                </div>
                <motion.button
                  disabled
                  className="w-full md:w-auto px-8 py-3 bg-gray-300 text-gray-500 rounded-xl shadow-md cursor-not-allowed"
                >
                  Tickets Not Released
                </motion.button>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/80 text-amber-700 font-bold px-6 py-3 rounded-xl shadow-lg border border-amber-200 text-lg">
                  Tickets Not Released
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/*  Ticket Categories */}
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
