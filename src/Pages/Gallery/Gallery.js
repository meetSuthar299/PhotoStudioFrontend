import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  selectIsLoading,
  selectProducts,
} from "../../redux/Product/productSlice";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AnimatedComponent from "../../Components/AnimatedComponent";

const Gallery = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    setPhotoIndex((photoIndex + 1) % products.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((photoIndex + products.length - 1) % products.length);
  };

  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the context menu from appearing
  };

  return (
    <motion.section
      id='gallery'
      key={'gallery'}
      className='section px-5 lg:px-14 pt-20 bg-zinc-300'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      onContextMenu={handleContextMenu} // Disable right-click
    >
      <Helmet>
        <title>Arktic Gallery</title>
        <meta
          name="description"
          content="Buy high quality prints of Arktic Studios photography, shipped directly to you."
        />
      </Helmet>
      <h1 className='text-3xl lg:text-6xl leading-tight mb-4 lg:mb-8 items-center pt-10'>
        Photo Gallery
      </h1>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="md:masonry-2-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit pb-10">
            {products?.map((product, index) => (
              <AnimatedComponent>
                <div
                  onClick={() => openLightbox(index)}
                  onContextMenu={handleContextMenu} // Disable right-click
                  key={product._id}
                  className="transition-all break-inside my-6 bg-gray-200 relative overflow-hidden group cursor-pointer hover:scale-105"
                >
                  <img
                    className="object-cover w-full transition-transform transform hover:brightness-90 cursor-pointer"
                    src={product.image[0]}
                    alt={product.name}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-75">
                    <div className="text-center text-white p-6">
                      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                      <p className="text-sm font-thin">{product.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedComponent>
            ))}
            {lightboxOpen && (
              <Lightbox
                mainSrc={products[photoIndex].image[0]}
                nextSrc={products[(photoIndex + 1) % products.length].image[0]}
                prevSrc={products[(photoIndex + products.length - 1) % products.length].image[0]}
                onCloseRequest={closeLightbox}
                onMovePrevRequest={prevPhoto}
                onMoveNextRequest={nextPhoto}
                imageCaption={
                  <div className="text-white text-center py-6">
                    <h2 className="text-2xl font-bold mb-4">{products[photoIndex].name}</h2>
                    <p className="text-lg">{products[photoIndex].description}</p>
                  </div>
                }
              />
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Gallery;
