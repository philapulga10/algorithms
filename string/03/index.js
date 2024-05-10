// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

let isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  objS = {};
  objT = {};

  for (let i = 0; i < s.length; i++) {
    objS[s[i]] = (objS[s[i]] || 0) + 1;
    objT[t[i]] = (objT[t[i]] || 0) + 1;
  }

  for (let key in objS) {
    if (objS[key] !== objT[key]) {
      return false;
    }
  }

  return true;
};

let s = "anagram";
let t = "nagaran";

console.log(isAnagram(s, t));
