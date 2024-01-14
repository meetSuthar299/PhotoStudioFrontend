import React, { useEffect, useState } from 'react'
import image1 from '../../img/gallery/auto-img.jpg'
import image2 from '../../img/gallery/nightDiaries.jpg'
import image3 from '../../img/gallery/print-img.jpg'

function AutomotiveShotsService() {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(() => {
    const next = (currentSlide + 1) % images.length;
    const id = setTimeout(() => setCurrentSlide(next), 3000);
    return () => clearTimeout(id);
  }, [currentSlide, images.length]);

  const moveSlide = (step) => {
    let newSlide = currentSlide + step;
    if (newSlide < 0) newSlide = images.length - 1;
    else if (newSlide >= images.length) newSlide = 0;
    setCurrentSlide(newSlide);
  };
  const images = [
    image1,image2,image3
  ];
  return (
    <div className='section'>
      <div className="carousel relative overflow-hidden">
        <div className="carousel-inner relative w-full overflow-hidden">
          {images.map((img, index) => (
            <div key={img} className={`carousel-item absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
              <img src={img} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white text-3xl p-2" onClick={() => moveSlide(-1)}>&#10094;</button>
        <button className="carousel-control-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white text-3xl p-2" onClick={() => moveSlide(1)}>&#10095;</button>
      </div>
    </div>
  )
}

export default AutomotiveShotsService
