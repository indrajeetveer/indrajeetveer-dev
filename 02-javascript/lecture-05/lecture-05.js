// Hoisting in javascript
// message()
// function message(){
//     console.log('function call');
// }

// call()
// var call = function(){
//     console.log("Function Call");
// }

// call1()
// let call1 = function(){
//     console.log('function call');   
// }

//########################## Conditional Statement ############################//

// 1. Even or Odd
// Write a program that takes an integer as input and checks whether it is even or odd using an if-else statement.

let number = 20;
if(number%2==0){
    console.log('The number is even');
}else{
    console.log('The number is odd');
}


// 2. Largest of Three Numbers
// Write a program that accepts three integers and prints the largest number using if-else.

let num1 = 10;
let num2 = 20;
let num3 = 50;

if(num1>num2 && num1>num3){
    console.log('Number 1 is greator');
}else if(num2>num1 && num2>num3){
    console.log('Number 2 is greator');
}else{
    console.log('Number 3 is greator');
}

//#####################################################################//

// Switch Case

//1. Day of the Week
//Write a program that accepts a number (1–7) and prints the corresponding day using a switch statement.

let enterDay = 4;
switch(enterDay){
  case 1:console.log('Monday');
  break;

  case 2:console.log('Tuesday');
  break;

  case 3:console.log('Wednesday');
  break;

  case 4:console.log('Thursday');
  break;

  case 5:console.log('Friday');
  break;

  case 6:console.log('Saturday');
  break;

  case 7:console.log('Sunday');
  break;

  default:console.log('Enter the wrong number');
  
}

//2. Basic Calculator

let number1 = 10;
let operator = '+';
let number2 = 20;

switch (operator) {

     case "+":console.log('Addition is :',`${number1+number2}`);
     break;

     case "-":console.log('Addition is :',`${number1-number2}`);
     break;

     case "*":console.log('Addition is :',`${number1*number2}`);
     break;

     case "/":console.log('Addition is :',`${number1/number2}`);
     break;

     case "%":console.log('Addition is :',`${number1%number2}`);
     break;

    default:console.log("Enter the valid operator");
    
        break;
}


// Ternary operator

let age = 22;
(age>18)?  console.log('You can Drive'):console.log('you can not Drive');
