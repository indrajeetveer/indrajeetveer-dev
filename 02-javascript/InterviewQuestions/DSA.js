/**
 * MEDIUM LEVEL DSA QUESTIONS - JavaScript
 * Each problem has: statement, approach, complexity, and solution.
 * Run with: node medium-dsa-js.js
 */

/* ============================================================
 * 1. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
 * ------------------------------------------------------------
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 *
 * Example:
 *   Input:  "abcabcbb"
 *   Output: 3   ("abc")
 *
 * Approach: Sliding window + hash map storing last seen index
 * of each character. Move left pointer when a repeat is found.
 * Time:  O(n)
 * Space: O(min(n, charset size))
 * ============================================================ */
function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let start = 0;
  let maxLen = 0;

  for (let end = 0; end < s.length; end++) {
    const ch = s[end];
    if (lastSeen.has(ch) && lastSeen.get(ch) >= start) {
      start = lastSeen.get(ch) + 1;
    }
    lastSeen.set(ch, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}

/* ============================================================
 * 2. GROUP ANAGRAMS
 * ------------------------------------------------------------
 * Given an array of strings, group the anagrams together.
 *
 * Example:
 *   Input:  ["eat","tea","tan","ate","nat","bat"]
 *   Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 * Approach: Sort each word's letters to form a canonical key,
 * group words by that key using a hash map.
 * Time:  O(n * k log k)  (k = avg word length)
 * Space: O(n * k)
 * ============================================================ */
function groupAnagrams(strs) {
  const groups = new Map();

  for (const word of strs) {
    const key = word.split("").sort().join("");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }
  return Array.from(groups.values());
}

/* ============================================================
 * 3. KADANE'S ALGORITHM — MAXIMUM SUBARRAY SUM
 * ------------------------------------------------------------
 * Given an integer array, find the contiguous subarray with
 * the largest sum and return that sum.
 *
 * Example:
 *   Input:  [-2,1,-3,4,-1,2,1,-5,4]
 *   Output: 6   ([4,-1,2,1])
 *
 * Approach: Track running sum; reset to current element when
 * running sum drops below it. Track global max along the way.
 * Time:  O(n)
 * Space: O(1)
 * ============================================================ */
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

/* ============================================================
 * 4. COURSE SCHEDULE (DETECT CYCLE IN A DIRECTED GRAPH)
 * ------------------------------------------------------------
 * There are numCourses courses labeled 0..n-1. Given a list of
 * prerequisite pairs [a, b] meaning "to take a, you must first
 * take b", determine if it's possible to finish all courses
 * (i.e., no cyclic dependency).
 *
 * Example:
 *   Input:  numCourses = 2, prerequisites = [[1,0]]
 *   Output: true
 *   Input:  numCourses = 2, prerequisites = [[1,0],[0,1]]
 *   Output: false
 *
 * Approach: Build adjacency list, do DFS with a 3-state visited
 * array (0 = unvisited, 1 = visiting, 2 = done) to detect a
 * back-edge (cycle).
 * Time:  O(V + E)
 * Space: O(V + E)
 * ============================================================ */
function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [course, prereq] of prerequisites) {
    graph[course].push(prereq);
  }

  const state = new Array(numCourses).fill(0); // 0=unvisited,1=visiting,2=done

  function hasCycle(node) {
    if (state[node] === 1) return true; // back-edge -> cycle
    if (state[node] === 2) return false; // already cleared

    state[node] = 1;
    for (const next of graph[node]) {
      if (hasCycle(next)) return true;
    }
    state[node] = 2;
    return false;
  }

  for (let course = 0; course < numCourses; course++) {
    if (hasCycle(course)) return false;
  }
  return true;
}

/* ============================================================
 * QUICK TESTS
 * ============================================================ */
console.log(
  '1) lengthOfLongestSubstring("abcabcbb") =',
  lengthOfLongestSubstring("abcabcbb"),
); // 3
console.log(
  "2) groupAnagrams([...]) =",
  JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])),
);
console.log(
  "3) maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) =",
  maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]),
); // 6
console.log(
  "4) canFinish(2, [[1,0],[0,1]]) =",
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
); // false

