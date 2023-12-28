import { motion } from 'framer-motion';
import React from 'react';
import { PricingItems } from '../../Components/PricingData';
import ScrollIntoView from '../../Components/ScrollToTop';

function Pricing() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'linear', duration: 1, delay: 0.2 }}
        className="pricing-page"
      >
        {PricingItems.map((item, index) => (
          <div className="price" key={index}>
            <img src={item.imgSrc} alt="" />
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: 'tween', duration: 1, delay: 1 }}
              className="price-items"
            >
              <h1>{item.title}</h1>
              <div className="price-item">
                <h2>Photos</h2>
                <h3>{item.photos}</h3>
              </div>
              <div className="price-item">
                <h2>Processing</h2>
                <h3>Retouch</h3>
              </div>
              <div className="price-item">
                <h2>Type Of Camera</h2>
                <h3>Professional</h3>
              </div>
              <div className="price-item">
                <h2>Resolution</h2>
                <h3>{item.resolution}</h3>
              </div>
              <div className="price-item">
                <h2>Term</h2>
                <h3>14 Days</h3>
              </div>

              <h1>{item.price}</h1>
              <button>Explore</button>
            </motion.div>
          </div>
        ))}
      </motion.div>
      <ScrollIntoView />
    </>
  );
}

export default Pricing;
