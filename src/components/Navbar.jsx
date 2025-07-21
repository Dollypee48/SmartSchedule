import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const navLinkClass = (path) =>
    `px-4 py-2 rounded ${
      pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-blue-100'
    }`;

  return (
    <nav className="bg-white shadow-md p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">School Scheduler</h1>
        <div className="flex gap-4">
          <Link to="/" className={navLinkClass('/')}>
            Home
          </Link>
          <Link to="/timetable" className={navLinkClass('/timetable')}>
            Timetable
          </Link>
          <Link to="/about" className={navLinkClass('/about')}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
