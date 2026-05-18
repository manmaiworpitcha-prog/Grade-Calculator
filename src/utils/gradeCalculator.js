export const calculateGrade = (totalScore) => {
  if (totalScore >= 80) return 'A';
  if (totalScore >= 70) return 'B';
  if (totalScore >= 60) return 'C';
  if (totalScore >= 50) return 'D';
  return 'F';
};
