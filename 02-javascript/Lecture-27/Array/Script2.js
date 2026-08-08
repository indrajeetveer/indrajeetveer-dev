const students = [
  { id: 1, name: "Rahul", age: 20, marks: 85, city: "Delhi" },
  { id: 2, name: "Amit", age: 22, marks: 60, city: "Mumbai" },
  { id: 3, name: "Priya", age: 19, marks: 95, city: "Pune" },
  { id: 4, name: "Neha", age: 21, marks: 72, city: "Delhi" },
  { id: 5, name: "Rohan", age: 23, marks: 45, city: "Mumbai" }
];

// // map()
// // Get only the student names.
let studentName = students.map((e)=>{
    return e.name
})
console.log(studentName);

// // Get only the cities.
 let cityName = students.map((e)=>{
    return e.city
})
console.log(cityName);

// // Add a new property passed: true/false (passing marks = 50).

const updatedStudent = students.map(e=>{
    e.passed = e.marks>=50
    return e
})
console.log(updatedStudent);


// // Increase every student's marks by 5.
// // Create an array of "Rahul - Delhi" format.