import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import CPProfiles from './components/CPProfiles';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col gap-10 mt-2">
        <section id="about" className="flex flex-col items-center justify-center py-8 px-4 md:px-8">
          <Hero3D />
          <div className="mt-6 text-center max-w-xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">Hi, I'm Priyanshu Kumar</h1>
            <p className="text-lg md:text-xl text-neutral mb-4">Competitive Programmer & Full Stack Developer</p>
            <p className="text-base md:text-lg">Welcome to my portfolio! Explore my projects, skills, and CP profiles below.</p>
          </div>
        </section>
        <Projects />
        <CPProfiles />
        <Skills />
        <Contact />
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>© {new Date().getFullYear()} Priyanshu Kumar. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
}

export default App;
