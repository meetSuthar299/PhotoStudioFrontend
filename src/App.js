import React from 'react';
import Header from "./Components/Header"
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';


const App = () => {
  return <>
      <Header />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer/>
  </>;
};

export default App;
