export default function StudentTable({ students }) {
  if (students.length === 0) {
    return (
      <div className="card table-container empty-state">
        <p>ยังไม่มีข้อมูลนักศึกษา เพิ่มข้อมูลเพื่อดูตาราง</p>
      </div>
    );
  }

  return (
    <div className="card table-container">
      <h2>ระเบียนประวัตินักศึกษา</h2>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>รหัส / ชื่อ</th>
              <th>การเข้าเรียน</th>
              <th>สอบกลางภาค</th>
              <th>สอบปลายภาค</th>
              <th>คะแนนรวม</th>
              <th>เกรด</th>
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
