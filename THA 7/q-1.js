
var student = {
  name: 'Vernika Agarwal',
  sclass: 'VI',
  rollno: 11,
}
var ans = Object.keys(student)
console.log(ans.join(','))

console.log(student)

delete student.rollno

console.log(student)
