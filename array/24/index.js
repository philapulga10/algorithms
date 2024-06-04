// 628. Maximum Product of Three Numbers

// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:

// Input: nums = [1,2,3]
// Output: 6
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:

// Input: nums = [-1,-2,-3]
// Output: -6

function maximumProduct(nums) {
  nums.sort((a, b) => b - a);

  let l = nums.length;

  let value1 = nums[0] * nums[1] * nums[2];
  let value2 = nums[0] * nums[l - 1] * nums[l - 2];
  let value3 = nums[l - 1] * nums[l - 2] * nums[l - 3];

  return Math.max(value1, value2, value3);
}

let nums = [-10, -10, -19, -20];
let result = maximumProduct(nums);

console.log(result);
