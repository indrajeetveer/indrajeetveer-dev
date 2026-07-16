//****************** Loop's in Javascript *************************//
// simple for loop in js 

// print 1-50 
for(let i=1;i<=50;i++){
    console.log(i); 
}

// print Javascript in 5 times
for(let i=1; i<=5; i++){
    console.log('Javascript'); 
}

//print 30-10
for(let i=30; i>9;i--){
    console.log(i);
}

// print 121-12
for(let i=121; i>=12; i--){
   console.log(i);
}

console.log('*****************************************************************');

// print 12-1 not display (5 and 7)
for(let i=12; i>=1; i--){
    if(i === 5 || i === 7){

    }else{
        console.log(i);   
    }
}
console.log('******************************************************')

for(let i=12; i>=1; i--){
    if( i!==5 && i!==7 ){
        console.log(i);  
    }
}