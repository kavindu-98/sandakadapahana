/** @format */

import { motion } from "framer-motion";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";

import Img3 from "../assets/images/img3.jpg";

import Img4 from "../assets/images/img4.jpg";

import Img5 from "../assets/images/img5.jpg";

const Gallery = () => {
  const images = [
    { src: Img1, caption: "Previous Concert 01" },
    { src: Img2, caption: "Previous Concert 02" },
    { src: Img3, caption: "Previous Concert 03" },
    { src: Img4, caption: "Previous Concert 04" },
    { src: Img5, caption: "Previous Concert 05" },
    { src: Img5, caption: "Previous Concert 06" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#8B7355] mb-12"
        >
          Previous Concerts
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl shadow-sm group"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Calm overlay caption */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-medium tracking-wide">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
