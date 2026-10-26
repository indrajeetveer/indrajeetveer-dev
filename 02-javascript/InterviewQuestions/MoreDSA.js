/* ==========================================================
   JavaScript Interview - Common Coding Tasks (with answers)
   Run in VS Code terminal:  node js-coding-tasks.js
   ========================================================== */

/* ----------------------------------------------------------
   1. REVERSE A STRING / CHECK PALINDROME
---------------------------------------------------------- */

// Approach 1: split -> reverse -> join
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Approach 2: for loop (no built-in reverse)
function reverseStringLoop(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Palindrome: ignore case, spaces and punctuation
function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === clean.split("").reverse().join("");
}

// Palindrome: two-pointer (O(1) extra space apart from the cleaned string)
function isPalindromeTwoPointer(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log("--- 1. Reverse / Palindrome ---");
console.log(reverseString("hello")); // "olleh"
console.log(reverseStringLoop("hello")); // "olleh"
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindromeTwoPointer("hello")); // false

/* ----------------------------------------------------------
   2. FLATTEN A NESTED ARRAY
---------------------------------------------------------- */

// Approach 1: built-in
const flattenBuiltIn = (arr) => arr.flat(Infinity);

// Approach 2: recursion
function flatten(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// Approach 3: reduce + recursion
const flattenReduce = (arr) =>
  arr.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flattenReduce(item) : item),
    [],
  );

// Approach 4: iterative with a stack (no recursion, safe for very deep arrays)
function flattenIterative(arr) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.push(item);
    }
  }
  return result.reverse();
}

// Flatten only up to a given depth
function flattenDepth(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
        (acc, item) =>
          acc.concat(
            Array.isArray(item) ? flattenDepth(item, depth - 1) : item,
          ),
        [],
      )
    : arr.slice();
}

console.log("--- 2. Flatten ---");
const nested = [1, [2, [3, [4, 5]], 6], 7];
console.log(flattenBuiltIn(nested)); // [1, 2, 3, 4, 5, 6, 7]
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenReduce(nested)); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenIterative(nested)); // [1, 2, 3, 4, 5, 6, 7]
console.log(flattenDepth(nested, 1)); // [1, 2, [3, [4, 5]], 6, 7]

/* ----------------------------------------------------------
   3. REMOVE DUPLICATES FROM AN ARRAY
---------------------------------------------------------- */

// Approach 1: Set (shortest, O(n))
const uniqueSet = (arr) => [...new Set(arr)];

// Approach 2: filter + indexOf (O(n^2))
const uniqueFilter = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);

// Approach 3: reduce
const uniqueReduce = (arr) =>
  arr.reduce((acc, item) => (acc.includes(item) ? acc : [...acc, item]), []);

// Approach 4: object/Map for tracking (O(n))
function uniqueMap(arr) {
  const seen = new Map();
  const result = [];
  for (const item of arr) {
    if (!seen.has(item)) {
      seen.set(item, true);
      result.push(item);
    }
  }
  return result;
}

// Remove duplicate objects by a key
function uniqueBy(arr, key) {
  const seen = new Set();
  return arr.filter((obj) => {
    if (seen.has(obj[key])) return false;
    seen.add(obj[key]);
    return true;
  });
}

console.log("--- 3. Remove duplicates ---");
const dupes = [1, 2, 2, 3, 4, 4, 5, 1];
console.log(uniqueSet(dupes)); // [1, 2, 3, 4, 5]
console.log(uniqueFilter(dupes)); // [1, 2, 3, 4, 5]
console.log(uniqueReduce(dupes)); // [1, 2, 3, 4, 5]
console.log(uniqueMap(dupes)); // [1, 2, 3, 4, 5]
console.log(uniqueBy([{ id: 1 }, { id: 2 }, { id: 1 }], "id")); // [{ id: 1 }, { id: 2 }]

/* ----------------------------------------------------------
   4. IMPLEMENT Array.prototype.map AND reduce FROM SCRATCH
---------------------------------------------------------- */

Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      // skip holes in sparse arrays, like the real map
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