module.exports = {
  lengthOfLongestSubstring,
  groupAnagrams,
  maxSubArray,
  canFinish,
};

/*
  JavaScript DSA — Topic-wise Practice Questions with Solutions
  ---------------------------------------------------------------
  Each section: question as a comment, then a working solution.
  Try solving on your own first — solutions are here for checking/reference.
*/

/* =========================================================
   1. ARRAYS
========================================================= */

// Q1. Find the maximum subarray sum (Kadane's Algorithm)
function maxSubArray(nums) {
  let maxSum = nums[0];
  let curSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], curSum + nums[i]);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}
// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) -> 6

// Q2. Rotate an array to the right by k steps
function rotateArray(nums, k) {
  k = k % nums.length;
  const reverse = (arr, l, r) => {
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  };
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
}
// rotateArray([1,2,3,4,5,6,7], 3) -> [5,6,7,1,2,3,4]

// Q3. Find the missing number in an array of 1 to n
function missingNumber(nums) {
  const n = nums.length; // array has n numbers from 1..n+1 range with one missing
  const expectedSum = ((n + 1) * (n + 2)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}
// missingNumber([1,2,4,5]) -> 3

// Q4. Merge two sorted arrays into one sorted array
function mergeSortedArrays(a, b) {
  const result = [];
  let i = 0,
    j = 0;
  while (i < a.length && j < b.length) {
    result.push(a[i] <= b[j] ? a[i++] : b[j++]);
  }
  while (i < a.length) result.push(a[i++]);
  while (j < b.length) result.push(b[j++]);
  return result;
}
// mergeSortedArrays([1,3,5],[2,4,6]) -> [1,2,3,4,5,6]

// Q5. Find all pairs in an array whose sum equals a target
function pairsWithSum(nums, target) {
  const seen = new Set();
  const pairs = [];
  for (const num of nums) {
    const complement = target - num;
    if (seen.has(complement)) pairs.push([complement, num]);
    seen.add(num);
  }
  return pairs;
}
// pairsWithSum([1,5,3,7,9,2], 10) -> [[1,9],[3,7]]

// Q6. Find the duplicate number (numbers 1..n, one repeated) — Floyd's cycle detection
function findDuplicate(nums) {
  let slow = nums[0],
    fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
// findDuplicate([1,3,4,2,2]) -> 2

/* =========================================================
   2. STRINGS
========================================================= */

// Q1. Check if a string is a palindrome (ignore case/spaces)
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
// isPalindrome("A man, a plan, a canal: Panama") -> true

// Q2. Reverse words in a sentence
function reverseWords(sentence) {
  return sentence.trim().split(/\s+/).reverse().join(" ");
}
// reverseWords("I love JS") -> "JS love I"

// Q3. Find the first non-repeating character in a string
function firstNonRepeatingChar(str) {
  const count = {};
  for (const ch of str) count[ch] = (count[ch] || 0) + 1;
  for (const ch of str) if (count[ch] === 1) return ch;
  return null;
}
// firstNonRepeatingChar("swiss") -> "w"

// Q4. Check if two strings are anagrams of each other
function isAnagram(a, b) {
  if (a.length !== b.length) return false;
  const count = {};
  for (const ch of a) count[ch] = (count[ch] || 0) + 1;
  for (const ch of b) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}
// isAnagram("listen", "silent") -> true

// Q5. String compression (aabcccccaaa -> a2b1c5a3)
function compressString(str) {
  let result = "";
  let count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }
  return result.length < str.length ? result : str;
}
// compressString("aabcccccaaa") -> "a2b1c5a3"

// Q6. Find the longest common prefix among an array of strings
function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}
// longestCommonPrefix(["flower","flow","flight"]) -> "fl"

/* =========================================================
   3. LINKED LIST
========================================================= */

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Q1. Merge two sorted linked lists into one
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0);
  let tail = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 || l2;
  return dummy.next;
}

