import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About_me';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Sidebar from './components/Sidebar';

//Imports for projeccts
import PersonalPortfolio from './pages/projects/PersonalPortfolio';
import Placeholder1 from './pages/projects/Placeholder1';
import Placeholder2 from './pages/projects/Placeholder2';
import Placeholder3 from './pages/projects/Placeholder3';

function App() {
  const [sidebarHovered, setSidebarHovered] = useState(false);

  return (
    <Router>
      <Sidebar setSidebarHovered={setSidebarHovered} />
      <div
        className={`min-h-screen transition-all duration-300 ${sidebarHovered ? 'blur-sm' : ''
          } pl-16`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          {/* Fallback route for any unmatched paths */}
          <Route path="*" element={<Home />} />
          {/* Projects path */}
          <Route path="/projects/PersonalPortfolio" element={<PersonalPortfolio />} />
          <Route path="/projects/Placeholder1" element={<Placeholder1 />} />
          <Route path="/projects/Placeholder2" element={<Placeholder2 />} />
          <Route path="/projects/Placeholder3" element={<Placeholder3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
