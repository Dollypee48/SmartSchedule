import { useState, useEffect } from 'react'
import SubjectCard from './SubjectCard'
import EditModal from './EditModal'
import { saveSubjects, getSubjects } from './storage'
import { downloadTimetableAsPDF } from '../utils/downloadPDF'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const periods = ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM']

const dayColors = {
  Monday: 'bg-rose-50',
  Tuesday: 'bg-orange-50',
  Wednesday: 'bg-yellow-50',
  Thursday: 'bg-emerald-50',
  Friday: 'bg-indigo-50',
}

export default function TimetableGrid({ subjects, setSubjects }) {
  const [editing, setEditing] = useState(null)

  // Ensure subjects are loaded on first mount
  useEffect(() => {
    if (!subjects || subjects.length === 0) {
      const saved = getSubjects()
      if (saved && saved.length > 0) {
        setSubjects(saved)
      }
    }
  }, [subjects, setSubjects])

  const handleSaveEdit = (updated) => {
    const updatedSubjects = subjects.map((s) =>
      s.id === updated.id ? updated : s
    )
    setSubjects(updatedSubjects)
    saveSubjects(updatedSubjects)
    setEditing(null)
  }

  const handleDelete = (id) => {
    const updatedSubjects = subjects.filter((s) => s.id !== id)
    setSubjects(updatedSubjects)
    saveSubjects(updatedSubjects)
  }

  if (!subjects || subjects.length === 0) {
    return (
      <div className="text-center p-10 text-gray-600">
        <p className="text-lg font-semibold">Timetable not found!</p>
        <p className="text-sm">Please add subjects to generate the timetable.</p>
      </div>
    )
  }

  return (
    <div className="overflow-auto p-4">
      {editing && (
        <EditModal
          subject={editing}
          onSave={handleSaveEdit}
          onClose={() => setEditing(null)}
        />
      )}

      <div className="flex justify-end mb-4">
        <button
          onClick={() => downloadTimetableAsPDF('timetable-table')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download as PDF
        </button>
      </div>

      <div id="timetable-table">
        <table className="min-w-full border shadow-md bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Time</th>
              {days.map((day) => (
                <th key={day} className="p-2 border">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {periods.map((period) => (
              <tr key={period}>
                <td className="p-2 border bg-gray-50 font-medium">{period}</td>
                {days.map((day) => (
                  <td key={day} className={`p-2 border ${dayColors[day]}`}>
                    {subjects
                      .filter((s) => s.day === day && s.time === period)
                      .map((subject) => (
                        <SubjectCard
                          key={subject.id}
                          subject={subject}
                          onDelete={handleDelete}
                          onEdit={() => setEditing(subject)}
                        />
                      ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
