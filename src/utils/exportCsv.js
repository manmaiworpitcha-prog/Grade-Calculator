export const exportToCsv = (students) => {
  // Define CSV Headers
  const headers = ['Student ID / Name', 'Attendance (20)', 'Midterm (40)', 'Final (40)', 'Total Score', 'Grade'];
  
  // Map student data to CSV rows
  const rows = students.map(student => [
    student.name,
    student.attendance,
    student.midterm,
    student.final,
    student.totalScore,
    student.grade
  ]);

  // Combine headers and rows
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  // Create a Blob and trigger download
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'student_grades.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
