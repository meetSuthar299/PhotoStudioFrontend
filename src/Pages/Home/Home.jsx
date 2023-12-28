import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeItems } from '../../Components/HomeData';
import ScrollIntoView from '../../Components/ScrollToTop';

function Home() {
  const imagePerPage = 4;
  const [next, setNext] = useState(imagePerPage);
  const size = Object.keys(HomeItems).length; // Object Length
  const handleMoreImage = () => {
    setNext(next + imagePerPage);
  };

  return (
    <div className="home-page">
      {HomeItems?.slice(0, next).map((item) => {
        if ((item?.id % 2 === 0) === false) {
          //item id divisible by 2. If the answer is false it is added to the gallery item. If it is true, it is added to the reverse
          return (
            <div className="gallery-item" key={item?.id}>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: 'linear', duration: 1 }}
                src={item?.imgSrc}
                alt={item?.title}
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: '0', opacity: 1 }}
                transition={{ type: 'linear', duration: 1, delay: 0.2 }}
                className="right-side"
              >
                <h3>{item?.type}</h3>
                <h1>{item?.title}</h1>
                <p>{item?.text}</p>
                <Link to="/gallery">
                  <button className="button">View Portfolio</button>
                </Link>
              </motion.div>
            </div>
          );
        } else {
          return (
            <div className="gallery-item-reverse" key={item?.id}>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: 'linear', duration: 1 }}
                src={item?.imgSrc}
                alt={item?.title}
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: '0', opacity: 1 }}
                transition={{ type: 'linear', duration: 1, delay: 0.5 }}
                className="right-side"
              >
                <h3>{item?.type}</h3>
                <h1>{item?.title}</h1>
                <p>{item?.text}</p>
                <Link to="/gallery">
                  <button className="button">View Portfolio</button>
                </Link>
              </motion.div>
            </div>
          );
        }
      })}

      {next < size && (
        <button onClick={handleMoreImage} className="more-button">
          Load More
        </button>
      )}
      <ScrollIntoView />
    </div>
  );
}

export default Home;
