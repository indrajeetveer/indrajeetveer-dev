// learn string in javascript

let student1Name = "Rahul"  // valid string
let student2Name = 'Omkar'  //  valid string

let checkString = "1220a" // also a valid string
let checkString1 = "253#" // also a valid string

console.log(typeof(student1Name));
console.log(typeof(student2Name));
console.log(typeof(checkString));
console.log(typeof(checkString1));


//######## Methodes on string #######//

let message = "Learn javascript";
console.log(message.split(''));
console.log(message.slice(0,8));
console.log(message.length);
console.log(message.replace('L',"G"));
console.log(message.replaceAll('a','HAHA'));
console.log(message.includes("Learn"));


// Template-Literales

// `  ` --->  define by using this cortes

let a = 20;
let b = 30;
console.log('addition is:'+(a+b));

console.log(`addition is ${10+20}`);








