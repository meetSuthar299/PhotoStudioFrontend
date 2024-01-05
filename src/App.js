import React, { useEffect, useState } from 'react';
import Header from "./Components/Header"
import About from './Pages/About';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Loader from './Components/Loader';

import { BrowserRouter, Route, Routes, } from "react-router-dom";

import Services from "./Pages/Services/Services"
import AutomotiveShotsService from './Pages/Services/AutomotiveShotsService';
import CommercalShotsService from './Pages/Services/CommercalShotsService';
import EditingService from './Pages/Services/EditingService';
import EventShotsService from './Pages/Services/EventShotsService';
import PortraitShotsService from './Pages/Services/PortraitShotsService';



const App = () => {

  //Loader before window loads
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.addEventListener('load', setIsLoading(false))
    return () => {
      window.removeEventListener('load', setIsLoading(false));
    };
  }, []);

  return <>
    {isLoading ? (
      <Loader />
    ) : (
      <>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path='/automotiveService' element={<AutomotiveShotsService />} />
          <Route path='/commercalShotsService' element={<CommercalShotsService />} />
          <Route path='/editingService' element={<EditingService />} />
          <Route path='/eventShotsService' element={<EventShotsService />} />
          <Route path='/PortraitShotsService' element={<PortraitShotsService />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
        <Footer />
      </>
    )}

  </>;
};

export default App;
