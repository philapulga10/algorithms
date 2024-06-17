// 557. Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"

function reverseWords(s) {
  let result = "";
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else {
      for (let j = word.length - 1; j >= 0; j--) {
        result += word[j];
      }

      result += " ";
      word = "";
    }
  }

  for (let j = word.length - 1; j >= 0; j--) {
    result += word[j];
  }

  return result;
}

let s = "Let's take LeetCode contest";

let result = reverseWords(s);

console.log(result);
