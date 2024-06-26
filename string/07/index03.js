// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

let strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let isMatch = true;

    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        isMatch = false;

        break;
      }
    }

    if (isMatch) {
      return i;
    }
  }

  return -1;
};

let haystack = "absabutsad";
let needle = "sad";

let result = strStr(haystack, needle);

console.log(result);
