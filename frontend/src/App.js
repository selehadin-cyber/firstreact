import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Takim from './pages/Takim';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/firstreact/' exact element={<Home />} />
          <Route path='/firstreact/services' element={<Services />} />
          <Route path='/firstreact/takim' element={<Takim />} />
          <Route path='/firstreact/sign-up' component={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
