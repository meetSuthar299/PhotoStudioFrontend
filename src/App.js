import React, { useEffect, useState } from 'react';
import Header from "./Components/Header"
import Gallery from './Pages/Gallery/Gallery';
import Portfolio from './Pages/Portfolio/Portfolio'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy';
import { Route, Routes, useLocation, } from "react-router-dom";
import AutomotiveShotsService from './Pages/Services/AutomotiveShotsService';
import CommercalShotsService from './Pages/Services/CommercalShotsService';
import EditingService from './Pages/Services/EditingService';
import EventShotsService from './Pages/Services/EventShotsService';
import PortraitShotsService from './Pages/Services/PortraitShotsService';
import TermsOfService from './Pages/Legal/TermsOfService';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  return <>
    <Header />
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Home />} />
        <Route path='/automotiveService' element={<AutomotiveShotsService />} />
        <Route path='/commercalShotsService' element={<CommercalShotsService />} />
        <Route path='/editingService' element={<EditingService />} />
        <Route path='/eventShotsService' element={<EventShotsService />} />
        <Route path='/PortraitShotsService' element={<PortraitShotsService />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/termsOfService' element={<TermsOfService />} />
      </Routes>
    </AnimatePresence>
    <Footer />
  </>;
};

export default App;
