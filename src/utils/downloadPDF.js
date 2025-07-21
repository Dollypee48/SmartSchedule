import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export const downloadTimetableAsPDF = async () => {
  const timetableElement = document.getElementById('timetable-table')

  if (!timetableElement) return alert('Timetable not found!')

  const canvas = await html2canvas(timetableElement, {
    backgroundColor: '#ffffff',
    useCORS: true,
    scale: 2
  })

  const imgData = canvas.toDataURL('image/png')
  const pdf = new jsPDF('landscape', 'pt', 'a4')
  const imgProps = pdf.getImageProperties(imgData)
  const pdfWidth = pdf.internal.pageSize.getWidth()
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
  pdf.save('timetable.pdf')
}