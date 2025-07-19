import { useState } from 'react'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Store from './pages/Store';
import ConatctUs from './pages/ContactUs';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <div className="container mx-auto px-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<ConatctUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  )
}

export default App
