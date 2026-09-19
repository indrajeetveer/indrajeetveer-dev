// 3. Find the Smallest Element
// let arr = [12, 7, 25, 3, 18];
// Output: 3

let arr2 = [12, 7, 25, 3, 18];

let smallest = arr2[0];

for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] < smallest) {
    smallest = arr2[i];
  }
}

console.log(smallest);

// 4. Find the Average of All Elements
// let arr = [10, 20, 30, 40];
// Output: 25

let arr3 = [10, 20, 30, 40];

let total = 0;

for (let i = 0; i < arr3.length; i++) {
  total = total + arr3[i];
}

let average = total / arr3.length;

console.log(average);

// 5. Count Even and Odd Numbers
// let arr = [1, 2, 3, 4, 5, 6, 7];
// Output: Even: 3, Odd: 4

let arr4 = [1, 2, 3, 4, 5, 6, 7];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even:", evenCount, "Odd:", oddCount);

// 6. Reverse an Array (without using reverse())
// let arr = [1, 2, 3, 4, 5];
// Output: [5, 4, 3, 2, 1]

let arr5 = [1, 2, 3, 4, 5];

let reversed = [];

for (let i = arr5.length - 1; i >= 0; i--) {
  reversed.push(arr5[i]);
}

console.log(reversed);

// 7. Find the Second Largest Element
// let arr = [12, 35, 1, 10, 34, 1];
// Output: 34

let arr6 = [12, 35, 1, 10, 34, 1];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > first) {
    second = first;
    first = arr6[i];
  } else if (arr6[i] > second && arr6[i] !== first) {
    second = arr6[i];
  }
}

console.log(second);

// 8. Remove Duplicates from an Array
// let arr = [1, 2, 2, 3, 4, 4, 5];
// Output: [1, 2, 3, 4, 5]

let arr7 = [1, 2, 2, 3, 4, 4, 5];

let unique = [];

for (let i = 0; i < arr7.length; i++) {
  if (!unique.includes(arr7[i])) {
    unique.push(arr7[i]);
  }
}

console.log(unique);

// 9. Search an Element (Linear Search)
// let arr = [5, 10, 15, 20];
// target = 15
// Output: Found at index 2

let arr8 = [5, 10, 15, 20];
let target = 15;

let foundIndex = -1;

for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] === target) {
    foundIndex = i;
    break;
  }
}

if (foundIndex !== -1) {
  console.log("Found at index " + foundIndex);
} else {
  console.log("Not found");
}

// 10. Count How Many Times an Element Appears
// let arr = [1, 2, 3, 2, 4, 2, 5];
// target = 2
// Output: 3

let arr9 = [1, 2, 3, 2, 4, 2, 5];
let searchValue = 2;

let count = 0;

for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] === searchValue) {
    count++;
  }
}

console.log(count);

// 11. Check if an Array is Sorted (Ascending)
// let arr = [1, 2, 3, 4, 5];
// Output: true

let arr10 = [1, 2, 3, 4, 5];

let isSorted = true;

for (let i = 1; i < arr10.length; i++) {
  if (arr10[i] < arr10[i - 1]) {
    isSorted = false;
    break;
  }
}

console.log(isSorted);

// 12. Find the Missing Number (numbers from 1 to n, one is missing)
// let arr = [1, 2, 4, 5];
// Output: 3

let arr11 = [1, 2, 4, 5];

let n = arr11.length + 1;
let expectedSum = (n * (n + 1)) / 2;

let actualSum = 0;

for (let i = 0; i < arr11.length; i++) {
  actualSum = actualSum + arr11[i];
}

console.log(expectedSum - actualSum);
