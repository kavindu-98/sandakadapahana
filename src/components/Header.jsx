/** @format */

import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/concert-banner.jpg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Sandakadapahana Musical Concert
        </h1>
        <h2 className="text-3xl md:text-4xl font-light">Sunil Edirisinghe</h2>
      </motion.div>
    </header>
  );
};

export default Header;
