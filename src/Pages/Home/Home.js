import React, { useEffect } from 'react';
import About from './About';
import Services from "../Services/Services"
import Contact from '../Contact';
import { useLocation } from 'react-router';
import Hero from './Hero';
import { motion } from 'framer-motion';
import AboutTeam from '../AboutTeam';
import Testimonials from './Testimonials';

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


  const customerReviews = [
    {
      name: 'John Doe',
      review: 'Arktic Studios helped us launch our new product with an outstanding promotional video. Their team is incredibly talented and professional. They listened to our vision and brought it to life in ways we couldn\'t have imagined. Highly recommend!',
      company: 'ABC Tech Solutions',
    },
    {
      name: 'Jane Smith',
      review: 'Working with Arktic Studios was a game-changer for our brand. Their attention to detail and creative flair elevated our marketing efforts to new heights. We saw an immediate impact on engagement and brand awareness. Thank you for your exceptional work!',
      company: 'XYZ Fashion',
    },
    {
      name: 'Jane Smith',
      review: 'Working with Arktic Studios was a game-changer for our brand. Their attention to detail and creative flair elevated our marketing efforts to new heights. We saw an immediate impact on engagement and brand awareness. Thank you for your exceptional work!',
      company: 'XYZ Fashion',
    },
    {
      name: 'Jane Smith',
      review: 'Working with Arktic Studios was a game-changer for our brand. Their attention to detail and creative flair elevated our marketing efforts to new heights. We saw an immediate impact on engagement and brand awareness. Thank you for your exceptional work!',
      company: 'XYZ Fashion',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <Hero />
      <About />
      <Services />
      {/* <Testimonials reviews={customerReviews} /> */}
      <Contact />
    </motion.div>
  );
};

export default Home;
