import React from 'react';
import About from '../Pages/About';
import Gallery from '../Pages/Gallery/Gallery';
import Services from "../Pages/Services/Services"
import Contact from './Contact';

const Home = () => {
  return (
    <>
      {/* <Gallery /> */}
      <About />
      <Services />
      <Contact/>
    </>
  );
};

export default Home;
