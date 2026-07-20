// // ==========================================
// // Level 1 – Basic Function, Array & Object Code Tasks (Easy)
// // ==========================================

// // 1. Write a function `sayHello()` that prints "Hello JavaScript".

// function sayHello(){
//     console.log('Hello JavaScript');
// }
// sayHello();

// // 2. Create a function `add(a, b)` that returns their sum and log the result.

// function add(a,b){
//     return a+b;
// }

// add(10,20);

// let sum = (a,b)=> console.log(`The sum of two number is ${a+b}`);
// sum(10,20);

// // 3. Write a function with a default parameter
// //    `name = "Guest"` that prints "Hi <name>".

// function greet(name="Guest"){
//    console.log(`Hi ${name}`);
// }
// greet();

// // 4. Use rest parameters (`...args`) to make a function
// //    that adds unlimited numbers.

// let sum1 = 0;
// function adds(...args){
//    for(let num of args)
//     sum1 += num
// }
// adds(1,2,3,4)
// console.log(sum1);


// // 5. Create an IIFE (Immediately Invoked Function Expression)
// //    that prints "I run instantly!".

// (function(){
//     console.log('I run instantly!');   
// }())

// // 6. Make a nested function where the inner function
// //    prints a variable from the outer function.

// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);
//     }
//     inner()
// }
// outer()

// // 7. Create an array of 5 fruits.
// //    - Add one fruit at the end.
// //    - Remove one fruit from the beginning.

// let arr = ["Mango","Banana","Apple"];
// arr.push("kivi");
// arr.shift();
// console.log(arr);


// // 8. Use a `for` loop to print all elements of an array.

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]); 
// }

// // 9. Create an object `person` with the keys:
// //    - name
// //    - age
// //    - city
// //    Print each key's value.

// let student = {
//     name:"Indrajeet",
//     age:22,
//     city:"Navi Mumabi"
// }

// let {name,age,city} = student;
// console.log(name,age,city);



// // 10. Use `setTimeout()` to log "Time's up!"
// //     after 2 seconds.

//  setTimeout(() => {
//    console.log('Times up');
// }, 2000);

// ==========================================
// Level 2 – Functional Thinking & Logic Tasks (Intermediate)
// ==========================================

// 1. Write a higher-order function `runTwice(fn)`
//    that takes another function and executes it two times.

function runTwice(fn){
    fn();
    fn();
}
runTwice(()=>{
    console.log("Hello javascript");
})


// 2. Create one pure function that always returns
//    the same output for a given input,
      let num = 10
     function sum(a){
        console.log(a+num);
        
     }
     sum(20)
     sum(20)
     sum(20)
     
//    and one impure function using a global variable.
   
let num1 = 12;
function impurefunction(){
    num1 = Math.random()+num1;
    console.log(num1); 
}
impurefunction();

// 3. Write a function that uses object destructuring
//    inside its parameters to extract and print
//    `name` and `age`.

function abc({name,age}){
  console.log(name,age);
}

abc({name:"indrajeet",age:22})

// let studentInfo ={
//     name:"Indrajeet",
//     age:22,
//     Gmail:"veer@gmal.com"
// }

// let {name,age,Gmail} = studentInfo;
// console.log(`Student name is ${name} and age is ${age}`);


// 4. Demonstrate the difference between a normal function
//    and an arrow function when used as object methods
//    (focus on the `this` keyword).

let obj ={
    name:"Indrajeet",
    fun:function(){
        console.log(this);  // object
    },
    fun1:()=>{
        console.log(this);  // windo
    }
}

obj.fun();
obj.fun1();

// 5. Given an array of numbers,
//    use `map()` to create a new array
//    where each number is squared.

let arr = [1,2,3,4];
arr.map((a)=>{
    console.log(a*a);  
})

// 6. Given an array of numbers,
//    use `filter()` to create a new array
//    containing only the even numbers.

let arr1 = [2,3,5,7,6,8,10];
arr1.filter((a)=>{
   if(a%2===0){
    console.log(a);
   }else{}
})

// 7. Use `reduce()` to find the total salary
//    from the array: [1000, 2000, 3000].

let array = [1000,2000,3000];

let newarr = array.reduce((acc,val)=>{
   return acc + val
},0)

console.log(newarr);


// 8. Create an array of names and use:
//    - `some()` to test if at least one name
//      satisfies a condition.

let nameArr = ['veer','om','Indrajeet','rohan','shanti']
let ans = nameArr.some((val)=>{
     return val.length>2;
})

console.log(ans);


//    - `every()` to test if all names
//      satisfy a condition.
//    Example condition: all names are longer than 3 characters.

let num11 = [1,2,3,4,5];
let ans2 = num11.every((val)=>{
    return val>2
})

console.log(ans2);


// 9. Create an object `user` and test the behavior of:
//    - `Object.freeze()`

let obj1 = {
    name:"Indrajeet",
    age:22,
    Gmail:"Ind@gmail.com"
}

Object.freeze(obj1);  // the freeze are the stop all modification in an object
obj1.name = "veer"  // not add in the object 

//    - `Object.seal()`
//    Try adding, updating, and deleting properties,
//    then observe the results.


let obj11= {
    name:"Veer",
    age:22,
    Gmail:"Ind@gmail.com"
}

Object.seal(obj11);
obj11.name="Indrajeet"
console.log(obj11.name); // you can update an old recored in an array by using the seal method
obj11.phone = 2571902922;
console.log(obj11);  // this new recored additon is not allowed


// 10. Create a nested object:
//     user -> address -> city
//     Access and print the city name.

let nestobj = {
    user :{
        address:{
            city:"Ghansoli"
        }
    }
}
 let {city} = nestobj.user.address;
 console.log(city);
 
