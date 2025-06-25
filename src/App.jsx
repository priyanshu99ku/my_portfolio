import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hero3D from './components/Hero3D';
import Home from './components/Home';
import CPProfiles from './components/CPProfiles';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-gold flex flex-col">
      <Hero3D />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-10 mt-2 md:ml-64 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cp-profiles" element={<CPProfiles />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>© 2025 Priyanshu Kumar. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;
