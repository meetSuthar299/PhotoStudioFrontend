import React, { useEffect } from 'react';
import About from './About';
import Services from "../Services/Services"
import Contact from '../Contact';
import { useLocation } from 'react-router';
import Hero from './Hero';
import { motion } from 'framer-motion';

const Home = () => {
  // scroll animation
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <Hero />
      <About />
      <Services />
      <Contact />
    </motion.div>
  );
};

export default Home;
