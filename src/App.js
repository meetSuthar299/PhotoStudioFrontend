import React, { useEffect, useState } from 'react';
import Header from "./Components/Header/Header"
import Gallery from './Pages/Gallery/Gallery';
import Portfolio from './Pages/Portfolio/Portfolio'
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AutomotiveService from './Pages/Services/AutomotiveService';
import BusinessService from './Pages/Services/BusinessService';
import PersonalService from './Pages/Services/PersonalService';
import TermsOfService from './Pages/Legal/TermsOfService';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Login from './Pages/Auth/login';
import AboutTeam from './Pages/AboutTeam';
import RequestAccount from './Pages/Auth/RequestAccount';
import Account from './Pages/Account/Account';
import SoftwareSolutions from './Pages/Services/SoftwareSolutions';

const App = () => {
  // const location = useLocation();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutTeam" element={<AboutTeam />} />
        <Route path="/automotiveService" element={<AutomotiveService />} />
        <Route path="/businessService" element={<BusinessService />} />
        <Route path="/personalService" element={<PersonalService />} />
        <Route path="/software" element={<SoftwareSolutions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/account"
          element={<Account />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/requestAccount" element={<RequestAccount />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
  // return <>
  //   <Header />
  //   <AnimatePresence>
  //     <Routes location={location} key={location.pathname}>
  //       <Route path={"/"} element={<Home />} />
  //       <Route path='/aboutTeam' element={<AboutTeam />} />
  //       <Route path='/automotiveService' element={<AutomotiveService />} />
  //       <Route path='/businessService' element={<BusinessService />} />
  //       <Route path='/personalService' element={<PersonalService />} />
  //       <Route path='/gallery' element={<Gallery />} />
  //       <Route path='/portfolio' element={<Portfolio />} />
  //       <Route path='/login' element={<Login/>} />
  //       <Route path='/requestAccount' element={<RequestAccount/>} />
  //       <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
  //       <Route path='/termsOfService' element={<TermsOfService />} />
  //     </Routes>
  //   </AnimatePresence>
  //   <Footer />

  // </>;
};
//  
export default App;
