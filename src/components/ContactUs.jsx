/** @format */

import { motion } from "framer-motion";
import { Phone, Mail, Users } from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-[#FAF7F3]"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center text-[#8B7355] mb-4"
        >
          Contact Us
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-[#8B7355]/80 mb-12"
        >
          Get in touch with our team
        </motion.p>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8B7355]/10"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#8B7355] mb-4">
                  Call Us
                </h3>
                <motion.a
                  href="tel:+94742699814"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +94 74 269 9814
                </motion.a>
                <p className="text-[#8B7355]/70 mt-4 text-sm">
                  Available 24/7 for event inquiries
                </p>
              </div>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#8B7355]/10"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#8B7355] mb-4">
                  Email Us
                </h3>
                <motion.a
                  href="mailto:trioslk3@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  trioslk3@gmail.com
                </motion.a>
                <p className="text-[#8B7355]/70 mt-4 text-sm">
                  Send us your event details and requirements
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
