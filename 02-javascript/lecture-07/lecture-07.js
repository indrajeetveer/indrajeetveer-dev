function message(){
    console.log("Hello Javascript");  
}
message();

function info(name,age){
   console.log(`My Name is ${name} and my age is ${age}`);
}
info('veer',23);


function studentInfo(){
  console.log(arguments);
}
studentInfo("Indrajeet",57,"indrajeetveer1@gmail.com")