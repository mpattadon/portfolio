import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About_me';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Sidebar from './components/Sidebar';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
