import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, User, CreateUndang} from '../pages'
import {Tema1, Tema2} from '../config'

function RouterScreen() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contoh-tema-1/:username/" element={<Tema1/>} />
              <Route path="/:username/:nama/:id" element={<Tema1/>} />
              <Route path="/contoh-tema-2/:username" element={<Tema2/>} />
              <Route path="/posts" element={<User/>} />
              <Route path="/create-undangan" element={<CreateUndang/>} />
              <Route path="/create-undangan/:id" element={<CreateUndang/>} />
          </Routes>
      </Router>
  )
}

export default RouterScreen;
