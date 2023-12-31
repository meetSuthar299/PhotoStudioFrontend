import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  selectIsLoading,
  selectProducts,
} from "../redux/productSlice";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ItemCard from "../Components/ItemCard";

import portraitImg from "../img/gallery/portrait-img.jpg"
import printImg from "../img/gallery/print-img.jpg"
import autoImg from "../img/gallery/auto-img.jpg"
import editingImg from "../img/gallery/editing-img.jpg"
import eventImg from "../img/gallery/event-img.jpg"
import commercialImg from "../img/gallery/Commercia-Img.jpg"

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
    <section id='gallery' className='px-20 pt-28 bg-zinc-300'>
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
      {/* /// */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ItemCard
          imgSrc={eventImg}
          firstP="Event Photography"
          secondP="Preserve your special moments from weddings, parties, conferences, and other occasions with professional event photography services. From candid shots to capturing the ambiance, I ensure every important detail is beautifully documented."
        />
        <ItemCard
          imgSrc={portraitImg}
          firstP="Portrait Photography"
          secondP="Capture the essence and personality of individuals, families, and couples through stunning portrait sessions that create cherished memories."
        />
        <ItemCard
          imgSrc={commercialImg}
          firstP="Commercial Photography"
          secondP="Provide high-quality images for businesses, including product photography, corporate headshots, and branding visuals. Create captivating visuals that effectively represent your brand and enhance your marketing efforts."
        />
        <ItemCard
          imgSrc={autoImg}
          firstP="Automotive Photography"
          secondP="Specialize in capturing the elegance, power, and detail of performance cars. From sleek sports cars to vintage classics, I create dynamic images that showcase the unique personality of each vehicle."
        />
        <ItemCard
          imgSrc={editingImg}
          firstP="Photo Editing and Retouching"
          secondP="Provide professional photo editing and retouching services to enhance the visual appeal and quality of images. From color correction to removing imperfections, I ensure the final images meet the highest standards."
        />
        <ItemCard
          imgSrc={printImg}
          firstP="Photo Prints and Custom Framing"
          secondP="I offer high-quality prints of photographs along with custom framing options. Providing clients with a complete service, allowing them to display their favorite images as stunning pieces of art."
        />
      </div>
    </section>
  );
};

export default Gallery;
