// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsert(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (target <= numbers[0]) {
      return 0;
    } else if (target > numbers[numbers.length - 1]) {
      return numbers.length;
    } else if (target > numbers[i] && target <= numbers[i + 1]) {
      return i + 1;
    }
  }
}

let numbers = [1, 3, 5, 6];
let target = 1;

let result = searchInsert(numbers, target);

console.log(result);
