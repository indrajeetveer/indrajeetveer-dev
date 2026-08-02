setTimeout(function(){
    console.log("hello"); 
},2000)

function abcd(fn){
    fn();
}

abcd(function(){
    console.log('Hello');  
})


function add(fn){
   fn();
}

add(function(){
    console.log(`addition is ${10+10}`);
})