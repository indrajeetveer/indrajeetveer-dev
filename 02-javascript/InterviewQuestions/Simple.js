// javascript;
// // 1. Reverse a String
// let str = "hello";
// console.log("Reverse:", str.split("").reverse().join(""));

// // 2. Even or Odd
// let num = 7;
// console.log("Even/Odd:", num % 2 === 0 ? "Even" : "Odd");

// // 3. Largest of Three Numbers
// console.log("Largest:", Math.max(10, 25, 15));

// // 4. Palindrome
// let word = "madam";
// console.log("Palindrome:", word === word.split("").reverse().join(""));

// // 5. Factorial
// let n = 5,
//   fact = 1;
// for (let i = 1; i <= n; i++) fact *= i;
// console.log("Factorial:", fact);

// // 6. Fibonacci Series
// let a = 0,
//   b = 1;
// let fibonacci = [];
// for (let i = 0; i < 7; i++) {
//   fibonacci.push(a);
//   [a, b] = [b, a + b];
// }
// console.log("Fibonacci:", fibonacci);

// // 7. Prime Number
// let number = 7,
//   prime = number > 1;
// for (let i = 2; i < number; i++) {
//   if (number % i === 0) prime = false;
// }
// console.log("Prime:", prime ? "Yes" : "No");

// // 8. Sum of Array
// let arr = [10, 20, 30];
// console.log(
//   "Array Sum:",
//   arr.reduce((a, b) => a + b, 0),
// );

// // 9. Largest Element in Array
// console.log("Largest Element:", Math.max(...[10, 50, 20, 80]));

// // 10. Count Vowels
// let text = "javascript";
// console.log("Vowels:", (text.match(/[aeiou]/gi) || []).length);

// // 11. Remove Duplicates
// console.log("Unique Elements:", [...new Set([1, 2, 2, 3, 4, 4])]);

// // 12. Second Largest Number
// let numbers = [10, 20, 40, 30, 50];
// numbers = [...new Set(numbers)].sort((a, b) => b - a);
// console.log("Second Largest:", numbers[1]);

// // 13. Check Anagram
// let str1 = "listen",
//   str2 = "silent";
// console.log(
//   "Anagram:",
//   str1.split("").sort().join("") === str2.split("").sort().join(""),
// );

// // 14. Count Digits
// let digits = 12345;
// console.log("Digit Count:", String(Math.abs(digits)).length);

// // 15. Swap Two Numbers
// let x = 10,
//   y = 20;
// [x, y] = [y, x];
// console.log("Swapped Numbers:", x, y);

// /*
//   DSA PRACTICE SHEET (Beginner) - WITH ANSWERS
//   --------------------------------------------
//   Run with:  node dsa_solutions.js
//   Try solving each question yourself first, then compare with the answer.
// */

// // ============ ARRAYS ============

// // Q1. Find the largest number in an array.
// // Input: [3, 9, 2, 7]  ->  Output: 9
// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// console.log("Q1:", findMax([3, 9, 2, 7]));

// // Q2. Reverse an array without using the built-in reverse().
// // Input: [1, 2, 3, 4]  ->  Output: [4, 3, 2, 1]
// function reverseArray(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]; // swap
//     left++;
//     right--;
//   }
//   return arr;
// }
// console.log("Q2:", reverseArray([1, 2, 3, 4]));

// // Q3. Find the sum of all elements in an array.
// // Input: [1, 2, 3, 4]  ->  Output: 10
// function arraySum(arr) {
//   let sum = 0;
//   for (const num of arr) sum += num;
//   return sum;
// }
// console.log("Q3:", arraySum([1, 2, 3, 4]));

// // Q4. Count how many even numbers are in an array.
// // Input: [1, 2, 3, 4, 6]  ->  Output: 3
// function countEven(arr) {
//   let count = 0;
//   for (const num of arr) {
//     if (num % 2 === 0) count++;
//   }
//   return count;
// }
// console.log("Q4:", countEven([1, 2, 3, 4, 6]));

// // Q5. Find the second largest number in an array.
// // Input: [5, 1, 9, 7]  ->  Output: 7
// function secondLargest(arr) {
//   let first = -Infinity;
//   let second = -Infinity;
//   for (const num of arr) {
//     if (num > first) {
//       second = first;
//       first = num;
//     } else if (num > second && num !== first) {
//       second = num;
//     }
//   }
//   return second;
// }
// console.log("Q5:", secondLargest([5, 1, 9, 7]));

// // Q6. Remove duplicates from an array.
// // Input: [1, 2, 2, 3, 3, 3]  ->  Output: [1, 2, 3]
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log("Q6:", removeDuplicates([1, 2, 2, 3, 3, 3]));

// // Q7. Move all zeros to the end, keep the order of other numbers.
// // Input: [0, 1, 0, 3, 12]  ->  Output: [1, 3, 12, 0, 0]
// function moveZeros(arr) {
//   let pos = 0; // where the next non-zero should go
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[pos] = arr[i];
//       pos++;
//     }
//   }
//   while (pos < arr.length) {
//     arr[pos] = 0;
//     pos++;
//   }
//   return arr;
// }
// console.log("Q7:", moveZeros([0, 1, 0, 3, 12]));

// // Q8. Two Sum: return the indices of two numbers that add up to target.
// // Input: [2, 7, 11, 15], target = 9  ->  Output: [0, 1]
// function twoSum(arr, target) {
//   const seen = {}; // value -> index
//   for (let i = 0; i < arr.length; i++) {
//     const need = target - arr[i];
//     if (need in seen) return [seen[need], i];
//     seen[arr[i]] = i;
//   }
//   return [];
// }
// console.log("Q8:", twoSum([2, 7, 11, 15], 9));

