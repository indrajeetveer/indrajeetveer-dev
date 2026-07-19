// ==========================================
// Level 1 – Basic Function, Array & Object Code Tasks (Easy)
// ==========================================

// 1. Write a function `sayHello()` that prints "Hello JavaScript".

function sayHello(){
    console.log('Hello JavaScript');
}
sayHello();

// 2. Create a function `add(a, b)` that returns their sum and log the result.

function add(a,b){
    return a+b;
}

add(10,20);

let sum = (a,b)=> console.log(`The sum of two number is ${a+b}`);
sum(10,20);

// 3. Write a function with a default parameter
//    `name = "Guest"` that prints "Hi <name>".

function greet(name="Guest"){
   console.log(`Hi ${name}`);
}
greet();

// 4. Use rest parameters (`...args`) to make a function
//    that adds unlimited numbers.

let sum1 = 0;
function adds(...args){
   for(let num of args)
    sum1 += num
}
adds(1,2,3,4)
console.log(sum1);


// 5. Create an IIFE (Immediately Invoked Function Expression)
//    that prints "I run instantly!".

(function(){
    console.log('I run instantly!');   
}())

// 6. Make a nested function where the inner function
//    prints a variable from the outer function.

function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    inner()
}
outer()

// 7. Create an array of 5 fruits.
//    - Add one fruit at the end.
//    - Remove one fruit from the beginning.

let arr = ["Mango","Banana","Apple"];
arr.push("kivi");
arr.shift();
console.log(arr);


// 8. Use a `for` loop to print all elements of an array.

for(let i=0; i<arr.length; i++){
    console.log(arr[i]); 
}

// 9. Create an object `person` with the keys:
//    - name
//    - age
//    - city
//    Print each key's value.

let student = {
    name:"Indrajeet",
    age:22,
    city:"Navi Mumabi"
}

let {name,age,city} = student;
console.log(name,age,city);



// 10. Use `setTimeout()` to log "Time's up!"
//     after 2 seconds.

 setTimeout(() => {
   console.log('Times up');
}, 2000);

