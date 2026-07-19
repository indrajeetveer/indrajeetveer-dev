//------------- Array -----------------------//
// array are stored the multiple type of data(Different data Type)
let arr =[1,2,3,4,5];
console.log(arr);

let arr1 = [1,2,{name:'Indrajeet',age:22},[1,23,3],undefined,"Veer"];
console.log(arr1);

// How to access the element in an array 

let info = [1,2,35,4,7,28,46];
console.log(info[2]);

//----Function/Methodes in an array ----------//

let num = [3,27,7,65,98,8,6]
console.log(num.indexOf(65));
console.log(num.push(10)); // add new element in an array at last
console.log(num.pop());  // remove the last elemnt in an array
console.log(num.unshift(22)); // add element in an array in first place
console.log(num.shift()); // remove the element of an array from the first positon
num.sort // sort an array

console.log(num);


// Destructure of an array//

let numarr = [1,7,5,9,90,6];
let [a,,,b] = numarr;
console.log(a,b);

// ======= Loop on an array ===== //

// for loop 
let array = [1,2,3,4,5,6,7];
for(let i=0; i<array.length; i++){
    console.log(array[i]);   
}


// forEach loop //

let num1 =[10,21,22,12,24,25,15];

let a1 = num1.forEach((e)=>{
    if(e%2==0){
        console.log(e);
    }else{}
})
console.log(a1);




