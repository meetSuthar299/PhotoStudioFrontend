import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  selectIsLoading,
  selectProducts,
} from "../../redux/productSlice";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// import portraitImg from "../img/gallery/portrait-img.jpg"
// import printImg from "../img/gallery/print-img.jpg"
// import autoImg from "../img/gallery/auto-img.jpg"
// import editingImg from "../img/gallery/editing-img.jpg"
// import eventImg from "../img/gallery/event-img.jpg"
// import commercialImg from "../img/gallery/Commercia-Img.jpg"

const Gallery = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading)

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

  return (
    <section id='gallery' className='section px-20 pt-28 bg-zinc-300'>
      <h1 className='text-4xl lg:text-6xl leading-tight lg:mb-8 items-center w-full text-center cursor-default'>
        Gallery
      </h1>
      <div>
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <div className="md:masonry-2-col lg:masonry-4-col box-border mx-auto before:box-inherit after:box-inherit pt-10">
            {products?.map((product, index) => (
              <div onClick={() => openLightbox(index)} key={product._id} className="break-inside my-6 bg-gray-200 rounded-lg relative overflow-hidden group cursor-pointer">
                <img
                  className="object-cover w-full rounded-lg transition-transform transform hover:scale-105 hover:brightness-90 cursor-pointer"
                  src={product.image[0]}
                  alt={product.name}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-75 rounded-lg">
                  <div className="text-center text-white p-6">
                    <h1 className="text-xl font-bold mb-4">{product.name}</h1>
                    <p className="text-lg">{product.description}</p>
                  </div>
                </div>
              </div>
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
    </section>
  );
};

export default Gallery;
