let a = 10;
console.log(a);

// common type of error 

// Syntax error
let fun = function()={
   console.log('a');
   
}

// Runtime error

function  abc(){
    let a = 12;
    console.log(a.name.first); 
}
abc();

// logical error 

for(let i=1;i<=10;i--){
    console.log(i);   
}


function add(a,b){
    return a-b
}
let ans = add(10,10)

try{
    let a = 10;
    console.log(a.name.value); 
}catch(err){
   console.log(err.message);
}

console.log('Hello');

try{
   let b = 20;
   console.log(b.age.value);
   
}catch(err){
    console.log(err);
    
}finally{
   console.log('Hello');
}

try{
    let c = 20;
    console.log(c.age.name);  
}catch(err){
   throw new Error("The age Property is not there")
}