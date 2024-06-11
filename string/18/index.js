// 541. Reverse String II

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

function countChars(words) {
  let count = {};

  for (var i = 0; i < words.length; i++) {
    let char = words[i];

    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  return count;
}

function commonChars(words) {
  // hàm đếm số lần xuất hiện của mỗi ký tự trong một chuỗi
  let commonCount = countChars(words[0]);

  // cập nhật số lần xuất hiện tối thiểu của mỗi ký tự dựa trên các chuỗi còn lại
  for (var i = 1; i < words.length; i++) {
    let wordCount = countChars(words[i]);

    for (let char in commonCount) {
      if (wordCount[char] === undefined) {
        commonCount[char] = 0;
      } else {
        commonCount[char] = Math.min(commonCount[char], wordCount[char]);
      }
    }
  }

  // tạo mảng kết quả chứa các ký tự với số lần xuất hiện tối thiểu
  let result = [];

  for (let char in commonCount) {
    for (let i = 0; i < commonCount[char]; i++) {
      result.push(char);
    }
  }

  return result;
}

let words = ["bella", "label", "roller"];

let result = commonChars(words);

console.log(result);
