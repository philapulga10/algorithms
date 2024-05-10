// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(numbers) {
  let counts = {};
  let majorityThreshold = Math.floor(numbers.length / 2);

  for (let number of numbers) {
    counts[number] = (counts[number] || 0) + 1;
  }

  for (let count of counts) {
    if (counts[count] > majorityThreshold) {
      return parseInt(count);
    }
  }

  return -1;
}

let numbers = [3, 2, 2, 3, 3];

let result = majorityElement(numbers);

console.log(result);
