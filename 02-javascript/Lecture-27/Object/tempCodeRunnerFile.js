for(let i in car){
    console.log(i); 
}
// 2. Convert the object into an array of keys.
let arr = new Array(Object.keys(car))
console.log(arr);

// 3. Convert the object into an array of values.
let arr2 = new Array(Object.values(car))
console.log(arr2);

// 4. Convert the object into an array of key-value pairs.
let arr3 = new Array(car)
console.log(arr3);

// 5. Freeze the object and try changing a property.