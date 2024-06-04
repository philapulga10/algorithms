// 414. Third Maximum Number

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.

function thirdMax(nums) {
  let distinctNums = [];
  let seen = [];

  for (let i = 0; i < nums.length; i++) {
    if (!seen[nums[i]]) {
      distinctNums.push(nums[i]);
      seen[nums[i]] = true;
    }
  }

  let thirdMax = -Infinity;
  let secondMax = -Infinity;
  let firstMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let num = distinctNums[i];

    if (num > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      thirdMax = secondMax;
      secondMax = num;
    } else if (num > thirdMax) {
      thirdMax = num;
    }
  }

  if (thirdMax === -Infinity) {
    return firstMax;
  }

  return thirdMax;
}

let result = thirdMax([2, 2, 3, 1]);

console.log(result);
