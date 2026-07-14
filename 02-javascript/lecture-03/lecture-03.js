console.log('javascript learn');

// Primitive and non primitive data type in java 

// primitive 

// float
let marks = 90.20;
console.log(marks);

// number, Integer
let rollNumber = 57;
console.log(typeof(rollNumber));

// String
let studentName = 'Indrajeet'
console.log(typeof(studentName));

// boolean
console.log(0 === 0);
console.log(1 === 0);

// null
let car = null;
console.log(car);
console.log(typeof(car));  // object   Historical bug

// undefine 
var a;
console.log(a);

var b = undefined;
console.log(b);

// NaN (Not a number)
console.log(12*"indrajeet");

// Infinite
console.log(1/0);


console.log('***********************************************************************************************************');
console.log('***********************************************************************************************************');
console.log('***********************************************************************************************************');


//============ Relative or Reference data type ===============//

// Array
let studentsRollNo = [10,20,38,35,33,78,89]
console.log(studentsRollNo);
console.log(typeof(studentsRollNo)); // object
console.log(studentsRollNo[1]);

let array = [10,20,'indrajeet',[10,20,36],{name:"Indrajeet",age:22},null,NaN]
console.log(array);

let num = [2,3,4]
let num1 = num;
console.log(num1);
num1.pop()
console.log(num);



console.log('***********************************************************************************************************');

// object 

let studentInfo ={
    name:"Indrajeet",
    age:22,
    location:"Ghansoli",
    education:"MCA"
}

console.log(studentInfo);
console.log(typeof studentInfo);

console.log('***********************************************************************************************************');

// Function

function message(){
  console.log('Hello Javascript');
}
message(); // call the function

console.log(typeof message);














