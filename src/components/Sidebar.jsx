
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBriefcase } from 'react-icons/fa';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About', path: '/about', icon: <FaUser /> },
    { name: 'Projects', path: '/projects', icon: <FaProjectDiagram /> },
    { name: 'Experience', path: '/experience', icon: <FaBriefcase /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <div
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`fixed top-0 right-0 h-full bg-gray-800 shadow-md z-50 transition-all duration-300 ${expanded ? 'w-48' : 'w-16'
        }`}
    >
      <ul className="flex flex-col items-center space-y-6 mt-10">
        {navItems.map((item) => (
          <li key={item.name} className={`w-full text-center`}>
            <Link
              to={item.path}
              className={`flex items-center justify-${expanded ? 'start' : 'center'} px-4 py-2 text-white hover:text-yellow-400 ${location.pathname === item.path ? 'text-yellow-400' : ''
                }`}
            >
              <span className="text-lg">{item.icon}</span>
              {expanded && <span className="ml-4">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
