const numbers = [5, 12, 8, 20, 15, 3, 10];

////////  map() //////
// numbers.map((e)=>{
//    console.log(e*2)  
// })

// numbers.map((e)=>{
//    console.log(e*e);  
// })

// let convertString =numbers.map(String);
// console.log(convertString);

// numbers.map((e)=>{
//     console.log(`${e+10}`);  
// })

/////  filter() ////

// let check = numbers.filter((e)=>{
//     return e%2==0;
// })
// console.log(check);

// let check = numbers.filter((e)=>{
//     return e%2 !==0;
// })
// console.log(check);

// let check = numbers.filter((e)=>{
//     return e>10;
// })
// console.log(check);

// let check = numbers.filter((e)=>{
//     return e>5 && e<15;
// })
// console.log(check);


/////   reduce() ///


// let findTotal = numbers.reduce((e,ind)=>{
//      return e + ind
// },0)
// console.log(findTotal);

// let findProduct = numbers.reduce((e,ind)=>{
//      return e * ind
// },1)
// console.log(findProduct);

// let findLargeNumber = numbers.reduce((e,curr)=>{
//      return e>curr? e:curr
// },1)
// console.log(findLargeNumber);

// let findSmallNumber = numbers.reduce((e,curr)=>{
//      return curr<e? curr:e
// })
// console.log(findSmallNumber);


// /////    find()  //////////

// let num = numbers.find((e)=>{
//     let first = e>10;
//     return first;
// })

// console.log(num);

// let num = numbers.find((e)=>{
//     let firstEven = e%2==0;
//     return firstEven;
// })

// console.log(num);

//////  findIndex() /////////

// let findIndex = numbers.findIndex((num)=>{
//    return num > 15;
// })

// console.log(findIndex);

///// // some() ///////

// let num = numbers.some((e)=>{
//     return e>0
// })
// console.log(num);

// let num = numbers.some((e)=>{
//     return e%5 == 0;
// })
// console.log(num);

////// every() ///

// let everynum = numbers.every((e)=>{
//     return e>0
// })
// console.log(everynum);

// let everynum = numbers.every((e)=>{
//     return e<100;
// });
// console.log(everynum);

/////  Other Methods ////

// if(numbers.includes(20)){
//     console.log('true');
// }else{
//     console.log('false');
// }

// for(let i=0; i<numbers.length;i++){
//     if(numbers[i]>=15){
//         console.log(i); 
//         break;
//     } else{
//         continue;
//     }
// }

// let ascending = numbers.sort((a,b)=>{
//     return a - b
// }) 
// console.log(ascending);

// let descending = numbers.sort((a,b)=>{
//     return b - a
// }) 
// console.log(descending);

// let arrReverse = numbers.reverse();
// console.log(arrReverse);



// //////////  Part 2: Array Methods on Strings /////////////////////

const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Kiwi",
  "Pineapple"
];

// let upperCase = fruits.map((e)=>{
//    let upFruit =  e.toUpperCase();
//     return upFruit
// })
// console.log(upperCase);

// let lowerCase = fruits.map((e)=>{
//    let lower = e.toLowerCase();
//    return lower
// })
// console.log(lowerCase);

// let length = fruits.map((e)=>{
//    let fruitLength = e.length
//    return fruitLength
// })
// console.log(length);

// let add = fruits.map((e)=>{
//     let front_name = ` Fruit:${e}`
//     return front_name
// })

// console.log(add);

///////////  Filtre //////////

// let startWithA = fruits.filter((e)=>{
//     let operation =  e.split('')
//     if(operation[0]==="M"){
//         return operation
//     }else{

//     }
     
// }).join()
// console.log(startWithA);

// let contains = fruits.filter((e)=> e.includes('an'));
// console.log(contains);

// let lengthOfWord = fruits.filter((e)=> e.split('').length>5).join();
// console.log(lengthOfWord);

// let endsWith = fruits.filter((e)=> e.endsWith('e'))
// console.log(endsWith);

//###########  find() #################//

// let length = fruits.find((e)=> e.length>6)
// console.log(length);

// let fristwordchack = fruits.find((e)=> e.startsWith('M'));
// console.log(fristwordchack);


/// #######################  some() ###############////

// let check = fruits.some((e)=> e.includes('pp'));
// console.log(check);

/// #######################  every() ###############////

// let check2 = fruits.every((e)=> e.length>4)
// console.log(check2);

// let findIndex = fruits.indexOf("Orange");
// console.log(findIndex);

// let sortfruit = fruits.sort();
// console.log(sortfruit);


