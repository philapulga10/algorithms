// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

let wordPattern = function (pattern, string) {
  const newString = string.split(" ");

  if (pattern.length !== newString.length) {
    return false;
  }

  const obj = {};

  for (let i = 0; i < newString.length; i++) {
    if (obj[pattern[i]] && obj[pattern[i]] !== newString[i]) {
      return false;
    }

    obj[pattern[i]] = newString[i];
  }

  return new Set(Object.values(obj)).size === Object.values(obj).length;
};

let pattern = "abbai";
let string = "dog cat cat dog";

let result = wordPattern(pattern, string);

console.log(result);