// Q2. Find the middle node of a linked list (single pass — slow/fast pointers)
function middleNode(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Q3. Remove the nth node from the end of a linked list
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy,
    slow = dummy;
  for (let i = 0; i < n; i++) fast = fast.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}

// Q4. Check if a linked list is a palindrome
function isPalindromeList(head) {
  const values = [];
  let node = head;
  while (node) {
    values.push(node.val);
    node = node.next;
  }
  let l = 0,
    r = values.length - 1;
  while (l < r) {
    if (values[l] !== values[r]) return false;
    l++;
    r--;
  }
  return true;
}

// Q5. Add two numbers represented as linked lists (digits stored in reverse)
function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0);
  let curr = dummy,
    carry = 0;
  while (l1 || l2 || carry) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
}

/* =========================================================
   4. STACK / QUEUE
========================================================= */

// Q1. Implement a queue using two stacks
class QueueUsingStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }
  enqueue(x) {
    this.inStack.push(x);
  }
  dequeue() {
    if (!this.outStack.length) {
      while (this.inStack.length) this.outStack.push(this.inStack.pop());
    }
    return this.outStack.pop();
  }
}

// Q2. Evaluate a postfix expression using a stack
function evalPostfix(tokens) {
  const stack = [];
  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };
  for (const token of tokens) {
    if (token in ops) {
      const b = stack.pop(),
        a = stack.pop();
      stack.push(ops[token](a, b));
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
}
// evalPostfix(["2","1","+","3","*"]) -> 9

// Q3. Find the next greater element for each item in an array
function nextGreaterElement(nums) {
  const result = new Array(nums.length).fill(-1);
  const stack = []; // stores indices
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      result[stack.pop()] = nums[i];
    }
    stack.push(i);
  }
  return result;
}
// nextGreaterElement([2,1,2,4,3]) -> [4,2,4,-1,-1]

// Q4. Stack that also supports getMin() in O(1)
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(x) {
    this.stack.push(x);
    const currentMin = this.minStack.length
      ? this.minStack[this.minStack.length - 1]
      : Infinity;
    this.minStack.push(Math.min(x, currentMin));
  }
  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

// Q5. Sort a stack using only stack operations (no extra array)
function sortStack(stack) {
  const tempStack = [];
  while (stack.length) {
    const temp = stack.pop();
    while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  return tempStack; // sorted ascending, top = largest
}

/* =========================================================
   5. RECURSION / BACKTRACKING
========================================================= */

// Q1. Generate all valid combinations of n pairs of parentheses
function generateParenthesis(n) {
  const result = [];
  const backtrack = (current, open, close) => {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }
    if (open < n) backtrack(current + "(", open + 1, close);
    if (close < open) backtrack(current + ")", open, close + 1);
  };
  backtrack("", 0, 0);
  return result;
}

// Q2. Solve the N-Queens problem (return count of solutions + boards)
function solveNQueens(n) {
  const results = [];
  const cols = new Set(),
    diag1 = new Set(),
    diag2 = new Set();
  const board = [];

  const backtrack = (row) => {
    if (row === n) {
      results.push(
        board.map((c) => ".".repeat(c) + "Q" + ".".repeat(n - c - 1)),
      );
      return;
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col))
        continue;
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);
      board.push(col);
      backtrack(row + 1);
      board.pop();
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  };
  backtrack(0);
  return results;
}

// Q3. Combination Sum — all combinations that sum to a target (reuse allowed)
function combinationSum(candidates, target) {
  const result = [];
  const backtrack = (start, remaining, path) => {
    if (remaining === 0) {
      result.push([...path]);
      return;
    }
    if (remaining < 0) return;
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, remaining - candidates[i], path);
      path.pop();
    }
  };
  backtrack(0, target, []);
  return result;
}
// combinationSum([2,3,6,7], 7) -> [[2,2,3],[7]]

