/** @format */

import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FAF7F3]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-[#8B7355] mb-10"
        >
          Contact Us
        </motion.h2>

        {/* Form */}
        <div className="max-w-xl mx-auto">
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/50 transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/50 transition"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B7355]/50 transition"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="bg-[#8B7355] text-white px-8 py-3 rounded-xl shadow-sm hover:bg-[#7A6247] transition-colors w-full"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
