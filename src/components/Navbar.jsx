import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/" className="hover:text-blue-400">Home</Link>
      <Link to="/projects" className="hover:text-blue-400">Projects</Link>
      <Link to="/about" className="hover:text-blue-400">About</Link>
      <Link to="/contact" className="hover:text-blue-400">Contact</Link>
    </nav>
  );
}
