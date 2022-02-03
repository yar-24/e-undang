import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import {Tema1, Tema2} from './tema/';

function RouterIndex() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contoh-tema-1/:username" element={<Tema1/>} />
              <Route path="/contoh-tema-2/:username" element={<Tema2/>} />
          </Routes>
      </Router>
  )
}

export default RouterIndex;
