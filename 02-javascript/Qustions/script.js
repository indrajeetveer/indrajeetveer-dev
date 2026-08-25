// 1. Find the Largest Element
// let arr = [10, 25, 5, 40, 15];
// Output: 40

let arr = [10, 25, 5, 40, 15];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(largest);

// 2. Find the Sum of All Elements

// let arr = [10, 20, 30, 40];
// Output: 100

let arr1 = [10, 20, 30, 40];

let sum = 0;

for (let i = 0; i < arr1.length; i++) {
  sum = sum + arr1[i];
}

console.log(sum);
