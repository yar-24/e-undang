import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Index from './tema/tema 1/pages';
import Tema1 from './tema/tema 1/Tema1';

function RouterIndex() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contoh-tema-1/:username" element={<Tema1/>} />
              <Route path="/contoh-tema-1" element={<Index />} />
          </Routes>
      </Router>
  )
}

export default RouterIndex;
