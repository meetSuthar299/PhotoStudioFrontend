import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoItems } from '../../Components/PhotosData';
import ScrollIntoView from '../../Components/ScrollToTop';

function Gallery() {
  const galleryImagePerPage = 6;
  const [count, setCount] = useState(galleryImagePerPage);
  const size = Object.keys(PhotoItems).length;
  const handleMoreImage = () => {
    setCount(count + galleryImagePerPage);
  };

  return (
    <>
      <div className="photo-gallery">
        {PhotoItems.slice(0, count).map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: 'linear', duration: 1, delay: 0.2 }}
            className="photo-gallery-item"
            key={item?.photo_id}
          >
            <img src={item?.imgSrc} alt={item?.title} />
            <div className="details">
              <h3>{item?.type}</h3>
              <h1>{item?.title}</h1>
              <Link to={`/gallery/${item?.photo_id}`}>
                <button>View Image</button>
              </Link>
            </div>
          </motion.div>
        ))}

        {count < size && (
          <button onClick={handleMoreImage} className="more-image">
            Load More
          </button>
        )}
      </div>
      <ScrollIntoView />
    </>
  );
}

export default Gallery;
