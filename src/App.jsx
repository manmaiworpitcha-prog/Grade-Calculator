import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import { calculateGrade } from './utils/gradeCalculator';
import { exportToCsv } from './utils/exportCsv';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (studentData) => {
    const totalScore = studentData.attendance + studentData.midterm + studentData.final;
    const grade = calculateGrade(totalScore);
    
    const newStudent = {
      ...studentData,
      totalScore,
      grade
    };
    
    setStudents(prev => [...prev, newStudent]);
  };

  const handleExport = () => {
    if (students.length === 0) {
      alert('No data to export.');
      return;
    }
    exportToCsv(students);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>ระบบคำนวณเกรด PRO</h1>
          <p>ระบบคำนวณเกรดและจัดการข้อมูลอัตโนมัติ</p>
        </div>
        <button className="btn btn-outline" onClick={handleExport} disabled={students.length === 0}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          ส่งออก CSV
        </button>
      </header>

      <main className="app-main">
        <div className="left-panel">
          <StudentForm onAddStudent={handleAddStudent} />
        </div>
        <div className="right-panel">
          <StudentTable students={students} />
        </div>
      </main>
    </div>
  );
}

export default App;
