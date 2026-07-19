// ## Objects in JavaScript
// Objects store data in the form of key–value pairs.

let student = {
  name: "Anubhav",
  age: 24,
  course: "B.Tech"
};

// ### Two Ways to Create Objects

// 1. Object Literal
let user = {
  name: "Shery",
  age: 22
};

// 2. Object Constructor
let person = new Object();
person.name = "Rohan";
person.age = 25;

// ### Accessing Object Properties

let car = {
  brand: "BMW",
  color: "Black"
};

// 1. Dot Notation
console.log(car.brand); // BMW

// 2. Bracket Notation
console.log(car["color"]); // Black

// ### Deleting Property

delete car.color;
console.log(car); // { brand: "BMW" }

// ### Nested Objects

let studentData = {
  name: "Anubhav",
  marks: {
    math: 95,
    science: 90
  }
};

console.log(studentData.marks.math); // 95