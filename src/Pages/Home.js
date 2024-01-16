import React, { useEffect } from 'react';
import About from './About/About';
import Services from "../Pages/Services/Services"
import Contact from './Contact';
import { useLocation } from 'react-router';
import Hero from './HeroPage/Hero';

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
  }, [location,])


  return (
    <>
      <Hero/>
      <About />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
