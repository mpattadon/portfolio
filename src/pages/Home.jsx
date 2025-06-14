import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { useTiltCard } from '../components/useTiltCard';

function TiltProjectCard({ title, image, path }) {
  const navigate = useNavigate();
  const { cardRef, handleMouseMove, resetTransform } = useTiltCard();

  return (
    <div
      ref={cardRef}
      className="project-card w-72 h-48 bg-gray-800 rounded-lg shadow-md border border-gray-600 overflow-hidden cursor-pointer"
      onClick={() => navigate(path)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      style={{ willChange: 'transform' }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <p className="text-center text-white p-2">{title}</p>
    </div>
  );
}

export default function Home() {
  const projects = [
    {
      title: 'Personal Portfolio',
      image: 'assets/projects/asset1.png',
      path: '/projects/PersonalPortfolio',
    },
    {
      title: 'Blog CMS',
      image: 'assets/projects/asset2.png',
      path: '/projects/Placeholder1',
    },
    {
      title: 'AI Visualizer',
      image: 'assets/projects/asset3.png',
      path: '/projects/Placeholder2',
    },
  ];

  return (
    <PageWrapper>
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-2 text-center">Welcome to My Website!</h1>
      <div className="w-full border-t border-gray-600 mb-10"></div>

      {/* Portrait and Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full mb-12">
        <img src="assets/portrait1.jpg" alt="Portrait" className="w-48 h-48 rounded-full object-cover" />
        <div>
          <h2 className="text-3xl font-bold">Pattadon Chattrakul</h2>
          <p className="text-lg text-gray-300">
            Second Year Computer Science Student at Royal Holloway, University of London
          </p>
        </div>
      </div>

      {/* About Paragraph */}
      <p className="text-center md:text-left text-gray-300 max-w-3xl mb-12">
        I'm a passionate and driven computer science student with interests in software engineering,
        web development, and AI. This site showcases my projects, skills, and ways to get in touch.
      </p>

      {/* Featured Projects */}
      <div className="w-full border-t border-gray-600 mb-6"></div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Featured Projects</h2>
      <div className="w-full flex justify-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <TiltProjectCard
              key={index}
              title={project.title}
              image={project.image}
              path={project.path}
            />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full border-t border-gray-600 mb-6"></div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Featured Skills</h2>
      <div className="flex gap-6 justify-center flex-wrap mb-6">
        {[
          { name: "Java", icon: "java.svg" },
          { name: "Python", icon: "python.svg" },
          { name: "JavaScript", icon: "js.svg" },
          { name: "React", icon: "react.svg" },
          { name: "Git", icon: "git.svg" },
          { name: "SQL", icon: "sql.svg" },
          { name: "CI/CD", icon: "cicd.svg" },
        ].map((skill, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={`assets/icons/${skill.icon}`} alt={skill.name} className="w-14 h-14 object-contain" />
            <span className="mt-2 text-sm text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Resume / CV Downloads */}
      <div className="flex flex-col items-center gap-2 mb-12">
        <a
          href={`${import.meta.env.BASE_URL}assets/Pattadon_Chattrakul_Resume.pdf`}
          download="Pattadon_Chattrakul_Resume.pdf"
          className="text-blue-400 underline hover:text-yellow-400 transition-colors"
        >
          Download My CV
        </a>
        <a
          href={`${import.meta.env.BASE_URL}assets/Pattadon_Chattrakul_Resume.pdf`}
          download="Pattadon_Chattrakul_Resume.pdf"
          className="text-blue-400 underline hover:text-yellow-400 transition-colors"
        >
          Download My Resume
        </a>
      </div>

      {/* Contacts Section */}
      <div className="w-full border-t border-gray-600 mb-6"></div>
      <h2 className="text-2xl font-semibold mb-4 text-center">My Contacts</h2>
      <div className="flex gap-8 justify-center mb-6">
        <a href="https://github.com/mpattadon" target="_blank" rel="noopener noreferrer">
          <img src="assets/icons/gh.svg" alt="GitHub" className="w-16 h-16 object-contain" />
        </a>
        <a href="mailto:mpattadon.c@gmail.com">
          <img src="assets/icons/email.svg" alt="Email" className="w-16 h-16 object-contain" />
        </a>
        <a href="https://www.linkedin.com/in/pattadon-chattrakul-74a713273/" target="_blank" rel="noopener noreferrer">
          <img src="assets/icons/linkedin.svg" alt="LinkedIn" className="w-16 h-16 object-contain" />
        </a>
      </div>
    </PageWrapper>
  );
}