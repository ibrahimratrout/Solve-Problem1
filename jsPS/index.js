const students = [
  { studentId: 1, name: 'Mohammad' },
  { studentId: 2, name: 'Ahmad' },
  { studentId: 3, name: 'Amin' }
];

const marks = [
  { studentId: 1, mark: 100 },
  { studentId: 2, mark: 80 },
  { studentId: 3, mark: 70 }
];

let newArr = students.map(student =>{
  let markObj= marks.filter(mark=>mark.studentId === student.studentId)[0]
  return Object.assign({},student, markObj)
})

console.log(newArr)


