// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

let moveZeroes = function (array) {
  let slowPointer = 0;

  for (let fastPointer = 0; fastPointer < array.length; fastPointer++) {
    if (array[fastPointer] !== 0) {
      array[slowPointer] = array[fastPointer];
      slowPointer++;
    }
  }

  while (slowPointer < array.length) {
    array[slowPointer] = 0;
    slowPointer++;
  }

  return array;
};

let array = [0, 1, 0, 3, 12];

console.log("Mảng ban đầu:", array);

let result = moveZeroes(array);

console.log("Mảng sau khi di chuyển các số 0 về cuối:", result);
