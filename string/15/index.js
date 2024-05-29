// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(s) {
  // Khởi tạo các biến cần thiết
  let charIndexMap = {};
  let left = 0;
  let maxLength = 0;

  // Duyệt qua từng ký tự chuỗi
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    // Nếu ký tự hiện tại đã tồn tại trong charIndexMap và nằm trong khoảng từ `left` đến `right`
    if (
      charIndexMap[currentChar] !== undefined &&
      charIndexMap[currentChar] >= left
    ) {
      // Di chuyển `left` đến sau vị trí đã gặp ký tự hiện tại
      left = charIndexMap[currentChar] + 1;
    }

    // Cập nhật chỉ số của ký tự hiện tại
    charIndexMap[currentChar] = right;

    // Cập nhật độ dài lớn nhất của chuỗi con không lặp lại
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

let s = "pwwkew";

let result = lengthOfLongestSubstring(s);

console.log(result);
