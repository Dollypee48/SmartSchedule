import React from 'react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">About This App</h1>
      <p className="mb-4">
        The <strong>School Timetable Generator</strong> is a simple and flexible React-based application designed to help students, teachers, or school admins organize their weekly subject schedules efficiently.
      </p>
      <p className="mb-4">
        With this app, you can:
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>Add and manage subjects with assigned teachers and time slots</li>
          <li>Generate a clear visual timetable by day and time</li>
          <li>Edit or delete subjects easily</li>
          <li>Store your schedule in your browser using localStorage</li>
        </ul>
      </p>
      <p>
        Built using <strong>React</strong> and <strong>Tailwind CSS</strong>, this tool is lightweight, responsive, and beginner-friendly — perfect for learning or light productivity use.
      </p>
    </div>
  );
}
