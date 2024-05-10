// 796. Rotate String

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false

function rotateString(string, goal) {
  let array = string + string;

  if (string.length !== goal.length) {
    return false;
  }

  if (array.includes(goal)) {
    return true;
  } else {
    return false;
  }
}

let string = "abcde";
let goal = "cdeab";

let result = rotateString(string, goal);

console.log(result);
