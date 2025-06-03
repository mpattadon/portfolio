import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About_me';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

function App() {
  const [sidebarHovered, setSidebarHovered] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar setSidebarHovered={setSidebarHovered} />
        <div className="flex-1 overflow-auto pl-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;