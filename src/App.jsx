import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AuraLawDemo from './pages/demos/AuraLawDemo';
import KansoCoDemo from './pages/demos/KansoCoDemo';
import OasisWellnessDemo from './pages/demos/OasisWellnessDemo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo/aura-law" element={<AuraLawDemo />} />
        <Route path="/demo/kanso-co" element={<KansoCoDemo />} />
        <Route path="/demo/oasis-wellness" element={<OasisWellnessDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
