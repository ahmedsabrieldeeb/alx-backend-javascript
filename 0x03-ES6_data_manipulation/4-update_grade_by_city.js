export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtered = students.filter((objectValue) => objectValue.location === city);

  const result = filtered.map((objectValue) => {
    const newGrade = newGrades.find((grade) => grade.studentId === objectValue.id);
    const newObjectValue = { ...objectValue };// to avoid no-param-reassign for eslint

    if (newGrade !== undefined) newObjectValue.grade = newGrade.grade;
    else newObjectValue.grade = 'N/A';

    return newObjectValue;
  });

  return result;
}
