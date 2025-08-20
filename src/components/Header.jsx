/** @format */

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();

  // Parallax effect for hero content
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "සඳකඩපහන",
      subtitle: "Sunil Edirisinghe",
      description: "An evening of timeless melodies and unforgettable memories",
    },
    {
      url: "https://images.unsplash.com/photo-1521546701210-26d8d085d84a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Experience the Magic",
      subtitle: "A Night to Remember",
      description: "Join us for an enchanting musical journey",
    },
    {
      url: "https://images.unsplash.com/photo-1546707012-c46675f12716?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Join Us Live",
      subtitle: "An Unforgettable Evening",
      description: "Be part of something extraordinary",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const navLinks = [
    { href: "#home", label: "Home", icon: "🏠" },
    { href: "#about", label: "About", icon: "ℹ️" },
    { href: "#events", label: "Events", icon: "🎵" },
    { href: "#tickets", label: "Tickets", icon: "🎫" },
    { href: "#contact", label: "Contact", icon: "📞" },
  ];

  const socials = [
    { name: "facebook", icon: <Facebook size={20} /> },
    { name: "instagram", icon: <Instagram size={20} /> },
    { name: "twitter", icon: <Twitter size={20} /> },
  ];

  return (
    <header className="relative">
      {/* Animated Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 z-50 shadow-lg"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />

      {/* Modern Glassmorphism Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: show ? 0 : -100,
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="fixed top-2 left-4 right-4 z-40 max-w-7xl mx-auto"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
          <div className="px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Animated Logo */}
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#home"
                  className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-200 via-orange-300 to-amber-100 bg-clip-text text-transparent hover:from-white hover:to-amber-200 transition-all duration-300"
                >
                  සඳකඩපහන
                </a>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:block">
                <div className="flex items-center space-x-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative text-white/90 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="flex items-center space-x-2">
                        <span className="text-lg">{link.icon}</span>
                        <span>{link.label}</span>
                      </span>
                      <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Button - Desktop */}
              <div className="hidden lg:block">
                <motion.a
                  href="#tickets"
                  className="relative inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Get Tickets</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white/90 hover:text-white focus:outline-none focus:text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      {isMenuOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden bg-black/30 backdrop-blur-xl border-t border-white/10 rounded-b-2xl overflow-hidden"
              >
                <div className="px-4 py-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span>{link.label}</span>
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4 border-t border-white/10"
                  >
                    <a
                      href="#tickets"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Tickets Now
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Carousel with Parallax */}
      <div className="relative h-screen overflow-hidden">
        {/* Background with parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: "easeOut" }}
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative h-full flex items-center justify-center z-10 text-center text-white px-4"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 1.1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-white via-amber-100 to-orange-200 bg-clip-text text-transparent drop-shadow-2xl">
                  {carouselImages[currentSlide].title}
                </span>
              </motion.h1>

              <motion.h2
                className="text-2xl sm:text-3xl lg:text-5xl font-light text-amber-200 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                {carouselImages[currentSlide].subtitle}
              </motion.h2>

              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              >
                {carouselImages[currentSlide].description}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                <motion.a
                  href="#tickets"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Book Now</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.a>

                <motion.a
                  href="#about"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn More</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Modern Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {carouselImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Sleek Navigation Arrows */}
        <motion.button
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1
            )
          }
          className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white p-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <motion.button
          onClick={() =>
            setCurrentSlide((currentSlide + 1) % carouselImages.length)
          }
          className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white p-3 rounded-full border border-white/20 transition-all duration-300 hover:scale-110"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>

        {/* Floating Social Icons */}
        <motion.div
          className="absolute right-4 lg:right-8 bottom-20 z-20 flex flex-col space-y-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={`#${social.name}`}
              className="w-12 h-12 bg-black/20 backdrop-blur-sm hover:bg-white/20 text-white rounded-full flex items-center justify-center border border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Down Indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-8 z-20 hidden lg:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div> */}
      </div>
    </header>
  );
};

export default Header;
