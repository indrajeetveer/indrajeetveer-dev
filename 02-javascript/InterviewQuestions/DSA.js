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
    const key = word.split('').sort().join('');
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
    if (state[node] === 1) return true;   // back-edge -> cycle
    if (state[node] === 2) return false;  // already cleared

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
console.log('1) lengthOfLongestSubstring("abcabcbb") =', lengthOfLongestSubstring("abcabcbb")); // 3
console.log('2) groupAnagrams([...]) =', JSON.stringify(groupAnagrams(["eat","tea","tan","ate","nat","bat"])));
console.log('3) maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) =', maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log('4) canFinish(2, [[1,0],[0,1]]) =', canFinish(2, [[1,0],[0,1]])); // false

module.exports = { lengthOfLongestSubstring, groupAnagrams, maxSubArray, canFinish };