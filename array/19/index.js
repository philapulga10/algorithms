// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function (numbers) {
  const n = numbers.length;
  const seen = Array(n).fill(false);
  const result = [];

  for (let num of numbers) {
    seen[num - 1] = true;
  }

  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      result.push(i + 1);
    }
  }

  return result;
};

let numbers = [4, 3, 2, 7, 8, 2, 3, 1];

let result = findDisappearedNumbers(numbers);

console.log(result);
