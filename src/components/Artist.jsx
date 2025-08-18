/** @format */

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import ArtistImg from "../assets/images/sunil-edirisinghe.jpg";

const Artist = () => {
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

  const achievements = [
    {
      number: "40+",
      label: "Years of Excellence",
      subLabel: "Musical Journey",
    },
    { number: "500+", label: "Concerts", subLabel: "Performances" },
    { number: "50+", label: "Albums", subLabel: "Released" },
    { number: "1M+", label: "Fans", subLabel: "Worldwide" },
  ];

  const countdownItems = [
    { value: timeLeft.days, label: "Days", subLabel: "Remaining" },
    { value: timeLeft.hours, label: "Hours", subLabel: "Left" },
    { value: timeLeft.minutes, label: "Minutes", subLabel: "To Go" },
    { value: timeLeft.seconds, label: "Seconds", subLabel: "Until Show" },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Traditional Sri Lankan border pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-30"></div>

        {/* Traditional corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-amber-300 opacity-20"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-amber-300 opacity-20"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-amber-300 opacity-20"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-amber-300 opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Traditional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Traditional lotus decoration */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
            <div className="w-8 h-8 mx-4 rounded-full border-2 border-amber-600 flex items-center justify-center bg-white">
              <div className="w-3 h-3 bg-amber-600 rounded-full"></div>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-2 font-serif">
            Featured Artist
          </h2>
          <p className="text-lg text-amber-700 italic">
            Master of Sri Lankan Classical Music
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Artist Image - Traditional Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Traditional carved frame effect */}
            <div className="relative p-6 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg shadow-xl">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-amber-600 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-amber-600 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-amber-600 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-amber-600 rounded-br-lg"></div>

              {/* Traditional pattern border */}
              <div className="absolute inset-4 border-2 border-amber-300 rounded opacity-30"></div>

              <motion.div
                className="relative rounded-lg overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={ArtistImg}
                  alt="Sunil Edirisinghe"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              </motion.div>
            </div>

            {/* Traditional badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white border-2 border-amber-600 px-6 py-2 rounded-full shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-amber-600 font-bold text-sm">
                  Master Artist
                </div>
                <div className="text-gray-600 text-xs">Legendary Vocalist</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Artist Info - Traditional Typography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-amber-800 mb-4 font-serif"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Sunil Edirisinghe
              </motion.h3>

              <motion.p
                className="text-lg text-gray-600 italic mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                The Voice of a Generation
              </motion.p>

              <motion.div
                className="flex justify-center lg:justify-start items-center space-x-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-0.5 bg-amber-600"></div>
                <span className="text-amber-700 font-medium">
                  Father of Sri Lankan Classical Music
                </span>
                <div className="w-12 h-0.5 bg-amber-600"></div>
              </motion.div>
            </div>

            <motion.div
              className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-amber-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 leading-relaxed text-center lg:text-left">
                A legendary voice that has touched millions of hearts across
                generations. For over four decades, Sunil Edirisinghe has been
                the cornerstone of Sri Lankan classical music, bringing timeless
                melodies and soulful performances that resonate with the
                cultural heritage of our nation.
              </p>
              <div className="mt-4 pt-4 border-t border-amber-200">
                <p className="text-gray-600 italic text-sm text-center lg:text-left">
                  "Experience an unforgettable evening of soulful melodies and
                  timeless classics with Sri Lanka's most beloved master
                  vocalist."
                </p>
              </div>
            </motion.div>

            {/* Traditional Call-to-Action */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#tickets"
                className="inline-flex items-center justify-center px-8 py-3 bg-amber-700 text-white font-medium rounded-lg shadow-md hover:bg-amber-800 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Tickets</span>
              </motion.a>

              <motion.a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-700 text-amber-700 font-medium rounded-lg hover:bg-amber-50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Learn More</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Traditional Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* Traditional divider */}
          <div className="flex justify-center items-center mb-12">
            <div className="w-24 h-0.5 bg-amber-600"></div>
            <div className="mx-4 w-4 h-4 bg-amber-600 transform rotate-45"></div>
            <div className="w-24 h-0.5 bg-amber-600"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-lg border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="text-3xl font-bold text-amber-700 mb-2">
                  {item.number}
                </div>
                <div className="text-sm text-gray-600 font-medium mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-gray-500 italic">
                  {item.subLabel}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Artist;
