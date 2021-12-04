import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Takim from './pages/Takim';
import Galeri from './pages/Galeri';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/firstreact/' exact element={<Home />} />
          <Route path='/firstreact/services' element={<Services />} />
          <Route path='/firstreact/takim' element={<Takim />} />
          <Route path='/firstreact/galeri' element={<Galeri />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
