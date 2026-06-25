/** @format */

import { motion } from "framer-motion";
import flyerImg1 from "../assets/images/flyer1.jpg";
import flyerImg2 from "../assets/images/flyer2.jpg";
import flyerImg3 from "../assets/images/flyer3.jpg";
import flyerImg4 from "../assets/images/flyer4.webp";
import flyerImg5 from "../assets/images/flyer5.jpg";

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
    { category: "Standing", price: "2,500.00" },
    { category: "Bronze", price: "4,500.00" },
    { category: "Silver", price: "6,500.00" },
    { category: "Gold", price: "10,000.00", popular: true, reserved: true },
    { category: "VIP", price: "15,000.00", reserved: true, parking: true },
  ];
  const ticketCategories2 = [
    { category: "Balcony", price: "1,500.00" },
    { category: "Bronze", price: "2,500.00" },
    { category: "Silver", price: "5,000.00" },
    { category: "Gold", price: "6,500.00", popular: true },
    { category: "VIP", price: "10,000.00", parking: true },
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
            <div className="bg-white rounded-xl p-6 lg:p-10 shadow-md border border-gray-200 flex flex-col md:flex-row items-center gap-8">
              <img
                src={flyerImg4}
                alt="Concert Flyer Colombo"
                className="rounded-lg shadow-lg w-full md:w-[450px] h-96 md:h-[500px] object-contain bg-white mb-4 md:mb-0"
              />
              <div className="flex-1 flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-amber-800 mb-2">
                    Sandakadapahana - Sugathadasa Indoor Stadium
                    <span className="block text-base lg:text-lg text-amber-600 font-semibold mt-1">
                      සඳකඩපහණ - සුගතදාස ගෘහස්ථ ක්‍රිඩාංගනය
                    </span>
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    Join us for a magical evening with{" "}
                    <strong>Sunil Edirisingha</strong> in an unforgettable live
                    performance filled with timeless melodies and cultural
                    harmony.
                  </p>
                  <div className="space-y-2 text-gray-700 mb-4">
                    <p>📅 2026 ජූලි මස 25 වන දින</p>
                    <p>📍 කොළඹ සුගතදාස ගෘහස්ථ ක්‍රිඩාංගනයේ දී</p>
                    <p>⏰ Gates open at 4:00 PM</p>
                  </div>

                  {/* Ticket Categories */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-bold text-amber-800 mb-3">
                      ප්‍රවේශපත්
                    </h4>
                    <div className="space-y-1 text-sm">
                      {ticketCategories.map((ticket) => (
                        <div
                          key={ticket.category}
                          className="flex justify-between"
                        >
                          <span className="text-gray-700">
                            {ticket.category}
                            {ticket.reserved && (
                              <span className="text-amber-600 text-xs ml-2">
                                (Reserved)
                              </span>
                            )}
                            {ticket.parking && (
                              <span className="text-green-600 text-xs ml-2">
                                +Parking
                              </span>
                            )}
                          </span>
                          <span className="font-semibold text-amber-800">
                            LKR {ticket.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto mt-6"
                >
                  <a
                    href="https://oneticket.lk/event/HOLP1192B1868078E6C98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-8 py-3 bg-amber-700 text-white rounded-xl shadow-md hover:bg-amber-800 transition-all font-bold text-center"
                  >
                    Book Now
                  </a>
                </motion.button>
              </div>
            </div>
            {/* Event 2 */}
            {/* <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 lg:p-10 shadow-md border-2 border-orange-300 flex flex-col md:flex-row items-center gap-8">
              <img
                src={flyerImg5}
                alt="Concert Flyer Polonnaruwa"
                className="rounded-lg shadow-lg w-full md:w-[450px] h-96 md:h-[500px] object-contain bg-white mb-4 md:mb-0"
              />
              <div className="flex-1 flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-orange-900 mb-2">
                    Sandakadapahana - Polonnaruwa
                    <span className="block text-base lg:text-lg text-orange-700 font-semibold mt-1">
                      සඳකඩපහණ - පොළොන්නරුව
                    </span>
                  </h2>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Join us for a magical evening with{" "}
                    <strong>Sunil Edirisingha</strong> in an unforgettable live
                    performance filled with timeless melodies and cultural
                    harmony.
                  </p>
                  <div className="space-y-2 text-gray-800 mb-4">
                    <p>📅 2026 ජූලි මස 28 වන දින</p>
                    <p>
                      📍 පොළොන්නරුව රාජකීය විද්‍යාලයීය මෛත්‍රී ශිල්ප කලා
                      මණ්ඩපයේදී
                    </p>
                    <p>⏰ Gates open at 6:00 PM</p>
                  </div>

                  {/* Ticket Categories */}
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <h4 className="text-sm font-bold text-orange-900 mb-3">
                      ප්‍රවේශපත්
                    </h4>
                    <div className="space-y-1 text-sm">
                      {ticketCategories2.map((ticket) => (
                        <div
                          key={ticket.category}
                          className="flex justify-between"
                        >
                          <span className="text-gray-800">
                            {ticket.category}
                            {ticket.reserved && (
                              <span className="text-orange-600 text-xs ml-2">
                                (Reserved)
                              </span>
                            )}
                            {ticket.parking && (
                              <span className="text-green-600 text-xs ml-2">
                                +Parking
                              </span>
                            )}
                          </span>
                          <span className="font-semibold text-orange-900">
                            LKR {ticket.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full md:w-auto mt-6"
                >
                  <a
                    href="https://oneticket.lk/event/VF5N1192B727260E24374"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-8 py-3 bg-orange-600 text-white rounded-xl shadow-md hover:bg-orange-700 transition-all font-bold text-center"
                  >
                    Book Now
                  </a>
                </motion.button>
              </div>
            </div> */}

            {/* Past Events Section */}
            <div className="mt-20 pt-12 border-t-2 border-gray-300">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center">
                Past Events
              </h3>
              <div className="space-y-10">
                <div className="relative bg-gray-100 rounded-xl p-6 lg:p-10 shadow-md border border-gray-300 flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <img
                      src={flyerImg2}
                      alt="Concert Flyer Colombo"
                      className="rounded-lg shadow-lg w-full md:w-[450px] h-96 md:h-[500px] object-contain bg-white mb-4 md:mb-0 grayscale"
                    />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg border-2 border-amber-400 text-sm flex items-center gap-2">
                        <span className="text-xl">✅</span>
                        <span>Successfully Completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-full justify-between">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-600 mb-2">
                        Sandakadapahana - Colombo
                        <span className="block text-base lg:text-lg text-gray-500 font-semibold mt-1">
                          සඳකඩපහණ - කොළඹ
                        </span>
                      </h2>
                      <p className="text-gray-500 text-base leading-relaxed mb-4">
                        Join us for a magical evening with{" "}
                        <strong>Sunil Edirisingha</strong> in an unforgettable
                        live performance filled with timeless melodies and
                        cultural harmony.
                      </p>
                      <div className="space-y-2 text-gray-500 mb-4">
                        <p>📅 2025 නොවැම්බර් මස 15 වන දින</p>
                        <p>📍 කොළඹ මියුසියස් විද්‍යාලයීය ශ්‍රවණාගාරයේ දී</p>
                        <p>⏰ Doors open at 7:00 PM</p>
                      </div>
                    </div>
                    <a
                      href="https://www.facebook.com/trioslk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all font-bold text-center inline-block cursor-pointer"
                    >
                      Show Album
                    </a>
                  </div>
                </div>

                {/* Event 2 - Kandy (Successfully Held) */}
                <div className="relative bg-gray-100 rounded-xl p-6 lg:p-10 shadow-md border border-gray-300 flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <img
                      src={flyerImg3}
                      alt="Concert Flyer Kandy"
                      className="rounded-lg shadow-lg w-full md:w-[450px] h-96 md:h-[500px] object-contain bg-white mb-4 md:mb-0 grayscale"
                    />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg border-2 border-amber-400 text-sm flex items-center gap-2">
                        <span className="text-xl">✅</span>
                        <span>Successfully Completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-full justify-between">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-600 mb-2">
                        Sandakadapahana - Kandy
                        <span className="block text-base lg:text-lg text-gray-500 font-semibold mt-1">
                          සඳකඩපහණ - මහනුවර
                        </span>
                      </h2>
                      <p className="text-gray-500 text-base leading-relaxed mb-4">
                        Experience the magic of{" "}
                        <strong>Sunil Edirisingha</strong>
                        in the hill capital with a night of classical music and
                        culture.
                      </p>
                      <div className="space-y-2 text-gray-500 mb-4">
                        <p>📅 2025 නොවැම්බර් මස 04 වන දින</p>
                        <p>
                          📍 පේරාදෙණිය විශ්වවිද්‍යාලයීය ගෘහස්ථ ක්‍රීඩාගාරයේදී
                        </p>
                        <p>⏰ Doors open at 6:00 PM</p>
                      </div>
                    </div>
                    <a
                      href="https://www.facebook.com/media/set/?set=a.912613855045709&type=3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all font-bold text-center inline-block cursor-pointer"
                    >
                      Show Album
                    </a>
                  </div>
                </div>

                {/* Event 3 - Matara (Successfully Held) */}
                <div className="relative bg-gray-100 rounded-xl p-6 lg:p-10 shadow-md border border-gray-300 flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <img
                      src={flyerImg1}
                      alt="Concert Flyer Matara"
                      className="rounded-lg shadow-lg w-full md:w-[450px] h-96 md:h-[500px] object-contain bg-white mb-4 md:mb-0 grayscale"
                    />
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg border-2 border-amber-400 text-sm flex items-center gap-2">
                        <span className="text-xl">✅</span>
                        <span>Successfully Completed</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col h-full justify-between">
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-600 mb-2">
                        Sandakadapahana - Matara
                        <span className="block text-base lg:text-lg text-gray-500 font-semibold mt-1">
                          සඳකඩපහණ - මාතර
                        </span>
                      </h2>
                      <p className="text-gray-500 text-base leading-relaxed mb-4">
                        Don’t miss <strong>Sunil Edirisingha</strong> performing
                        live by the southern coast for a night of unforgettable
                        music.
                      </p>
                      <div className="space-y-2 text-gray-500 mb-4">
                        <p>📅 2025 නොවැම්බර් මස 09 වන දින</p>
                        <p>
                          📍 රුහුණු විශ්වවිද්‍යාලයීය රබින්ද්‍රනාත් තාගෝර්
                          අනුස්මරණ සම්මන්ත්‍රණ ශාලාවේදී
                        </p>
                        <p>⏰ Doors open at 6:00 PM</p>
                      </div>
                    </div>
                    <a
                      href="https://www.facebook.com/media/set/?set=a.975036205470140&type=3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all font-bold text-center inline-block cursor-pointer"
                    >
                      Show Album
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/*  Ticket Categories */}
        {/* <motion.div
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
            <a
              key={ticket.category}
              href="https://oneticket.lk/5YNA1190965E4FD352CB2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <TicketCard {...ticket} delay={index * 0.1} />
            </a>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Booking;
