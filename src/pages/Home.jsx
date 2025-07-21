import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            School Timetable Creator
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Easily organize and visualize your weekly class schedule with a smart, intuitive interface.
          </p>
          <Link
            to="/timetable"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow hover:bg-blue-700 transition"
          >
            Create Your Timetable
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
            Why Use This Tool?
          </h2>
          <div className="grid gap-8 md:grid-cols-3 text-left">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Easy Subject Entry</h3>
              <p className="text-gray-600">Add your subjects, teachers, and assign them to specific time slots in just a few clicks.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Visual Timetable</h3>
              <p className="text-gray-600">View your weekly schedule in a clear, color-coded grid format that’s easy to understand.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Drag & Drop Ready</h3>
              <p className="text-gray-600">Seamlessly rearrange your subjects across the timetable with future drag-and-drop support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Start Organizing Your Week</h2>
          <p className="mb-6 text-blue-100">Take control of your school schedule and boost your productivity today.</p>
          <Link
            to="/timetable"
            className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-gray-600 py-4 mt-auto">
        <p className="text-sm">© {new Date().getFullYear()} School Timetable Creator. Built with ❤️ using React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}
