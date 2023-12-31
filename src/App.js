import React from 'react';
import Header from "./Components/Header"
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';


const App = () => {
  return <>
      <Header />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <Footer/>
  </>;
};

export default App;
