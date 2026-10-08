// ==================== TWO POINTER QUESTIONS ====================

// 1. Two Sum in Sorted Array
// Question: Find two numbers whose sum is equal to target.
// Example: [1, 2, 3, 4, 6], target = 6
// Answer: [2, 4]

function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}

console.log("1. Two Sum:", twoSum([1, 2, 3, 4, 6], 6));

// 2. Reverse an Array
// Question: Reverse an array using two pointers.
// Example: [1, 2, 3, 4, 5]
// Answer: [5, 4, 3, 2, 1]

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

console.log("2. Reverse:", reverseArray([1, 2, 3, 4, 5]));

// 3. Check Palindrome
// Question: Check whether a string is a palindrome.
// Example: "madam"
// Answer: true

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log("3. Palindrome:", isPalindrome("madam"));

// 4. Remove Duplicates
// Question: Remove duplicates from a sorted array.
// Example: [1, 1, 2, 2, 3, 4, 4]
// Answer: [1, 2, 3, 4]

function removeDuplicates(arr) {
  let left = 0;

  for (let right = 1; right < arr.length; right++) {
    if (arr[right] !== arr[left]) {
      left++;
      arr[left] = arr[right];
    }
  }

  return arr.slice(0, left + 1);
}

console.log("4. Remove Duplicates:", removeDuplicates([1, 1, 2, 2, 3, 4, 4]));

// 5. Container With Most Water
// Question: Find the maximum water container.
// Example: [1,8,6,2,5,4,8,3,7]
// Answer: 49

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let area = width * minHeight;

    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

console.log("5. Maximum Water:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// ==================== TWO POINTER ====================
// Main idea:
// left = 0
// right = arr.length - 1
// Move left or right according to the condition.
// Most Two Pointer solutions have O(n) time complexity.
