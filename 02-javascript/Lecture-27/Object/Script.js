// const person = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi",
//   isStudent: true
// };

// // Basics Exercises

// // 1. Print the name.
//  console.log(person.name);
 
// // 2. Print the age.
// console.log(person.age);

// // 3. Print the city.
// console.log(person.city);

// // 4. Add a new property country = "India".
// person.country = "India"
// console.log(person);

// // 5. Update the age to 23.

// person.age = 23
// console.log(person);

// // 6. Delete the isStudent property.
// delete person.isStudent;
// console.log(person);

// // 7. Check if the property "city" exists.
// if("city" in person){
//     console.log('True');
// }
// // 8. Check if the property "salary" exists.
// if("salary" in person){
//     console.log('true');
// }else{
//     console.log('false');
// }
// // 9. Print all the keys.
// for(keys in person){
//     console.log(keys); 
// }
// // 10. Print all the values.
// console.log(Object.values(person));

// // 11. Print all key-value pairs.
// console.log(person);

// // 12. Count the total number of properties.
// let count = 0;
// for(let i in person){
//     console.log(i);
//      count++;   
// }
// console.log(count);

//// ########################################################################//

const car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2022,
  price: 4500000
};

// Intermediate Exercises

// 1. Loop through all properties using for...in.
// for(let i in car){
//     console.log(i); 
// }
// 2. Convert the object into an array of keys.
// let arr = new Array(Object.keys(car))
// console.log(arr);

// // 3. Convert the object into an array of values.
// let arr2 = new Array(Object.values(car))
// console.log(arr2);

// // 4. Convert the object into an array of key-value pairs.
// let arr3 = new Array(car)
// console.log(arr3);

// 5. Freeze the object and try changing a property.
// Object.freeze(car);
// car.year = 2020
// car.value = 10;

// 6. Seal the object and test what operations are allowed.
// Object.seal(car);
// car.year = 2020;
// car.value = 10
// console.log(car);

// 7. Clone the object using the spread operator.
// let newobj = {...car}
// console.log(newobj);

// 8. Clone the object using Object.assign().
// let newobj2 = Object.assign(car);
// console.log(newobj2);

// 9. Merge two objects.

// const obj1 = { brand: "Toyota", model: "Camry" };
// const obj2 = { year: 2024, color: "Black" };

// let merge = {...obj1,...obj2}
// console.log(merge);

// let merge2 = Object.assign({},obj1,obj2);
// console.log(merge2);

// 10. Find whether the object is empty.

// const obj = {};

// // Method 1: Using Object.keys() (Most Common)
// const isEmpty = Object.keys(obj).length === 0;

// console.log(isEmpty); // Output: true


/// #######################  Nested Objects  ####################################//

// const student = {
//   name: "Amit",
//   age: 20,
//   address: {
//     city: "Mumbai",
//     state: "Maharashtra",
//     pin: 400001
//   }
// };

// console.log(student.address.city);

// console.log(student.address.pin);

// student.address.state ="goa";

// student.address.countr = "India";

// delete student.pin;
// console.log(student);

// console.log(student?.address?.city);

// for(let i in student.address){
//     console.log(i);
// }


//// #####################  Objects with Arrays  ##############################//

const employee = {
  name: "Neha",
  skills: ["HTML", "CSS", "JavaScript"]
};

console.log(employee.skills);

// employee.skills = "React"
// console.log(employee);

// delete employee.skills.CSS;
// console.log(employee);

if (employee.skills.includes("JavaScript")) {
    console.log("find");
} else {
    console.log("not found");
}

