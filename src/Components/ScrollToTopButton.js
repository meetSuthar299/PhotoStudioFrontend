import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TbArrowAutofitUp } from "react-icons/tb";

const ScrollToTopButton = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 700;

      if (shouldShow !== isVisible) {
        setIsVisible(shouldShow);
        controls.start({opacity: shouldShow ? 1 : 0,  y: shouldShow ? 0 : 200});
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, isVisible]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <motion.button
      className="text-black text-2xl md:text-4xl fixed bottom-10 right-10 z-50 transition-all p-3 bg-white rounded-full shadow-xl border border-black"
      initial={{ opacity: 0, y: 100}}
      animate={controls}
      exit={{ opacity: 0, y: 100 }}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
    >
      <TbArrowAutofitUp />
    </motion.button>
  );
};

export default ScrollToTopButton;
