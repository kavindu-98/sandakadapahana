/** @format */

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CountdownBox = ({ value, label }) => (
  <motion.div
    className="relative bg-white p-8 rounded-2xl shadow-lg overflow-hidden group"
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-brown-light/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <motion.span
      className="block text-5xl md:text-6xl font-bold text-brown-DEFAULT mb-2"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {value.toString().padStart(2, "0")}
    </motion.span>
    <motion.p
      className="text-gray-600 font-medium text-lg"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {label}
    </motion.p>
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

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-brown-light/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brown-DEFAULT mb-4">
            Event Countdown
          </h2>
          <p className="text-gray-600 text-lg">
            Mark your calendars for an evening of timeless melodies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center max-w-4xl mx-auto">
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-6">
            December 25, 2025 • 7:00 PM <br />
            National Arts Center, Colombo
          </p>
          <a
            href="#booking"
            className="inline-flex items-center space-x-2 text-brown-DEFAULT hover:text-brown-dark transition-colors"
          >
            <span>Reserve Your Seat</span>
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
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
