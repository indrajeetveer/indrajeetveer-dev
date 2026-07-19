// function message(){
//     console.log("Hello Javascript");  
// }
// message();

// function info(name,age){
//    console.log(`My Name is ${name} and my age is ${age}`);
// }
// info('veer',23);


// function studentInfo(){
//   console.log(arguments);
// }
// studentInfo("Indrajeet",57,"indrajeetveer1@gmail.com")

//*************************************************************************//


// Rest Parameter 

function addition(a,b,...c){
    let sum = a+b;
    console.log(`${sum}  and remaining value is ${c}`); 
}
addition(1,2,3,4,5,6,7,8)


// Destructure in javascripted

// old method the Destructure is not used
// function studentInfo(obj){
//    console.log(obj.name);
//    console.log(obj.age);
// }
// studentInfo({name:'indrajeet',age:22})

// Destructure is used

function studentInfo({name,age}){
   console.log(`my name is ${name} and my age is ${age}`);
   
}
studentInfo({name:'indrajeet',age:22})


// Default in parameter in javascript //

function abcd(a=0,b=0,c=0,d=0){
    console.log(a,b,c,d);  
}
abcd(1,2,3)

// Spread Operator javascripted

function display(a,b,c,d,e){
    console.log(a,b,c,d);   
}
let arr =[1,2,3,4,5];
display(...arr);

//************************ Type of Function *************************************/

// simple function
function message1(){
    console.log('Hello');
}
message1();

// Nested function

function one(){
    function two(){
        console.log('Two is call'); 
    }
    two();
}
one();

// Immediately involked function

(function (){
    console.log('Hello Javascripted');
})();

// Arrow function 

let info =()=>{
    console.log("Arrow function is call");  
}
info();

let sum = (a,b)=> console.log(`The sum of two number is ${a*b}`);
sum(10,10);

// Higher order function //

function mess(fn){
  fn();
}
mess(function(num1=10,num2=10){
     console.log(`The addition of two number is ${num1*num2}`); 
})


// Callback function

function greet(){
    console.log("Hello");  
}



console.log('****************************************************************************************');

// pure function 
// same input = same output

let a = 20;
function good(val){
  console.log(val + 2);
}
good(10);
good(10);
good(10);

// impure function

let num = 12;
function change(val){
    num = Math.random() + val;
    console.log(`change num  value ${num}`);
}
change(12);

//************************************************************************************/

// scope in javascripte

let number = 10; // global scope 

function info1(){
    let infunctio = 20;  // function scope
    console.log(infunctio);
    console.log(number);   
}

info1();
console.log(number);
//console.log(infunctio);  // function scope show an error


// -------------------*********************--------------------//

// closure 
// closure is also an higher order function but closure slidely different'
// the closure are used the variable of parant function

// Higher order function

function high(){
    return function(){
        console.log("Concept of higher order function");
    }
}
high()();

// closure

function big(){
    let number1 = 20;
    return function(){
        console.log(`The number is ${number1}`);
    }
}

big()();

// Higher order function
function king(val){
   val();
}
king(()=>{
    console.log("Higher Order Function");  
})