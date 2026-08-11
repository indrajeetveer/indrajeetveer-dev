// let arr = [10,37,5,39,67];

import name from "./app.mjs";

// let arr1 = arr;
// console.log(arr1);

// arr1.push(99);
// console.log(arr);

// var obj ={
//     name:"indrajeet",
//     age:22
// }

// let obj2 = obj;

// obj2.name = "veer";
// console.log(obj);


// let arr = [10,27,64,69,36,30]

// let arr2 = [...arr];
// arr2.push(89)

// console.log(arr2);


// let arr3 = [25,38,29,45,22,56,34]

// let [age,age2,age3,...all] =arr3
// console.log(age);
// console.log(age2);
// console.log(age3);
// console.log(all);


// let studentInfo = {
//     name:"indrajeet",
//     age:22,
//     city:"Ghansoli",
//     gmail:"indrajeet@gmail.com"
// }

// let {name,age}=studentInfo
// console.log(name);
// console.log(age);

// let {...obj} = studentInfo;
// console.log(obj);

// let info ={
//     name:"veer",
//     age:22,
//     city:"navi mumbai",
//     skills:["js","React","next","node"]
// }

// let {skills} = info;
// console.log(skills);

// let [first,...restSkills] = skills;
// console.log(first);
// console.log(restSkills);


import info from './app.mjs';

import {userinfo} from "./app.mjs";
userinfo.collegeName = info;

let {username,userage,usercity,...reamaing} = userinfo;
console.log(username);
console.log(userage);
console.log(usercity);
console.log(reamaing);