// Q4. Print all permutations of a string
function permutations(str) {
  if (str.length <= 1) return [str];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const rest = str.slice(0, i) + str.slice(i + 1);
    for (const perm of permutations(rest)) {
      result.push(str[i] + perm);
    }
  }
  return result;
}
// permutations("abc") -> ["abc","acb","bac","bca","cab","cba"]

// Q5. power(x, n) using recursion (fast exponentiation)
function power(x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / power(x, -n);
  const half = power(x, Math.floor(n / 2));
  return n % 2 === 0 ? half * half : half * half * x;
}
// power(2, 10) -> 1024

/* =========================================================
   6. TREES
========================================================= */

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Q1. Check if two binary trees are identical
function isSameTree(p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Q2. Lowest Common Ancestor (LCA) of two nodes in a BST
function lowestCommonAncestor(root, p, q) {
  let node = root;
  while (node) {
    if (p.val < node.val && q.val < node.val) node = node.left;
    else if (p.val > node.val && q.val > node.val) node = node.right;
    else return node;
  }
  return null;
}

// Q3. Validate if a binary tree is a valid BST
function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val <= min || root.val >= max) return false;
  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  );
}

// Q4. Convert a sorted array into a balanced BST
function sortedArrayToBST(nums, lo = 0, hi = nums.length - 1) {
  if (lo > hi) return null;
  const mid = Math.floor((lo + hi) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums, lo, mid - 1);
  node.right = sortedArrayToBST(nums, mid + 1, hi);
  return node;
}

// Q5. Find the diameter of a binary tree
function diameterOfBinaryTree(root) {
  let diameter = 0;
  const depth = (node) => {
    if (!node) return 0;
    const left = depth(node.left);
    const right = depth(node.right);
    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  };
  depth(root);
  return diameter;
}

// Q6. Zigzag (spiral) level order traversal
function zigzagLevelOrder(root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  let leftToRight = true;
  while (queue.length) {
    const level = queue.map((n) => n.val);
    result.push(leftToRight ? level : level.reverse());
    const nextQueue = [];
    for (const node of queue) {
      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);
    }
    queue = nextQueue;
    leftToRight = !leftToRight;
  }
  return result;
}

/* =========================================================
   7. GRAPHS
========================================================= */

// Q1. BFS and DFS on an adjacency list
function bfs(graph, start) {
  const visited = new Set([start]);
  const order = [];
  const queue = [start];
  while (queue.length) {
    const node = queue.shift();
    order.push(node);
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return order;
}

function dfs(graph, start, visited = new Set(), order = []) {
  visited.add(start);
  order.push(start);
  for (const neighbor of graph[start] || []) {
    if (!visited.has(neighbor)) dfs(graph, neighbor, visited, order);
  }
  return order;
}

// Q2. Count the number of islands in a 2D grid
function numIslands(grid) {
  if (!grid.length) return 0;
  const rows = grid.length,
    cols = grid[0].length;
  let count = 0;

  const sink = (r, c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== "1") return;
    grid[r][c] = "0";
    sink(r + 1, c);
    sink(r - 1, c);
    sink(r, c + 1);
    sink(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        sink(r, c);
      }
    }
  }
  return count;
}

// Q3. Detect a cycle in a directed graph
function hasCycleDirected(graph) {
  const visiting = new Set(),
    visited = new Set();
  const dfsCheck = (node) => {
    if (visiting.has(node)) return true;
    if (visited.has(node)) return false;
    visiting.add(node);
    for (const neighbor of graph[node] || []) {
      if (dfsCheck(neighbor)) return true;
    }
    visiting.delete(node);
    visited.add(node);
    return false;
  };
  for (const node in graph) {
    if (dfsCheck(node)) return true;
  }
  return false;
}

// Q4. Find the shortest path in an unweighted graph (BFS)
function shortestPath(graph, start, end) {
  const visited = new Set([start]);
  const queue = [[start, [start]]];
  while (queue.length) {
    const [node, path] = queue.shift();
    if (node === end) return path;
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, [...path, neighbor]]);
      }
    }
  }
  return null; // no path found
}

