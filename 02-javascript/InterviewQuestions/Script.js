/* ============================================================
   TOP 10 JAVASCRIPT INTERVIEW QUESTIONS & ANSWERS
   ============================================================ */

/* ------------------------------------------------------------
   Q1. What is the difference between var, let, and const?
   ------------------------------------------------------------ */
function example() {
  if (true) {
    var a = 1; // function-scoped
    let b = 2; // block-scoped
    const c = 3; // block-scoped, cannot be reassigned
  }
  console.log(a); // 1
  console.log(b); // ReferenceError: b is not defined
}

// ANSWER:
// var is function-scoped and hoisted as undefined.
// let/const are block-scoped and sit in the "temporal dead zone"
// until their declaration line runs.
// const cannot be reassigned, but objects/arrays it holds CAN be mutated.

/* ------------------------------------------------------------
   Q2. Explain closures with an example.
   ------------------------------------------------------------ */
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

// ANSWER:
// A closure is a function that "remembers" variables from its outer
// scope even after that outer function has finished executing.
// Here, increment() keeps access to `count` even though counter()
// already returned.

/* ------------------------------------------------------------
   Q3. What is the difference between == and ===?
   ------------------------------------------------------------ */
console.log(0 == "0"); // true  (type coercion)
console.log(0 === "0"); // false (no coercion)
console.log(null == undefined); // true
console.log(null === undefined); // false

// ANSWER:
// == performs type coercion before comparing.
// === checks both value and type, no conversion.
// Best practice: always use === unless coercion is intentionally needed.

/* ------------------------------------------------------------
   Q4. What is `this` and how is it determined?
   ------------------------------------------------------------ */
const obj = {
  name: "JS",
  regular: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

obj.regular(); // "JS" -> this = obj (the caller)
obj.arrow(); // undefined -> arrow fn uses lexical `this`

// ANSWER:
// `this` depends on HOW a function is called, not where it's defined.
// Regular functions get `this` from the calling object.
// Arrow functions don't have their own `this` -- they inherit it
// from the surrounding (lexical) scope.

/* ------------------------------------------------------------
   Q5. Explain the event loop and call stack.
   ------------------------------------------------------------ */
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output: 1, 4, 3, 2

// ANSWER:
// JS is single-threaded with one call stack.
// Synchronous code (1, 4) runs first.
// Then the microtask queue (Promises) runs before the
// macrotask queue (setTimeout) -- so 3 prints before 2,
// even with a 0ms delay.

/* ------------------------------------------------------------
   Q6. What is event bubbling and capturing? How do you stop it?
   ------------------------------------------------------------ */
document.getElementById("child").addEventListener("click", (e) => {
  console.log("child clicked");
  e.stopPropagation(); // stops the event from bubbling to parent
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("parent clicked");
});

// ANSWER:
// Bubbling: event fires on the target, then propagates upward
// through its ancestors.
// Capturing: the reverse (top -> down), enabled via {capture: true}.
// e.stopPropagation() prevents further propagation in either direction.

/* ------------------------------------------------------------
   Q7. Implement a debounce function.
   ------------------------------------------------------------ */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const log = debounce(() => console.log("Searching..."), 500);
window.addEventListener("input", log); // fires 500ms after typing stops

// ANSWER:
// Debouncing delays execution until a pause in events occurs --
// useful for search inputs, resize handlers, etc.
// Each new call resets the timer, so fn only runs once things settle.

/* ------------------------------------------------------------
   Q8. What is prototypal inheritance?
   ------------------------------------------------------------ */
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const d = new Dog("Rex");
d.speak(); // "Rex makes a sound."

// ANSWER:
// JS objects inherit properties/methods via a prototype chain
// rather than classical class-based inheritance.
// Every object has an internal [[Prototype]] link; if a property
// isn't found on the object itself, JS looks up the chain.

/* ------------------------------------------------------------
   Q9. Promise.all vs Promise.race vs Promise.allSettled
   ------------------------------------------------------------ */
const p1 = Promise.resolve(1);
const p2 = new Promise((res) => setTimeout(() => res(2), 100));
const p3 = Promise.reject("error");

Promise.all([p1, p2]).then(console.log); // [1, 2]
Promise.race([p1, p2]).then(console.log); // 1 (fastest)
Promise.allSettled([p1, p3]).then(console.log);
// [{status:'fulfilled', value:1}, {status:'rejected', reason:'error'}]

// ANSWER:
// Promise.all resolves when ALL promises resolve; rejects fast if
// any one fails.
// Promise.race settles as soon as the FIRST promise settles
// (resolve or reject).
// Promise.allSettled waits for all promises regardless of outcome
// and reports each individual result.

/* ------------------------------------------------------------
   Q10. Flatten a nested array without using Array.flat().
   ------------------------------------------------------------ */
function flatten(arr) {
  return arr.reduce((flat, item) => {
    return flat.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

console.log(flatten([1, [2, 3, [4, [5, 6]]], 7]));
// [1, 2, 3, 4, 5, 6, 7]

// ANSWER:
// Uses recursion -- for each element, if it's an array, recursively
// flatten it; otherwise, add it directly. Tests understanding of
// recursion + array methods (reduce, concat, isArray).
