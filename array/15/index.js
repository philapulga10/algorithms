// 350. Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

function intersectionII(numbers1, numbers2) {
  numbers1.sort((a, b) => a - b);
  numbers2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  let result = [];

  while (i < numbers1.length && j < numbers2.length) {
    if (numbers1[i] === numbers2[j]) {
      result.push(numbers1[i]);

      i++;
      j++;
    } else if (numbers1[i] < numbers2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

let numbers1 = [2, 2, 3];
let numbers2 = [1, 1, 2, 2, 4];

let result = intersectionII(numbers1, numbers2);

console.log(result);
