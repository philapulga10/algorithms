// 349. Intersection of Two Arrays
// Given two integer arrays nums1 and nums2, return an array of their 
// intersection
// . Each element in the result must be unique and you may return the result in any order.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

function intersection(numbers1, numbers2) {
  const set1 = new Set(numbers1);
  const set2 = new Set(numbers2);

  const intersetionSet = new Set();

  for (let number of set1) {
    if (set2.has(number)) {
      intersetionSet.add(number);
    }
  }

  return Array.from(intersetionSet);
}

let numbers1 = [1, 2, 2, 1];
let numbers2 = [2, 2];

let result = intersection(numbers1, numbers2);

console.log(result);
