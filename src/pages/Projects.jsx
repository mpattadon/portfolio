const universityProjects = [
  { title: "Coursework 1", desc: "AI Pathfinding in Prolog", link: "/projects/uni/ai-pathfinding" },
  { title: "Coursework 2", desc: "Database Schema Design", link: "/projects/uni/db-schema" },
];

const personalProjects = [
  { title: "Portfolio Site", desc: "Built with React + Tailwind", link: "/projects/personal/portfolio" },
  { title: "Badminton Tracker", desc: "Mobile app for game stats", link: "/projects/personal/badminton" },
];

const ProjectBlock = ({ title, desc, link }) => (
  <a
    href={link}
    className="block p-4 bg-gray-700 rounded-lg shadow-md transform transition-transform hover:scale-105"
  >
    <h2 className="text-xl font-bold">{title}</h2>
    <p>{desc}</p>
  </a>
);

export default function Projects() {
  return (
    <div className="py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4">University Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {universityProjects.map(p => <ProjectBlock key={p.title} {...p} />)}
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Personal Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalProjects.map(p => <ProjectBlock key={p.title} {...p} />)}
        </div>
      </div>
    </div>
  );
}
