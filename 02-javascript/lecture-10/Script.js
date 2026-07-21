let box = document.querySelector("#box");
let btn = document.querySelector("#btn");


btn.addEventListener('click',()=>{
   
    let val1 = Math.floor(Math.random()*255)
    let val2 = Math.floor(Math.random()*255)
    let val3 = Math.floor(Math.random()*255)
    box.style.backgroundColor = `rgb(${val1},${val2},${val3})`

    let heading = document.querySelector('h1');
    let arr = ['om','ram','omkar','veer','king','soham','rohan','indrajeet','vishnu'];
    let a = Math.floor(Math.random()*arr.length);
    heading.innerHTML = `${arr[a]}`
   
})


let btn1 =document.getElementById('btn1');

btn1.addEventListener('click',()=>{
    let name = document.getElementById('name');
    let age = document.getElementById('age');
    let gmail = document.getElementById('gmail');

    let arr1 = [
    {name:"Indrajeet",age:22,gmail:"Ind@gmail.com"},
    {name:"veer",age:23,gmail:"veer@gmail.com"},
    {name:"Rahun",age:25,gmail:"Rahu@gmail.com"},
    {name:"om",age:20,gmail:"om@gmail.com"}
]

let indexInfo = Math.floor(Math.random()*arr1.length)
console.log(arr1[indexInfo]);

   name.innerHTML = `${arr1[indexInfo].name}`
   age.innerHTML = `${arr1[indexInfo].age}`
   gmail.innerHTML = `${arr1[indexInfo].gmail}`

})







