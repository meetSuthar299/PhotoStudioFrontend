import React, { useEffect, useState } from 'react';
import Header from "./Components/Header/Header"
import Gallery from './Pages/Gallery/Gallery';
import Portfolio from './Pages/Portfolio/Portfolio'
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy';
import { Route, Routes, useLocation, } from "react-router-dom";
import AutomotiveService from './Pages/Services/AutomotiveService';
import BusinessService from './Pages/Services/BusinessService';
import PersonalService from './Pages/Services/PersonalService';
import TermsOfService from './Pages/Legal/TermsOfService';
import { AnimatePresence } from 'framer-motion';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Login from './Pages/Auth/Login';

const App = () => {
  const location = useLocation();
  return <>
    <Header />
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Home />} />
        <Route path='/automotiveService' element={<AutomotiveService />} />
        <Route path='/businessService' element={<BusinessService />} />
        <Route path='/personalService' element={<PersonalService />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
        <Route path='/termsOfService' element={<TermsOfService />} />
      </Routes>
    </AnimatePresence>
    <Footer />
    <ScrollToTopButton/>
  </>;
};

export default App;
