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
  let lastNonZeroFoundAt = 0;

  // Nếu phần tử không phải là 0, hoán đổi nó với phần tử tại vị trí lastNonZeroFoundAt
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      let temp = array[lastNonZeroFoundAt];

      array[lastNonZeroFoundAt] = array[i];
      array[i] = temp;
      lastNonZeroFoundAt++;
    }
  }

  return array;
};

let array = [0, 1, 0, 3, 12];

console.log("Mảng ban đầu:", array);

let result = moveZeroes(array);

console.log("Mảng sau khi di chuyển các số 0 về cuối:", result);
