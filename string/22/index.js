// 859. Buddy Strings

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

function buddyStrings(s, goal) {
  // Nếu hai chuỗi giống nhau
  if (s === goal) {
    let seen = new Set();

    for (let char of s) {
      if (seen.has(char)) {
        return true;
      }

      seen.add(char);
    }

    return false;
  }

  // Tìm các vị trí mà s và goal khác nhau
  let pairs = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      pairs.push([s[i], goal[i]]);
    }
  }

  // Để s trở thành goal, cần có đúng 2 vị trí khác nhau và hoán đổi chúng phải khớp
  return (
    pairs.length === 2 &&
    pairs[0][0] === pairs[1][1] &&
    pairs[0][1] === pairs[1][0]
  );
}

// console.log(buddyStrings("ab", "ba"));
// console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));
