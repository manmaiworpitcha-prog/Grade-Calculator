export default function StudentTable({ students }) {
  if (students.length === 0) {
    return (
      <div className="card table-container empty-state">
        <p>No student data yet. Add a student to see the table.</p>
      </div>
    );
  }

  return (
    <div className="card table-container">
      <h2>Student Records</h2>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>ID / Name</th>
              <th>Attendance</th>
              <th>Midterm</th>
              <th>Final</th>
              <th>Total Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="font-medium">{student.name}</td>
                <td>{student.attendance}</td>
                <td>{student.midterm}</td>
                <td>{student.final}</td>
                <td className="font-bold text-primary">{student.totalScore}</td>
                <td>
                  <span className={`grade-badge grade-${student.grade.toLowerCase()}`}>
                    {student.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
