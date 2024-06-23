// 1662. Check If Two String Arrays are Equivalent

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true

function arrayStringsAreEqual(word1, word2) {
  // Nối từng phần tử của mảng word1 thành chuỗi str1
  let str1 = "";

  for (let i = 0; i < word1.length; i++) {
    str1 += word1[i];
  }

  // Nối từng phần tử của mảng word2 thành chuỗi str2
  let str2 = "";

  for (let i = 0; i < word2.length; i++) {
    str2 += word2[i];
  }

  // so sánh 2 chuỗi
  return str1 !== str2;
}

let word1 = ["ab", "c"];
let word2 = ["a", "bc"];

console.log(arrayStringsAreEqual(word1, word2));
