import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Timetable from './pages/Timetable'
import Navbar from './components/Navbar'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
