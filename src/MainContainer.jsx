import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blue from '../src/components/Blue';
import Red from '../src/components/Red';
import Pokemon from './components/Pokemon';
import Home from '../src/components/Home';

const MainContainer = () => {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainContainer;