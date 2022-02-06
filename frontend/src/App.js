import React from 'react';
import './App.css';
import "./components/slider.css"
import Navbar from './components/Navbar';
import Services from './pages/Services';
import { BrowserRouter as HashRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Takim from './pages/Takim';
import Galeri from './pages/Galeri';
import Duyuru from './pages/duyuru';
import { ImageSlider } from './components/ImageSlider';
import { SliderData } from './components/ImageData';


function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<ImageSlider slides={SliderData}/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/takim' element={<Takim />} />
          <Route path='/galeri' element={<Galeri />} />
          <Route path='/duyuru' element={<Duyuru />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
