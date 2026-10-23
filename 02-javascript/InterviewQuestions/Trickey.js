// ============================================
// JAVASCRIPT TRICKY INTERVIEW QUESTIONS
// Questions + Output + Answers in Comments
// ============================================

// 1. HOISTING WITH VAR
console.log(a); // Output: undefined
var a = 10;
// Answer: var is hoisted and initialized with undefined.

// 2. HOISTING WITH LET
// console.log(b); // Output: ReferenceError
let b = 20;
// Answer: let is in the Temporal Dead Zone before declaration.

// 3. TYPE COERCION
console.log(1 + "2" + 3); // Output: "123"
// Answer: + performs string concatenation when a string is involved.

// 4. SUBTRACTION VS ADDITION
console.log("5" - 2); // Output: 3
console.log("5" + 2); // Output: "52"
// Answer: Subtraction converts to number; + can concatenate strings.

// 5. TYPEOF NULL
console.log(typeof null); // Output: "object"
// Answer: This is a historical JavaScript quirk.

// 6. NAN COMPARISON
console.log(NaN === NaN); // Output: false
console.log(Object.is(NaN, NaN)); // Output: true
// Answer: NaN is not equal to itself with ===.

// 7. LOOSE VS STRICT EQUALITY
console.log(0 == false); // Output: true
console.log(0 === false); // Output: false
// Answer: == allows type coercion; === does not.

// 8. ARRAY COMPARISON
console.log([1, 2] === [1, 2]); // Output: false
// Answer: Arrays are objects; separate arrays have different references.

// 9. CONST AND OBJECT MUTATION
const user = { name: "Alex" };
user.name = "John";
console.log(user.name); // Output: "John"
// Answer: const prevents reassignment, not object mutation.

// 10. VAR IN A LOOP
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// Output: 3 3 3
// Answer: var is function-scoped; callbacks share the same i.

// 11. LET IN A LOOP
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0);
}
// Output: 0 1 2
// Answer: let creates a separate binding for each loop iteration.

// 12. CLOSURE
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
// Answer: A closure retains access to variables in its outer scope.

// 13. FUNCTION DECLARATION HOISTING
sayHello(); // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}
// Answer: Function declarations are available before their definition.

// 14. FUNCTION EXPRESSION HOISTING
// sayHi(); // Output: TypeError if declared as shown below
var sayHi = function () {
  console.log("Hi!");
};
// Answer: var is hoisted, but the function assignment is not.
// Uncomment sayHi() above to see the error.

// 15. AUTOMATIC SEMICOLON INSERTION
function getValue() {
  return;
  {
    value: 10;
  }
}

console.log(getValue()); // Output: undefined
// Answer: A newline after return causes automatic semicolon insertion.

// 16. FLOATING-POINT PRECISION
console.log(0.1 + 0.2 === 0.3); // Output: false
console.log(0.1 + 0.2); // Output: 0.30000000000000004
// Answer: Binary floating-point cannot represent these decimals exactly.

// 17. TRUTHY AND FALSY STRINGS
console.log(Boolean("false")); // Output: true
console.log(Boolean("")); // Output: false
// Answer: Every non-empty string is truthy.

// 18. ARRAY TO STRING CONVERSION
console.log([] + []); // Output: ""
console.log([] + {}); // Usually: "[object Object]"
// Answer: Arrays and objects undergo primitive conversion.

// 19. COMPARISON CHAIN
console.log(1 < 2 < 3); // Output: true
console.log(3 > 2 > 1); // Output: false
// Answer: Comparisons evaluate left to right.
// 3 > 2 is true; true > 1 becomes 1 > 1, which is false.

// 20. TYPEOF TYPEOF
console.log(typeof typeof 123); // Output: "string"
// Answer: typeof 123 is "number"; typeof "number" is "string".

// 21. MAP WITH PARSEINT
console.log([1, 2, 3].map(parseInt));
// Output: [1, NaN, NaN]
// Answer: map passes element, index, and array.
// parseInt uses the index as its radix.
// Correct: [1, 2, 3].map(x => parseInt(x, 10));

