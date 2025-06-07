import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function TiltProjectCard({ title, image, path }) {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -15;
    const rotateY = ((x / rect.width) - 0.5) * 15;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTransform = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transition = 'transform 0.3s ease-out';
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

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
    <div className="min-h-screen bg-gray-900 text-white pl-0 md:pl-16">
      <div className="w-[calc(100vw-4rem)] mx-auto px-4 py-10 flex flex-col items-center">
        <div className="w-full max-w-6xl">
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
          <h2 className="text-2xl font-semibold mb-4 text-center">My Skills</h2>
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
              className="text-yellow-400 underline hover:text-yellow-300"
            >
              Download My CV
            </a>
            <a
              href={`${import.meta.env.BASE_URL}assets/Pattadon_Chattrakul_Resume.pdf`}
              download="Pattadon_Chattrakul_Resume.pdf"
              className="text-yellow-400 underline hover:text-yellow-300"
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
        </div>
      </div>
    </div>
  );
}
