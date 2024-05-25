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

function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false; // Nếu độ dài của chuỗi s và goal khác nhau, trả về false ngay lập tức
  }

  const n = s.length;

  // Duyệt qua từng vị trí để thực hiện dịch chuyển và so sánh với goal
  for (let shift = 0; shift < n; shift++) {
    let rotated = true;

    // Dịch chuyển chuỗi s sang trái shift lần
    for (let i = 0; i < n; i++) {
      if (s[(i + shift) % n] !== goal[i]) {
        rotated = false;
        break;
      }
    }

    // Nếu sau dịch chuyển chuỗi s trùng với goal, trả về true
    if (rotated) {
      return true;
    }
  }

  // Nếu không tìm thấy bất kỳ số lần dịch chuyển nào mà s trùng với goal, trả về false
  return false;
}

// Test các ví dụ
let string1 = "abcde";
let goal1 = "cdeab";
let result1 = rotateString(string1, goal1);
console.log(result1); // Output: true

let string2 = "abcde";
let goal2 = "abced";
let result2 = rotateString(string2, goal2);
console.log(result2); // Output: false
