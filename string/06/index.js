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
  let longestPrefix = "";
  let referenceString = stringArray[0];

  for (let i = 0; i < referenceString.length; i++) {
    let currentChar = referenceString[i];

    for (let j = 1; j < stringArray.length; j++) {
      if (i >= stringArray[j].length || stringArray[j][i] !== currentChar) {
        return longestPrefix;
      }
    }

    longestPrefix += currentChar;
  }

  return longestPrefix;
}

let stringArray = ["flower", "flow", "flight"];

let result = longestCommonPrefix(stringArray);

console.log(result);
