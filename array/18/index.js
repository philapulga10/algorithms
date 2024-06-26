// 53. Maximum Subarray

// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

function maxSubArray(nums) {
  let i = 0;
  let max = nums[0];

  while (i < nums.length) {
    let sum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];

      if (sum > max) {
        max = sum;
      }
    }

    i++;
  }

  return max;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4, 6];

const result = maxSubArray(nums);

console.log(result);
