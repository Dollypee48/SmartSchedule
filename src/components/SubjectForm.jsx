import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { saveSubjects } from './storage'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const times = ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM']

export default function SubjectForm({ subjects, setSubjects }) {
  const [form, setForm] = useState({
    name: '',
    teacher: '',
    day: 'Monday',
    time: '8AM',
    duration: '1hr',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSubject = { ...form, id: uuidv4() }
    const updated = [...subjects, newSubject]
    setSubjects(updated)
    saveSubjects(updated)
    setForm({
      name: '',
      teacher: '',
      day: 'Monday',
      time: '8AM',
      duration: '1hr',
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-200 transition-all"
    >
      <h3 className="text-2xl font-bold text-blue-700 mb-4">📘 Add New Subject</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Subject Name</label>
          <input
            name="name"
            placeholder="e.g., Mathematics"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Teacher</label>
          <input
            name="teacher"
            placeholder="e.g., Mr. Johnson"
            value={form.teacher}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Day</label>
            <select
              name="day"
              value={form.day}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300"
            >
              {days.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Start Time</label>
            <select
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300"
            >
              {times.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Duration</label>
            <select
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300"
            >
              <option>30min</option>
              <option>1hr</option>
              <option>1.5hr</option>
              <option>2hr</option>
              <option>3hr</option>
              <option>4hr</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
        >
          ➕ Add Subject
        </button>
      </div>
    </form>
  )
}