// Q5. Clone a graph (deep copy) — node = { val, neighbors: [] }
function cloneGraph(node, visited = new Map()) {
  if (!node) return null;
  if (visited.has(node)) return visited.get(node);
  const clone = { val: node.val, neighbors: [] };
  visited.set(node, clone);
  for (const neighbor of node.neighbors) {
    clone.neighbors.push(cloneGraph(neighbor, visited));
  }
  return clone;
}

/* =========================================================
   8. DYNAMIC PROGRAMMING
========================================================= */

// Q1. Coin Change — minimum coins to make a target amount
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
// coinChange([1,2,5], 11) -> 3

// Q2. Longest Common Subsequence between two strings
function longestCommonSubsequence(text1, text2) {
  const m = text1.length,
    n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        text1[i - 1] === text2[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}

// Q3. 0/1 Knapsack problem
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () =>
    new Array(capacity + 1).fill(0),
  );
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      dp[i][w] = dp[i - 1][w];
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1],
        );
      }
    }
  }
  return dp[n][capacity];
}

// Q4. Longest Increasing Subsequence
function lengthOfLIS(nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
  return Math.max(...dp);
}
// lengthOfLIS([10,9,2,5,3,7,101,18]) -> 4

// Q5. Unique Paths in an m x n grid (only right/down moves)
function uniquePaths(m, n) {
  const dp = Array.from({ length: m }, () => new Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

/* =========================================================
   9. SORTING / SEARCHING
========================================================= */

// Q1. Binary Search (iterative and recursive)
function binarySearchIterative(arr, target) {
  let lo = 0,
    hi = arr.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }
  return -1;
}

function binarySearchRecursive(arr, target, lo = 0, hi = arr.length - 1) {
  if (lo > hi) return -1;
  const mid = Math.floor((lo + hi) / 2);
  if (arr[mid] === target) return mid;
  return arr[mid] < target
    ? binarySearchRecursive(arr, target, mid + 1, hi)
    : binarySearchRecursive(arr, target, lo, mid - 1);
}

// Q2. Merge Sort from scratch
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeSortedArrays(left, right); // reuse from Arrays section
}

// Q3. Quick Sort from scratch
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [],
    right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    (arr[i] < pivot ? left : right).push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Q4. Search in a rotated sorted array
function searchRotated(nums, target) {
  let lo = 0,
    hi = nums.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (nums[mid] === target) return mid;
    if (nums[lo] <= nums[mid]) {
      // left half sorted
      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;
      else lo = mid + 1;
    } else {
      // right half sorted
      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;
      else hi = mid - 1;
    }
  }
  return -1;
}

// Q5. Find the kth largest element in an array
function findKthLargest(nums, k) {
  return [...nums].sort((a, b) => b - a)[k - 1];
}
// findKthLargest([3,2,1,5,6,4], 2) -> 5

module.exports = {
  maxSubArray,
  rotateArray,
  missingNumber,
  mergeSortedArrays,
  pairsWithSum,
  findDuplicate,
  isPalindrome,
  reverseWords,
  firstNonRepeatingChar,
  isAnagram,
  compressString,
  longestCommonPrefix,
  ListNode,
  mergeTwoLists,
  middleNode,
  removeNthFromEnd,
  isPalindromeList,
  addTwoNumbers,
  QueueUsingStacks,
  evalPostfix,
  nextGreaterElement,
  MinStack,
  sortStack,
  generateParenthesis,
  solveNQueens,
  combinationSum,
  permutations,
  power,
  TreeNode,
  isSameTree,
  lowestCommonAncestor,
  isValidBST,
  sortedArrayToBST,
  diameterOfBinaryTree,
  zigzagLevelOrder,
  bfs,
  dfs,
  numIslands,
  hasCycleDirected,
  shortestPath,
  cloneGraph,
  coinChange,
  longestCommonSubsequence,
  knapsack,
  lengthOfLIS,
  uniquePaths,
  binarySearchIterative,
  binarySearchRecursive,
  mergeSort,
  quickSort,
  searchRotated,
  findKthLargest,
};
