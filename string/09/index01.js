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
  const words = string.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const patternMap = {};
  const wordMap = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (patternMap[char] !== undefined && patternMap[char] !== word) {
      return false;
    }

    if (wordMap[word] !== undefined && wordMap[word] !== char) {
      return false;
    }

    patternMap[char] = word;
    wordMap[word] = char;
  }

  return true;
};

let pattern = "abba";
let string = "dog cat cat dog";
let result = wordPattern(pattern, string);
console.log(result); // Output: true

pattern = "abba";
string = "dog cat cat fish";
result = wordPattern(pattern, string);
console.log(result); // Output: false

pattern = "aaaa";
string = "dog cat cat dog";
result = wordPattern(pattern, string);
console.log(result); // Output: false
