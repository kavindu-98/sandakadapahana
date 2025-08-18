/** @format */

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CountdownBox = ({ value, label, delay = 0 }) => (
  <motion.div
    className="relative group"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, y: -3 }}
  >
    <div className="bg-white p-6 lg:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      {/* Traditional corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-amber-300 opacity-40"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-300 opacity-40"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-300 opacity-40"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-amber-300 opacity-40"></div>

      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

      <div className="relative z-10 text-center">
        <motion.div
          className="text-4xl lg:text-5xl font-bold text-amber-800 mb-3"
          key={value}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {value.toString().padStart(2, "0")}
        </motion.div>
        <div className="text-gray-600 font-medium text-sm lg:text-base tracking-wide">
          {label}
        </div>
      </div>
    </div>
  </motion.div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const concertDate = new Date("2025-12-25T19:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = concertDate - now;

      const days = Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0);
      const hours = Math.max(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        0
      );
      const minutes = Math.max(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        0
      );
      const seconds = Math.max(
        Math.floor((difference % (1000 * 60)) / 1000),
        0
      );

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(251,191,36,0.02),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(249,115,22,0.02),transparent_50%)]"></div>

      {/* Traditional border elements - more subtle */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Traditional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Traditional lotus decoration */}
          <motion.div
            className="flex justify-center items-center mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-0.5 bg-amber-600"></div>
            <div className="mx-4 w-6 h-6 rounded-full border-2 border-amber-600 flex items-center justify-center bg-white">
              <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            </div>
            <div className="w-24 h-0.5 bg-amber-600"></div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Until the Magic Begins
          </motion.h2>

          <motion.p
            className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Join us for an unforgettable evening of timeless melodies and
            classical artistry
          </motion.p>
        </motion.div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto mb-16">
          <CountdownBox value={timeLeft.days} label="Days" delay={0.1} />
          <CountdownBox value={timeLeft.hours} label="Hours" delay={0.2} />
          <CountdownBox value={timeLeft.minutes} label="Minutes" delay={0.3} />
          <CountdownBox value={timeLeft.seconds} label="Seconds" delay={0.4} />
        </div>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-xl p-8 lg:p-10 border border-gray-200 shadow-sm max-w-2xl mx-auto">
            {/* Traditional divider */}
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-0.5 bg-amber-600"></div>
              <div className="mx-3 w-2 h-2 bg-amber-600 rounded-full"></div>
              <div className="w-16 h-0.5 bg-amber-600"></div>
            </div>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-amber-800">
                December 25, 2025
              </div>
              <div className="text-lg text-gray-600">7:00 PM onwards</div>
              <div className="text-base text-gray-600">
                National Arts Center, Colombo
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#booking"
                className="inline-flex items-center px-8 py-4 bg-amber-700 text-white font-semibold rounded-xl shadow-md hover:bg-amber-800 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Reserve Your Seat</span>
                <motion.svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </motion.a>

              <motion.a
                href="#venue"
                className="inline-flex items-center px-6 py-3 border-2 border-amber-600 text-amber-700 font-medium rounded-xl hover:bg-amber-50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Venue Details</span>
              </motion.a>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 pt-6 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 italic">
                "Don't miss this rare opportunity to witness a living legend
                perform live"
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative musical elements */}
        <motion.div
          className="absolute top-1/4 left-8 text-3xl text-gray-200 hidden lg:block"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -5, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎵
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-12 text-2xl text-gray-200 hidden lg:block"
          animate={{
            rotate: [0, -15, 15, 0],
            y: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🎶
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
