/** @format */

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Navbar,
  Nav,
  Container,
  Carousel,
  Row,
  Col,
  ProgressBar,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
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
      url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "සඳකඩපහන",
      subtitle: "Sunil Edirisinghe",
    },
    {
      url: "https://images.unsplash.com/photo-1521546701210-26d8d085d84a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Experience the Magic",
      subtitle: "A Night to Remember",
    },
    {
      url: "https://images.unsplash.com/photo-1546707012-c46675f12716?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Join Us Live",
      subtitle: "An Unforgettable Evening",
    },
  ];

  const galleryImages = [
    "https://source.unsplash.com/800x600/?concert",
    "https://source.unsplash.com/800x600/?music",
    "https://source.unsplash.com/800x600/?singer",
    "https://source.unsplash.com/800x600/?band",
    "https://source.unsplash.com/800x600/?stage",
    "https://source.unsplash.com/800x600/?performance",
  ];

  return (
    <header>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      />

      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className={`py-3 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ marginTop: "4px" }}
      >
        <Container>
          <Navbar.Brand href="#home" className="font-bold text-xl">
            සඳකඩපහන
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" variant="tabs">
              <Nav.Link
                href="#home"
                className="nav-link"
                active={
                  window.location.hash === "#home" || !window.location.hash
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className="nav-link"
                active={window.location.hash === "#about"}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#events"
                className="nav-link"
                active={window.location.hash === "#events"}
              >
                Events
              </Nav.Link>
              <Nav.Link
                href="#tickets"
                className="nav-link"
                active={window.location.hash === "#tickets"}
              >
                Tickets
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="nav-link"
                active={window.location.hash === "#contact"}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel className="h-screen">
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <motion.div
                className="relative h-full flex items-center justify-center z-10 text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    {image.title}
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-light">
                    {image.subtitle}
                  </h2>
                </div>
              </motion.div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Gallery Section */}
      {/* <section className="py-16 bg-gray-100">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
          <Row className="g-4">
            {galleryImages.map((image, index) => (
              <Col key={index} xs={12} sm={6} md={4}>
                <motion.div
                  className="overflow-hidden rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}
    </header>
  );
};

export default Header;
