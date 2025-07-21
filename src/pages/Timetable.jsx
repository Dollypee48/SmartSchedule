import { useState, useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SubjectForm from '../components/SubjectForm'
import TimetableGrid from '../components/TimetableGrid'

export default function Timetable() {

  const [subjects, setSubjects] = useState(() => {
    const savedSubjects = localStorage.getItem('subjects')
    return savedSubjects ? JSON.parse(savedSubjects) : []
  })

 
  useEffect(() => {
    localStorage.setItem('subjects', JSON.stringify(subjects))
  }, [subjects])

 
  useEffect(() => {
    console.log('Subjects:', subjects)
  }, [subjects])

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Generate Your Weekly Timetable
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          <SubjectForm subjects={subjects} setSubjects={setSubjects} />

          
          <div className="md:col-span-2">
            <TimetableGrid subjects={subjects} setSubjects={setSubjects} />
          </div>
        </div>
      </div>
    </DndProvider>
  )
}
