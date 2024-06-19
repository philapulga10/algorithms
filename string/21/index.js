// 459. Repeated Substring Pattern

// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

function repeatedSubstringPattern(s) {
  let n = s.length;

  for (let len = 1; len <= Math.floor(n / 2); len++) {
    // Kiểm tra nếu độ dài hiện tại là ước của n
    if (n % len === 0) {
      let pattern = "";

      // Tạo chuỗi con từ đầu đến độ dài hiện tại
      for (let i = 0; i < len; i++) {
        pattern += s[i];
      }

      // Tạo chuỗi lặp lại
      let repeated = "";

      for (let i = 0; i < n / len; i++) {
        repeated += pattern;
      }

      // Kiểm tra nếu chuỗi lặp lại bằng với chuỗi gốc
      if (repeated === s) {
        return true;
      }
    }
  }

  return false;
}

let s = "abcabcabcabc";

let result = repeatedSubstringPattern(s);

console.log(result);
