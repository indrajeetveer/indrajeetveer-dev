const students = [
  { id: 1, name: "Rahul", age: 20, marks: 85, city: "Delhi" },
  { id: 2, name: "Amit", age: 22, marks: 60, city: "Mumbai" },
  { id: 3, name: "Priya", age: 19, marks: 95, city: "Pune" },
  { id: 4, name: "Neha", age: 21, marks: 72, city: "Delhi" },
  { id: 5, name: "Rohan", age: 23, marks: 45, city: "Mumbai" }
];

// // map()
// // Get only the student names.
// let studentName = students.map((e)=>{
//     return e.name
// })
// console.log(studentName);

// // Get only the cities.
//  let cityName = students.map((e)=>{
//     return e.city
// })
// console.log(cityName);

// // Add a new property passed: true/false (passing marks = 50).

// const updatedStudent = students.map(e=>{
//     e.passed = e.marks>=50
//     return e
// })
// console.log(updatedStudent);


// // Increase every student's marks by 5.

// const increment = students.map((e)=> e.marks =e.marks+5);
// console.log(students);

// // Create an array of "Rahul - Delhi" format.

// let newarray = students.map((e)=>{
//     return `${e.name}-${e.city}`
// })
// console.log(newarray);

// // filter()
//  // Students with marks above 80.

// let marks = students.filter((e)=>e.marks>80)
// console.log(marks);

// // Students from Delhi.
// let location = students.filter((e)=> e.city === 'Delhi');
// console.log(location);

// // Students older than 20.
// let age = students.filter((e)=>e.age>20)
// console.log(age);

//  //Students who passed.

console.log('/////////////////////////////////////');

//  let passedStudent = students.filter((e)=> e.passed === true);
//  console.log(passedStudent);
 
 
// // Students whose name starts with "R".

// let check = students.filter((e)=> e.name.startsWith("R"));
// console.log(check);


// //  ########################### find() #####################//

// // Find the first student from Mumbai.
// let checkLocation = students.find((e)=>{
//     return e.city === "Mumbai";
// })
// console.log(checkLocation);

// // Find the first student with marks greater than 90.

// let firstHighestMarks = students.find((e)=>e.marks>90);
// console.log(firstHighestMarks);

// let checkIndex =students.findIndex((e)=> e.name === "Neha")
// console.log(checkIndex);


// // reduce()
////  Calculate the total marks.

// let sum = students.reduce((acc,curr)=> acc+curr.marks,0)
// console.log(sum);

// //  Calculate the average marks.

// let average = sum / students.length
// console.log(average);

// //  Find the student with the highest marks.

// const topStudent = students.reduce((highest, current) => {
//   return current.marks > highest.marks ? current : highest;
// });

// console.log(topStudent);

// // Count how many students passed.

// let passCount = students.reduce((acc, curr) => {
//   return curr.marks >= 50 ? acc + 1 : acc;
// }, 0);

// // Group students by city.

// const groupedByCity = students.reduce((acc, curr) => {
  // Initialize the array for the city if it doesn't exist yet
//   if (!acc[curr.city]) {
//     acc[curr.city] = [];
//   }
//   // Push the current student into their city's array
//   acc[curr.city].push(curr);
//   return acc;
// }, {});

// console.log(groupedByCity);

const students1 = [
  { id: 1, name: "Rahul", age: 20, marks: 85, city: "Delhi" },
  { id: 2, name: "Amit", age: 22, marks: 60, city: "Mumbai" },
  { id: 3, name: "Priya", age: 19, marks: 95, city: "Pune" },
  { id: 4, name: "Neha", age: 21, marks: 72, city: "Delhi" },
  { id: 5, name: "Rohan", age: 23, marks: 45, city: "Mumbai" }
];

let start = students1[0];

for(let i=1;i<=students1.length;i++){
    if(start.city === students1[i].city){
        
    }
}

