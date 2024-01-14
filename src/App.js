import React, { useEffect, useState } from 'react';
import Header from "./Components/Header"
import Gallery from './Pages/Gallery/Gallery';
import Portfolio from './Pages/Portfolio/Portfolio'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy';
import { Route, Routes, } from "react-router-dom";
import AutomotiveShotsService from './Pages/Services/AutomotiveShotsService';
import CommercalShotsService from './Pages/Services/CommercalShotsService';
import EditingService from './Pages/Services/EditingService';
import EventShotsService from './Pages/Services/EventShotsService';
import PortraitShotsService from './Pages/Services/PortraitShotsService';
import TermsOfService from './Pages/Legal/TermsOfService';


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
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/privacyPolicy' element={<PrivacyPolicy/>}/>
          <Route path='/termsOfService' element={<TermsOfService/>}/>
        </Routes>
        <Footer />
      </>
    )}
  </>;
};

export default App;
