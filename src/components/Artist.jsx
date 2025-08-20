/** @format */
import { motion } from "framer-motion";
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
      const difference = concertDate.getTime() - now.getTime();

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

  const countdownItems = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-white ">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Artist Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-full max-w-md aspect-[3/4] bg-gradient-to-tr from-amber-200 via-amber-100 to-orange-100 p-1 rounded-[3rem_1.2rem_2.5rem_1.5rem] border-4 border-amber-600 shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <img
              src={ArtistImg}
              alt="Sunil Edirisinghe"
              className="w-full h-full object-cover rounded-[2.7rem_1rem_2.2rem_1.2rem] transition-all duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 rounded-[2.7rem_1rem_2.2rem_1.2rem] bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Right - Artist Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            className="text-4xl md:text-5xl font-extrabold text-amber-800 transition-all duration-300"
          >
            Sunil Edirisinghe
          </motion.h2>

          <p className="text-amber-700 italic text-lg">
            The Legendary Voice of Sri Lankan Classical Music
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            For over four decades, his voice has touched millions of hearts.
            Sunil Edirisinghe remains a cornerstone of Sri Lankan classical
            music — blending tradition with timeless melodies that resonate
            across generations.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              href="#tickets"
              className="px-8 py-3 rounded-full bg-amber-600 text-white font-semibold shadow-lg hover:bg-amber-700 transition"
            >
              Get Tickets
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              href="#about"
              className="px-8 py-3 rounded-full border-2 border-amber-600 text-amber-700 font-semibold hover:bg-amber-50 transition"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Artist;