// 22. THIS IN A METHOD
const person = {
  name: "Alex",
  greet() {
    console.log(this.name);
  },
};

person.greet(); // Output: "Alex"
// Answer: The method call sets this to person.

// 23. DETACHED METHOD
("use strict");

const employee = {
  name: "Sam",
  showName() {
    console.log(this.name);
  },
};

const show = employee.showName;
// show(); // Output: TypeError in strict mode
// Answer: A detached regular function loses its receiver.
// Use show.call(employee) to print "Sam".

// 24. ARROW FUNCTION THIS
const profile = {
  name: "Alex",
  show: () => console.log(this.name),
};

profile.show(); // Usually undefined in a Node.js module
// Answer: Arrow functions capture this from the surrounding scope.

// 25. PROMISE AND SETTIMEOUT ORDER
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

// Output:
// Start
// End
// Promise
// Timeout
// Answer: Synchronous code runs first, then promise microtasks,
// followed by timer callbacks.

// 26. ASYNC/AWAIT ORDER
async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("Start");
test();
console.log("End");

// Output:
// Start
// A
// End
// B
// Answer: Execution after await resumes asynchronously.

// 27. PROMISE CHAIN
Promise.resolve(5)
  .then((value) => value * 2)
  .then((value) => value + 1)
  .then(console.log); // Output: 11

// Answer: Each then receives the previous handler's result.

// 28. NULLISH COALESCING
console.log(0 || 100); // Output: 100
console.log(0 ?? 100); // Output: 0
// Answer: || checks truthiness; ?? checks only null or undefined.

// 29. OPTIONAL CHAINING
const customer = null;

console.log(customer?.name); // Output: undefined
// Answer: ?. safely stops property access on null or undefined.

// 30. SET BEHAVIOR
console.log([...new Set([1, 2, 2, 3, 3])]);
// Output: [1, 2, 3]
// Answer: Set stores unique values.

// 31. ARRAY FILTER
console.log([1, 2, 3, 4].filter((n) => n % 2 === 0));
// Output: [2, 4]
// Answer: filter returns elements that satisfy the condition.

// 32. ARRAY REDUCE
console.log([1, 2, 3, 4].reduce((sum, n) => sum + n, 0));
// Output: 10
// Answer: reduce accumulates values into a single result.

// 33. SHALLOW COPY
const original = { nested: { value: 1 } };
const copy = { ...original };

copy.nested.value = 99;

console.log(original.nested.value); // Output: 99
// Answer: Spread creates a shallow copy; nested objects are shared.

// 34. OBJECT KEYS
console.log(Object.keys({ a: 1, b: 2 }));
// Output: ["a", "b"]
// Answer: Object.keys returns an array of own enumerable string keys.

// 35. FINALLY WITH PROMISE
Promise.resolve("Success")
  .finally(() => console.log("Finally"))
  .then(console.log);

// Output:
// Finally
// Success
// Answer: finally normally preserves the original fulfillment value.

// 36. FUNCTION ARGUMENTS
function add(a, b = 5) {
  return a + b;
}

console.log(add(3)); // Output: 8
console.log(add(3, 10)); // Output: 13
// Answer: Default parameters apply when the argument is omitted
// or explicitly undefined, not when it is null.

// 37. DESTRUCTURING
const [first, , third] = [10, 20, 30];

console.log(first, third); // Output: 10 30
// Answer: An empty slot skips the second array element.

// 38. STRING IMMUTABILITY
let message = "hello";
message[0] = "H";

console.log(message); // Output: "hello"
// Answer: JavaScript strings are immutable.

// 39. REFERENCE VS VALUE
let x = 10;
let y = x;
y = 20;

console.log(x, y); // Output: 10 20
// Answer: Numbers are primitive values and are copied by value.

// 40. SYNCHRONOUS EXECUTION
console.log("One");

function run() {
  console.log("Two");
}

run();
console.log("Three");

// Output:
// One
// Two
// Three
// Answer: Ordinary synchronous statements run in execution order.

// ============================================
// END OF JAVASCRIPT INTERVIEW QUESTIONS
// ============================================
