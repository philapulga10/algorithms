// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

function lengthOfLastWord(string) {
  let length = 0;

  string = string.trim();

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
      length++;
    } else {
      break;
    }
  }

  return length;
}

let string = " moon  fly me   to   theeee   ";

let result = lengthOfLastWord(string);

console.log(result);
