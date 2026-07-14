// operator in javascript

// Arithmetic operator in JS

let num1 = 10;
let num2 = 20;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);


console.log('************************************************************************');

// Assignment Operator

let a = 10
a +=10;  //  a = a + 10
console.log(a);

let b = 10
b -=10;  // b = b - 10
console.log(b);

let c = 30
c *=10;  // c = c * 10
console.log(c);

let d = 40
d %=10;  // d = d % 10
console.log(d);


console.log('*************************************************************************************');

// Comparison operator 

let number1 = 20;
let number2 = 30;

console.log(number1 == number2);
console.log(number1 === number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
console.log(number1 != number2);
console.log(number1 !== number2);

console.log('************************************************************');

//  Logical operator

//  1)AND(&&)

let age = 20;
let licences = "yes"

if(age>= 20 && licences === "yes"){
    console.log('They can ride'); 
}else{
    console.log('You can not ride');
}

// 2) OR (||)

let Aadher = "yes";
let Pan = "Yes";

if(Aadher === 'yes' || Pan === 'yes'){
    console.log('Indian');
}else{
    console.log('Not an Indian');
    
}


console.log('*******************************************************************************');

// Ternory Operator 

// condtion ? console.log('Message'):console.log('Message');

(3<10)? console.log('Three is less than 10'):console.log('Three is Greator than 10');



