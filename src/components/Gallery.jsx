/** @format */

import { motion } from "framer-motion";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";

import Img3 from "../assets/images/img3.jpg";

import Img4 from "../assets/images/img4.jpg";

import Img5 from "../assets/images/img5.jpg";
import Img6 from "../assets/images/img6.jpg";
import Img7 from "../assets/images/img7.jpg";

const Gallery = () => {
  const images = [
    { src: Img1, caption: "Sandakadapahana", size: "large" },
    { src: Img2, caption: "Sandakadapahana", size: "medium" },
    { src: Img3, caption: "Sandakadapahana", size: "medium" },
    { src: Img4, caption: "Sandakadapahana", size: "large" },
    { src: Img5, caption: "Sandakadapahana", size: "medium" },
    { src: Img6, caption: "Sandakadapahana", size: "large" },
    { src: Img7, caption: "Sandakadapahana", size: "large" },
    { src: Img1, caption: "Sandakadapahana", size: "medium" },
  ];

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2 h-96";
      case "medium":
        return "col-span-1 row-span-1 h-48";
      case "small":
        return "col-span-1 row-span-1 h-32";
      default:
        return "col-span-1 row-span-1 h-48";
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-[#8B7355] mb-16"
        >
          Gallery
        </motion.h2>

        {/* Modern Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-min">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${getSizeClasses(
                img.size
              )}`}
              whileHover={{ y: -5 }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />

              {/* Modern overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium drop-shadow-lg">
                    {img.caption}
                  </p>
                </div>
              </div>

              {/* Subtle border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Optional: View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View More Photos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
