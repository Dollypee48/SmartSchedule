import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

export default function SubjectCard({ subject, onEdit, onDelete }) {
  if (!subject) return null;

  return (
    <div className="bg-gray-100 p-3 rounded-lg shadow mb-1">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{subject.name}</h3>
          <p className="text-sm text-gray-600">Teacher: {subject.teacher}</p>
          <p className="text-sm text-gray-600">Periods: {subject.periods}</p>
          <p className="text-sm text-gray-600">
            Time: {subject.startTime} - {subject.endTime}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="p-2 bg-yellow-400 text-white rounded hover:bg-yellow-500"
            title="Edit"
          >
            <FiEdit size={16} />
          </button>
          <button
            onClick={onDelete}
            className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
            title="Delete"
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
