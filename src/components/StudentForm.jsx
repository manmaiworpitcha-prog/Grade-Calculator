import { useState } from 'react';

export default function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    midterm: '',
    final: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert scores to numbers
    const attendanceScore = Number(formData.attendance);
    const midtermScore = Number(formData.midterm);
    const finalScore = Number(formData.final);

    if (formData.name && attendanceScore >= 0 && midtermScore >= 0 && finalScore >= 0) {
      onAddStudent({
        name: formData.name,
        attendance: attendanceScore,
        midterm: midtermScore,
        final: finalScore
      });
      // Reset form
      setFormData({ name: '', attendance: '', midterm: '', final: '' });
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div className="card form-container">
      <h2>เพิ่มข้อมูลนักศึกษา</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ชื่อ / รหัสนักศึกษา</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="เช่น สมชาย (12345)" 
            required 
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>การเข้าเรียน (0-20)</label>
            <input 
              type="number" 
              name="attendance" 
              value={formData.attendance} 
              onChange={handleChange} 
              min="0" 
              max="20" 
              required 
            />
          </div>
          <div className="form-group">
            <label>สอบกลางภาค (0-40)</label>
            <input 
              type="number" 
              name="midterm" 
              value={formData.midterm} 
              onChange={handleChange} 
              min="0" 
              max="40" 
              required 
            />
          </div>
          <div className="form-group">
            <label>สอบปลายภาค (0-40)</label>
            <input 
              type="number" 
              name="final" 
              value={formData.final} 
              onChange={handleChange} 
              min="0" 
              max="40" 
              required 
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">เพิ่มข้อมูลและคำนวณเกรด</button>
      </form>
    </div>
  );
}
