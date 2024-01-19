import React, { useEffect, useState } from 'react'

function ParalaxComponent({ children, backgroundImage }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className='relative bg-cover bg-center flex flex-col items-center justify-center h-[40vh] object-fill'
      style={{
        backgroundImage: backgroundImage,
        backgroundPosition: `0% ${scrollY * 0.30}px`, // Adjust the multiplier for desired parallax effect,
        backgroundSize: '100% 100vh',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>
      {children}
    </div>
  )
}

export default ParalaxComponent
