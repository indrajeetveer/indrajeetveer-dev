javascript;
// 1. Reverse a String
let str = "hello";
console.log("Reverse:", str.split("").reverse().join(""));

// 2. Even or Odd
let num = 7;
console.log("Even/Odd:", num % 2 === 0 ? "Even" : "Odd");

// 3. Largest of Three Numbers
console.log("Largest:", Math.max(10, 25, 15));

// 4. Palindrome
let word = "madam";
console.log("Palindrome:", word === word.split("").reverse().join(""));

// 5. Factorial
let n = 5,
  fact = 1;
for (let i = 1; i <= n; i++) fact *= i;
console.log("Factorial:", fact);

// 6. Fibonacci Series
let a = 0,
  b = 1;
let fibonacci = [];
for (let i = 0; i < 7; i++) {
  fibonacci.push(a);
  [a, b] = [b, a + b];
}
console.log("Fibonacci:", fibonacci);

// 7. Prime Number
let number = 7,
  prime = number > 1;
for (let i = 2; i < number; i++) {
  if (number % i === 0) prime = false;
}
console.log("Prime:", prime ? "Yes" : "No");

// 8. Sum of Array
let arr = [10, 20, 30];
console.log(
  "Array Sum:",
  arr.reduce((a, b) => a + b, 0),
);

// 9. Largest Element in Array
console.log("Largest Element:", Math.max(...[10, 50, 20, 80]));

// 10. Count Vowels
let text = "javascript";
console.log("Vowels:", (text.match(/[aeiou]/gi) || []).length);

// 11. Remove Duplicates
console.log("Unique Elements:", [...new Set([1, 2, 2, 3, 4, 4])]);

// 12. Second Largest Number
let numbers = [10, 20, 40, 30, 50];
numbers = [...new Set(numbers)].sort((a, b) => b - a);
console.log("Second Largest:", numbers[1]);

// 13. Check Anagram
let str1 = "listen",
  str2 = "silent";
console.log(
  "Anagram:",
  str1.split("").sort().join("") === str2.split("").sort().join(""),
);

// 14. Count Digits
let digits = 12345;
console.log("Digit Count:", String(Math.abs(digits)).length);

// 15. Swap Two Numbers
let x = 10,
  y = 20;
[x, y] = [y, x];
console.log("Swapped Numbers:", x, y);
