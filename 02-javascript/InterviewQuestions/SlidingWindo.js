// ============================================================
//  SLIDING WINDOW - SET 1 (Questions 1 to 5, each with answer)
//  Run:  node sliding-window-set1-with-answers.js
// ============================================================

// ------------------------------------------------------------
// Q1 (Easy) - Fixed window
// Maximum sum of any subarray of size k.
// Example: arr = [2, 1, 5, 1, 3, 2], k = 3  ->  9  (5 + 1 + 3)
// ------------------------------------------------------------
// ANSWER:
// Build the first window sum, then slide: add the new element on the
// right, subtract the element that left on the left. O(n) time.
function maxSumSubarray(arr, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i]; // first window
  let max = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]; // slide the window by one
    max = Math.max(max, sum);
  }
  return max;
}

// ------------------------------------------------------------
// Q2 (Medium) - Variable window
// Length of the longest substring without repeating characters.
// Example: "abcabcbb" -> 3  ("abc")
// ------------------------------------------------------------
// ANSWER:
// Keep a Set of characters inside the window. When the new character is
// already in the Set, shrink from the left until it is removed.
function longestUniqueSubstring(s) {
  const seen = new Set();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      // duplicate -> shrink
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    best = Math.max(best, right - left + 1);
  }
  return best;
}

// ------------------------------------------------------------
// Q3 (Medium) - Variable window (find the minimum)
// Smallest length of a contiguous subarray whose sum >= target.
// Return 0 if none exists. All numbers are positive.
// Example: target = 7, arr = [2, 3, 1, 2, 4, 3]  ->  2  ([4, 3])
// ------------------------------------------------------------
// ANSWER:
// Expand right to add numbers. As soon as sum >= target, record the
// length and shrink from the left while the sum is still enough.
function minSubarrayLen(target, arr) {
  let left = 0;
  let sum = 0;
  let best = Infinity;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= target) {
      best = Math.min(best, right - left + 1);
      sum -= arr[left];
      left++;
    }
  }
  return best === Infinity ? 0 : best;
}

// ------------------------------------------------------------
// Q4 (Medium) - Variable window with a frequency map
// Length of the longest substring with at most k distinct characters.
// Example: s = "eceba", k = 2  ->  3  ("ece")
// ------------------------------------------------------------
// ANSWER:
// Map of char -> count inside the window. map.size is the number of
// distinct characters. If it goes above k, shrink from the left.
function longestKDistinct(s, k) {
  const count = new Map();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    count.set(s[right], (count.get(s[right]) || 0) + 1);

    while (count.size > k) {
      const ch = s[left];
      count.set(ch, count.get(ch) - 1);
      if (count.get(ch) === 0) count.delete(ch); // remove when count hits 0
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

// ------------------------------------------------------------
// Q5 (Medium) - Window with a "budget"
// Given a binary array, you may flip at most k zeros to ones.
// Return the length of the longest run of 1s you can get.
// Example: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2  ->  6
// ------------------------------------------------------------
// ANSWER:
// Count zeros inside the window. The window is valid while zeros <= k
// (those zeros are the ones we "flip"). If zeros > k, shrink left.
function longestOnes(nums, k) {
  let left = 0;
  let zeros = 0;
  let best = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;

    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}

// ============================================================
//  TEST RUNNER
// ============================================================
const tests = [
  {
    name: "Q1 maxSumSubarray",
    fn: maxSumSubarray,
    cases: [
      { args: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
      { args: [[2, 3, 4, 1, 5], 2], expected: 7 },
      { args: [[1, 1, 1, 1], 4], expected: 4 },
    ],
  },
  {
    name: "Q2 longestUniqueSubstring",
    fn: longestUniqueSubstring,
    cases: [
      { args: ["abcabcbb"], expected: 3 },
      { args: ["bbbbb"], expected: 1 },
      { args: ["pwwkew"], expected: 3 },
      { args: [""], expected: 0 },
    ],
  },
  {
    name: "Q3 minSubarrayLen",
    fn: minSubarrayLen,
    cases: [
      { args: [7, [2, 3, 1, 2, 4, 3]], expected: 2 },
      { args: [4, [1, 4, 4]], expected: 1 },
      { args: [11, [1, 1, 1, 1, 1]], expected: 0 },
    ],
  },
  {
    name: "Q4 longestKDistinct",
    fn: longestKDistinct,
    cases: [
      { args: ["eceba", 2], expected: 3 },
      { args: ["aa", 1], expected: 2 },
      { args: ["abcadcacacaca", 3], expected: 11 },
    ],
  },
  {
    name: "Q5 longestOnes",
    fn: longestOnes,
    cases: [
      { args: [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2], expected: 6 },
      {
        args: [[0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3],
        expected: 10,
      },
      { args: [[1, 1, 1], 0], expected: 3 },
    ],
  },
];

let totalPass = 0;
let totalCases = 0;

for (const t of tests) {
  console.log(`\n${t.name}`);
  t.cases.forEach((c, i) => {
    totalCases++;
    let got;
    try {
      got = t.fn(...c.args);
    } catch (e) {
      got = "ERROR: " + e.message;
    }
    const ok = got === c.expected;
    if (ok) totalPass++;
    console.log(
      `  ${ok ? "PASS" : "FAIL"}  case ${i + 1}  expected: ${JSON.stringify(c.expected)}  got: ${JSON.stringify(got)}`,
    );
  });
}

console.log(`\n==== ${totalPass} / ${totalCases} test cases passed ====`);
