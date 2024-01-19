import React, { useEffect, useState } from 'react';
import Header from "./Components/Header"
import Gallery from './Pages/Gallery/Gallery';
import Portfolio from './Pages/Portfolio/Portfolio'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy';
import { Route, Routes, useLocation, } from "react-router-dom";
import AutomotiveService from './Pages/Services/AutomotiveService';
import CorporateService from './Pages/Services/CorporateService';
import PersonalService from './Pages/Services/PersonalService';
import TermsOfService from './Pages/Legal/TermsOfService';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  return <>
    <Header />
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Home />} />
        <Route path='/automotiveService' element={<AutomotiveService />} />
        <Route path='/corporateService' element={<CorporateService />} />
        <Route path='/personalService' element={<PersonalService />} />
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
