
import { FaBook, FaUser, FaTrash } from 'react-icons/fa'

export default function SubjectCard({ subject, onEdit, onDelete }) {
  return (
    <div className="bg-blue-100 p-3 rounded-lg shadow mb-1">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold flex items-center gap-2">
            <FaBook /> {subject.name}
          </p>
          <p className="text-sm text-gray-600 flex items-center gap-2">
            <FaUser /> {subject.teacher}
          </p>
          <p className="text-xs text-gray-500">{subject.duration}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button
            onClick={() => onEdit(subject)}
            className="text-sm text-blue-600 hover:text-blue-800"
            title="Edit"
          >
            ✏️
          </button>
          <button
            onClick={() => onDelete(subject.id)}
            className="text-sm text-red-600 hover:text-red-800"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  )
}
