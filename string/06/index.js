// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(stringArray) {
  // Chọn chuỗi đầu tiên làm chuỗi tham chiếu
  let prefix = stringArray[0];

  // Duyệt qua từng ký tự của chuỗi tham chiếu
  for (let i = 0; i < prefix.length; i++) {
    let currentChar = prefix[i];

    // Duyệt qua các chuỗi còn lại trong mảng
    for (let j = 1; j < stringArray.length; j++) {
      let currentString = stringArray[j];

      // Nếu độ dài của chuỗi đang xét không đủ dài hoặc ký tự tại vị trí i không giống
      if (i >= currentString.length || currentString[i] !== currentChar) {
        // Trả về phần đầu chuỗi là chuỗi tiền tố chung dài nhất
        let result = "";

        for (let k = 0; k < i; k++) {
          result += prefix[k];
        }

        return result;
      }
    }
  }

  // Trả về chuỗi tham chiếu nếu là chuỗi tiền tố chung đầy đủ
  return prefix;
}

// Mảng các chuỗi đầu vào
let stringArray = ["flower", "flow", "flight"];

// Gọi hàm tìm chuỗi tiền tố chung dài nhất
let result = longestCommonPrefix(stringArray);

// In kết quả ra màn hình
console.log(result); // Output: "fl"