Array.prototype.myFilter = function (callback, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }
  let i = 0;
  let accumulator;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    // no initial value: use first existing element
    while (i < this.length && !(i in this)) i++;
    if (i >= this.length) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = this[i++];
  }

  for (; i < this.length; i++) {
    if (i in this) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

console.log("--- 4. myMap / myReduce ---");
console.log([1, 2, 3].myMap((n) => n * 2)); // [2, 4, 6]
console.log([1, 2, 3, 4].myFilter((n) => n % 2 === 0)); // [2, 4]
console.log([1, 2, 3, 4].myReduce((a, b) => a + b, 0)); // 10
console.log([1, 2, 3, 4].myReduce((a, b) => a + b)); // 10

/* ----------------------------------------------------------
   5. DEEP CLONE AN OBJECT
---------------------------------------------------------- */

// Easiest options (know their limits):
//   JSON.parse(JSON.stringify(obj))  -> loses undefined, functions, Date (becomes string),
//                                       Map/Set, and throws on circular references
//   structuredClone(obj)             -> modern built-in (Node 17+, modern browsers);
//                                       handles Date, Map, Set, circular refs; no functions

// Manual recursive version with circular reference support
function deepClone(value, seen = new WeakMap()) {
  // primitives and functions are returned as-is
  if (value === null || typeof value !== "object") return value;

  // circular reference check
  if (seen.has(value)) return seen.get(value);

  if (value instanceof Date) return new Date(value.getTime());
  if (value instanceof RegExp) return new RegExp(value.source, value.flags);

  if (value instanceof Map) {
    const mapCopy = new Map();
    seen.set(value, mapCopy);
    value.forEach((v, k) =>
      mapCopy.set(deepClone(k, seen), deepClone(v, seen)),
    );
    return mapCopy;
  }

  if (value instanceof Set) {
    const setCopy = new Set();
    seen.set(value, setCopy);
    value.forEach((v) => setCopy.add(deepClone(v, seen)));
    return setCopy;
  }

  // arrays and plain objects
  const copy = Array.isArray(value)
    ? []
    : Object.create(Object.getPrototypeOf(value));
  seen.set(value, copy);

  for (const key of Reflect.ownKeys(value)) {
    copy[key] = deepClone(value[key], seen);
  }
  return copy;
}

console.log("--- 5. Deep clone ---");
const original = {
  name: "Indrajeet",
  skills: ["JS", "React"],
  address: { city: "Mumbai" },
  joined: new Date("2024-01-01"),
  tags: new Set(["a", "b"]),
};
original.self = original; // circular reference

const cloned = deepClone(original);
cloned.address.city = "Pune";
cloned.skills.push("Node");

console.log(original.address.city); // "Mumbai"  (original untouched)
console.log(original.skills); // ["JS", "React"]
console.log(cloned.self === cloned); // true (circular preserved)
console.log(cloned.joined instanceof Date); // true

/* ----------------------------------------------------------
   6. IMPLEMENT DEBOUNCE (and throttle)
---------------------------------------------------------- */

// Debounce: run the function only after `delay` ms of no new calls.
// Use case: search box, window resize.
function debounce(fn, delay) {
  let timerId;

  function debounced(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }

  debounced.cancel = () => clearTimeout(timerId);
  return debounced;
}

// Throttle: run the function at most once every `limit` ms.
// Use case: scroll events, button spam.
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

console.log("--- 6. Debounce ---");
const log = debounce((msg) => console.log("Debounced:", msg), 300);
log("a");
log("ab");
log("abc"); // only "abc" is printed, after ~300ms

const throttled = throttle((msg) => console.log("Throttled:", msg), 1000);
throttled("first"); // runs
throttled("second"); // ignored (within 1 second)

/* ----------------------------------------------------------
   7. FIRST NON-REPEATING CHARACTER IN A STRING
---------------------------------------------------------- */

// Approach 1: Map for counts, then scan (O(n))
function firstNonRepeating(str) {
  const count = new Map();

  for (const ch of str) {
    count.set(ch, (count.get(ch) || 0) + 1);
  }

  for (const ch of str) {
    if (count.get(ch) === 1) return ch;
  }
  return null; // none found
}

// Approach 2: indexOf / lastIndexOf (simple, O(n^2))
function firstNonRepeatingSimple(str) {
  for (const ch of str) {
    if (str.indexOf(ch) === str.lastIndexOf(ch)) return ch;
  }
  return null;
}

// Variant: return the index instead of the character
function firstNonRepeatingIndex(str) {
  const count = {};
  for (const ch of str) count[ch] = (count[ch] || 0) + 1;
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) return i;
  }
  return -1;
}

console.log("--- 7. First non-repeating char ---");
console.log(firstNonRepeating("swiss")); // "w"
console.log(firstNonRepeatingSimple("aabbcd")); // "c"
console.log(firstNonRepeatingIndex("leetcode")); // 0
console.log(firstNonRepeating("aabb")); // null

/* ----------------------------------------------------------
   8. WRITE A CURRY FUNCTION
---------------------------------------------------------- */

// Currying: f(a, b, c) -> f(a)(b)(c)  (also allows f(a, b)(c) and f(a)(b, c))
function curry(fn) {
  return function curried(...args) {
    // enough arguments collected -> call the original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // otherwise return a function that collects more arguments
    return function (...nextArgs) {
      return curried.apply(this, [...args, ...nextArgs]);
    };
  };
}

// Infinite currying: sum(1)(2)(3)() -> 6
function sum(a) {
  return function (b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}

console.log("--- 8. Curry ---");
const add3 = (a, b, c) => a + b + c;
const curriedAdd = curry(add3);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
console.log(sum(1)(2)(3)(4)()); // 10
