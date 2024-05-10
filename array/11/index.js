// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

let singleNumber = function (numberArray) {
  let uniqueNumbers = new Set();

  for (let num of numberArray) {
    if (uniqueNumbers.has(num)) {
      uniqueNumbers.delete(num);
    } else {
      uniqueNumbers.add(num);
    }
  }

  return [...uniqueNumbers][0];
};

let numberArray = [1, 2, 1, 2, 5];

let result = singleNumber(numberArray);

console.log(result);
