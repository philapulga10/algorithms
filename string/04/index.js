// 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

let firstUniqueChar = function (string) {
  object = {};

  for (s of string) {
    object[s] = (object[s] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (object[string[i]] === 1) {
      return i;
    }
  }

  return -1;
};

let string = "loveleetcode";

let result = firstUniqueChar(string);

console.log(result);
