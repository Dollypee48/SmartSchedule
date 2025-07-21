import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      location.pathname === path
        ? 'text-blue-600 font-semibold'
        : 'text-gray-700 hover:text-blue-600'
    }`

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-700">
              📘 SmartSchedule
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className={linkClass('/')}>
              Home
            </Link>
            <Link to="/timetable" className={linkClass('/timetable')}>
              Generate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
