// 283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

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
  let nonZeroElements = [];

  // Tách các phần tử không phải 0 và đếm số lượng các số 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      nonZeroElements.push(array[i]);
    }
  }

  // Lấp đầy mảng gốc với các phần tử không phải 0
  for (let i = 0; i < nonZeroElements.length; i++) {
    array[i] = nonZeroElements[i];
  }

  // Lấp đầy phần còn lại của mảng với số 0
  for (let i = nonZeroElements.length; i < array.length; i++) {
    array[i] = 0;
  }

  return array;
};

let array = [0, 1, 0, 3, 12];

console.log("Mảng ban đầu:", array);

let result = moveZeroes(array);

console.log("Mảng sau khi di chuyển các số 0 về cuối:", result);
