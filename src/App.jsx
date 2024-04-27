import React from 'react'
import Home from './pages/home'
import Career from './pages/career'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Mobile from './components/mobile-nav'


import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  
  return (
    <Router>

      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Careers" element={<Career />} />
          </Routes>
          <Footer />
    </Router>
  )
}

