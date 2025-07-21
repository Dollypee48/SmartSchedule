import { useState } from 'react'

export default function EditModal({ subject, onSave, onClose }) {
  const [form, setForm] = useState({
    ...subject,
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div
        className="absolute inset-0 "
        onClick={onClose}
      ></div>

      <div className="relative z-10 bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Edit Subject</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-sm mb-1">Subject Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium text-sm mb-1">Teacher</label>
            <input
              type="text"
              name="teacher"
              value={form.teacher}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-medium text-sm mb-1">Day</label>
              <select
                name="day"
                value={form.day}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              >
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block font-medium text-sm mb-1">Time</label>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
              >
                {['8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM'].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
