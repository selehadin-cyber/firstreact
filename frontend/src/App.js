import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' component={<Products />} />
          <Route path='/sign-up' component={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
