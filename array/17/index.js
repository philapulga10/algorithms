// 1089. Duplicate Zeros

// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]

function duplicateZeros(arr) {
  const n = arr.length;
  let i = 0;

  while (i < n) {
    if (arr[i] === 0) {
      for (let j = n - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }

      i++;
    }

    i++;
  }
}

let arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr1);
console.log(arr1);

let arr2 = [1, 2, 3];
duplicateZeros(arr2);
console.log(arr2);
