// 415. Add Strings

// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let sum = [];
  let carry = 0;

  while (i >= 0 || j >= 0 || carry) {
    let n1 = num1[i] || 0;
    let n2 = num2[j] || 0;

    let curSum = parseInt(n1) + parseInt(n2) + carry;
    let reminder = curSum % 10;

    sum.push(reminder);

    carry = curSum >= 10 ? 1 : 0;

    j--;
    i--;
  }

  return sum.reverse().join("");
}

let num1 = "99";
let num2 = "671";

console.log(addStrings(num1, num2));
