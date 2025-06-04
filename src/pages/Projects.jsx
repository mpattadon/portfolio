import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const dummyProjects = [
  {
    title: 'Personal Portfolio',
    image: '/assets/asset1.png',
    path: '/projects/personal-portfolio',
    type: 'personal',
  },
  {
    title: 'Blog CMS',
    image: '/assets/personal2.png',
    path: '/projects/blog-cms',
    type: 'personal',
  },
  {
    title: 'University Database Project',
    image: '/assets/uni1.png',
    path: '/projects/uni-database',
    type: 'university',
  },
  {
    title: 'AI Pathfinding Visualizer',
    image: '/assets/uni2.png',
    path: '/projects/ai-visualizer',
    type: 'university',
  },
];

function ProjectCard({ title, image, path }) {
  const cardRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -15; // Smoother
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
      className="project-card w-64 h-64 bg-gray-800 rounded-lg shadow-md border border-gray-600 overflow-hidden cursor-pointer"
      onClick={() => navigate(path)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="text-center p-2 text-white text-lg font-semibold">{title}</div>
    </div>
  );
}


export default function Projects() {
  const personalProjects = dummyProjects.filter(p => p.type === 'personal');
  const universityProjects = dummyProjects.filter(p => p.type === 'university');

  return (
    <div className="min-h-screen bg-gray-900 text-white pl-16 flex justify-center">
      <div className="w-[calc(100vw-4rem)] py-10 px-4 flex flex-col items-center gap-16">
        <div className="text-center w-full max-w-4xl">
          <h1 className="text-4xl font-extrabold mb-2">Projects</h1>
          <div className="border-t border-gray-600 w-full mx-auto mb-10"></div>
        </div>

        {/* Personal Projects Section */}
        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6">Personal Projects</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {personalProjects.map((proj, i) => (
              <ProjectCard key={i} title={proj.title} image={proj.image} path={proj.path} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-600 w-full max-w-6xl"></div>

        {/* University Projects Section */}
        <section className="w-full max-w-6xl">
          <h2 className="text-2xl font-semibold mb-6">University Projects</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {universityProjects.map((proj, i) => (
              <ProjectCard key={i} title={proj.title} image={proj.image} path={proj.path} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
