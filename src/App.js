import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import About from './Pages/About/About';
import Pricing from './Pages/Pricing/Pricing';
import Contact from './Pages/Contact/Contact';
import PhotoPage from './Components/PhotoPage/PhotoPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/gallery/:photo_id' element={<PhotoPage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
