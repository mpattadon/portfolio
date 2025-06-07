import React from 'react';
import PageWrapper from '../components/PageWrapper';

const skills = {
  languages: [
    {
      name: 'Thai',
      description: 'Native fluency in Thai, used in both personal and academic settings for reading, writing, and speaking.',
    },
    {
      name: 'English',
      description: 'Professional fluency in English with strong written and verbal communication skills.',
    },
  ],
  characteristics: [
    {
      name: 'Problem Solving',
      description: 'Able to approach complex issues logically and devise effective, maintainable solutions.',
    },
    {
      name: 'Attention to Detail',
      description: 'Careful in reviewing code and designs to ensure high quality and reliability.',
    },
  ],
  technologies: [
    {
      name: 'JavaScript',
      icon: 'js.svg',
      description: 'Experienced with ES6+, DOM manipulation, asynchronous programming, and frontend development.',
    },
    {
      name: 'React',
      icon: 'react.svg',
      description: 'Built multiple projects using hooks, state management, and component-based architecture.',
    },
    {
      name: 'Python',
      icon: 'python.svg',
      description: 'Used for scripting, data processing, and academic AI/machine learning projects.',
    },
    {
      name: 'Git',
      icon: 'git.svg',
      description: 'Proficient in Git workflows with GitHub and GitLab, including branching, merging, and pull requests.',
    },
    {
      name: 'SQL',
      icon: 'sql.svg',
      description: 'Comfortable writing queries, designing schemas, and interacting with relational databases.',
    },
    {
      name: 'CI/CD',
      icon: 'cicd.svg',
      description: 'Used GitHub Actions and GitLab CI for automating tests and deployments.',
    },
  ],
  ai: [
    {
      name: 'Search Algorithms',
      icon: 'ai-search.svg',
      description: 'Implemented BFS, DFS, A*, and minimax in academic settings using Prolog and Python.',
    },
    {
      name: 'Machine Learning',
      icon: 'ml.svg',
      description: 'Familiar with supervised learning concepts and tools such as scikit-learn and pandas.',
    },
  ],
};

export default function SkillsPage() {
  return (
    <PageWrapper>
      <div className="w-full max-w-6xl mx-auto px-4 pb-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-2">My Skills</h1>
          <div className="w-full border-t border-gray-600 mx-auto"></div>
        </div>

        {/* Languages */}
        <h2 className="text-2xl font-semibold mb-4">Languages</h2>
        <div className="mb-6">
          {skills.languages.map((lang, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-lg font-bold">{lang.name}</h3>
              <p className="text-sm text-gray-300">{lang.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full border-t border-gray-600 mx-auto my-6"></div>

        {/* Characteristics */}
        <h2 className="text-2xl font-semibold mb-4">Characteristics</h2>
        <div className="mb-6">
          {skills.characteristics.map((char, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-lg font-bold">{char.name}</h3>
              <p className="text-sm text-gray-300">{char.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full border-t border-gray-600 mx-auto my-6"></div>

        {/* Technologies */}
        <h2 className="text-2xl font-semibold mb-4">Technology</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {skills.technologies.map((tech, i) => (
            <div key={i} className="flex items-start gap-4">
              <img src={`assets/icons/${tech.icon}`} alt={tech.name} className="w-10 h-10 object-contain mt-1" />
              <div>
                <h3 className="text-lg font-bold">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full border-t border-gray-600 mx-auto my-6"></div>

        {/* AI */}
        <h2 className="text-2xl font-semibold mb-4">AI</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {skills.ai.map((aiSkill, i) => (
            <div key={i} className="flex items-start gap-4">
              <img src={`assets/icons/${aiSkill.icon}`} alt={aiSkill.name} className="w-10 h-10 object-contain mt-1" />
              <div>
                <h3 className="text-lg font-bold">{aiSkill.name}</h3>
                <p className="text-sm text-gray-300">{aiSkill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}