// // ============ STRINGS ============

// // Q9. Reverse a string.
// // Input: "hello"  ->  Output: "olleh"
// function reverseString(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }
// console.log("Q9:", reverseString("hello"));

// // Q10. Check if a string is a palindrome.
// // Input: "madam"  ->  Output: true
// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log("Q10:", isPalindrome("madam"));

// // Q11. Count the vowels in a string.
// // Input: "education"  ->  Output: 5
// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (const ch of str) {
//     if (vowels.includes(ch)) count++;
//   }
//   return count;
// }
// console.log("Q11:", countVowels("education"));

// // Q12. Check if two strings are anagrams.
// // Input: "listen", "silent"  ->  Output: true
// function isAnagram(a, b) {
//   if (a.length !== b.length) return false;
//   const sortedA = a.split("").sort().join("");
//   const sortedB = b.split("").sort().join("");
//   return sortedA === sortedB;
// }
// console.log("Q12:", isAnagram("listen", "silent"));

// // Q13. Find the first non-repeating character in a string.
// // Input: "aabbcdd"  ->  Output: "c"
// function firstUnique(str) {
//   const count = {};
//   for (const ch of str) {
//     count[ch] = (count[ch] || 0) + 1;
//   }
//   for (const ch of str) {
//     if (count[ch] === 1) return ch;
//   }
//   return null;
// }
// console.log("Q13:", firstUnique("aabbcdd"));

// // Q14. Count the frequency of each character.
// // Input: "banana"  ->  Output: { b: 1, a: 3, n: 2 }
// function charFrequency(str) {
//   const freq = {};
//   for (const ch of str) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }
//   return freq;
// }
// console.log("Q14:", charFrequency("banana"));

// // ============ NUMBERS / LOGIC ============

// // Q15. Check if a number is prime.
// // Input: 7  ->  Output: true
// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log("Q15:", isPrime(7));

// // Q16. Print the first n Fibonacci numbers.
// // Input: 6  ->  Output: [0, 1, 1, 2, 3, 5]
// function fibonacci(n) {
//   const result = [];
//   let a = 0;
//   let b = 1;
//   for (let i = 0; i < n; i++) {
//     result.push(a);
//     [a, b] = [b, a + b];
//   }
//   return result;
// }
// console.log("Q16:", fibonacci(6));

// // Q17. Find the factorial of a number.
// // Input: 5  ->  Output: 120
// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log("Q17:", factorial(5));

// // Q18. Find the sum of digits of a number.
// // Input: 1234  ->  Output: 10
// function sumOfDigits(n) {
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }
// console.log("Q18:", sumOfDigits(1234));

// // ============ SEARCHING & SORTING ============

// // Q19. Linear search: return the index of target, or -1 if not found.
// // Input: [4, 2, 7, 1], target = 7  ->  Output: 2
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) return i;
//   }
//   return -1;
// }
// console.log("Q19:", linearSearch([4, 2, 7, 1], 7));

// // Q20. Binary search on a sorted array: return the index, or -1.
// // Input: [1, 3, 5, 7, 9], target = 5  ->  Output: 2
// function binarySearch(arr, target) {
//   let low = 0;
//   let high = arr.length - 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) low = mid + 1;
//     else high = mid - 1;
//   }
//   return -1;
// }
// console.log("Q20:", binarySearch([1, 3, 5, 7, 9], 5));

// // Q21. Bubble sort an array (do not use sort()).
// // Input: [5, 3, 8, 1]  ->  Output: [1, 3, 5, 8]
// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
//       }
//     }
//   }
//   return arr;
// }
// console.log("Q21:", bubbleSort([5, 3, 8, 1]));

// // ============ STACK ============

// // Q22. Check if brackets are balanced (use a stack).
// // Input: "({[]})"  ->  Output: true
// // Input: "([)]"    ->  Output: false
// function isBalanced(str) {
//   const stack = [];
//   const pairs = { ")": "(", "]": "[", "}": "{" };
//   for (const ch of str) {
//     if (ch === "(" || ch === "[" || ch === "{") {
//       stack.push(ch);
//     } else if (ch in pairs) {
//       if (stack.pop() !== pairs[ch]) return false;
//     }
//   }
//   return stack.length === 0;
// }
// console.log("Q22:", isBalanced("({[]})"), isBalanced("([)]"));

// // ============ LINKED LIST (bonus) ============

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// // Q23. Reverse a singly linked list.
// // Input: 1 -> 2 -> 3  ->  Output: 3 -> 2 -> 1
// function reverseList(head) {
//   let prev = null;
//   let current = head;
//   while (current !== null) {
//     const next = current.next; // save next
//     current.next = prev; // reverse the link
//     prev = current; // move prev forward
//     current = next; // move current forward
//   }
//   return prev; // new head
// }

// // Test: build 1 -> 2 -> 3, reverse it, print the values
// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);

// let node = reverseList(head);
// const values = [];
// while (node !== null) {
//   values.push(node.value);
//   node = node.next;
// }
// console.log("Q23:", values.join(" -> "));

let age = 30;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can't vote");
}

let arr1 = [10, 22, 34, 53, 32, 1, 4];

let highest = 0;
for (let i = 1; i < arr1.length; i++) {
  highest = highest > arr1[i] ? highest : arr1[i];
}

console.log(highest);


let arr2 = [5,89,9,21,3]
let target = 9

for(let i=0 ; i<arr2.length;i++){
  if(arr2[i] === target){
    console.log("The Target is found",arr2[i])
  }
}