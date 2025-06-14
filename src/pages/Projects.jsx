import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { useTiltCard } from '../components/useTiltCard';

const Projects = [
  {
    title: 'Personal Portfolio',
    description: 'A personal site showcasing my work and skills.',
    image: 'assets/projects/asset1.png',
    path: '/projects/PersonalPortfolio',
    type: 'personal',
  },
  {
    title: 'Test',
    description: 'test',
    image: 'assets/projects/asset2.png',
    path: '/projects/Placeholder1',
    type: 'personal',
  },
  {
    title: 'Test',
    description: 'test',
    image: 'assets/projects/asset3.png',
    path: '/projects/Placeholder2',
    type: 'university',
  },
  {
    title: 'Test',
    description: '',
    image: 'assets/projects/asset4.png',
    path: '/projects/Placeholder3',
    type: 'university',
  },
];

function ProjectCard({ title, description, image, path }) {
  const navigate = useNavigate();
  const { cardRef, handleMouseMove, resetTransform } = useTiltCard();

  return (
    <div
      ref={cardRef}
      className="project-card w-96 h-96 bg-gray-800 rounded-lg shadow-md border border-gray-600 overflow-hidden cursor-pointer"
      onClick={() => navigate(path)}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
      style={{ willChange: 'transform' }}
    >
      <img
        src={`${import.meta.env.BASE_URL}${image}`}
        alt={title}
        className="w-full h-56 object-cover"
      />
      <div className="px-4 py-2 text-white">
        <h3 className="text-lg font-bold text-center">{title}</h3>
        {typeof description === 'string' && (
          <p className="text-sm text-gray-300 text-center mt-1">
            {description.trim() === '' ? '\u00A0' : description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const personalProjects = Projects.filter(p => p.type === 'personal');
  const universityProjects = Projects.filter(p => p.type === 'university');

  return (
    <PageWrapper>
      <div className="w-full max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-2">Projects</h1>
        <div className="w-full border-t border-gray-600 mb-10"></div>
      </div>

      {/* Personal Projects Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6">Personal Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {personalProjects.map((proj, i) => (
            <ProjectCard
              key={i}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              path={proj.path}
            />
          ))}
        </div>
      </section>

      <div className="border-t border-gray-600 w-full max-w-6xl my-10"></div>

      {/* University Projects Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold mb-6">University Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {universityProjects.map((proj, i) => (
            <ProjectCard
              key={i}
              title={proj.title}
              description={proj.description}
              image={proj.image}
              path={proj.path}
            />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}