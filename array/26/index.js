// 724. Find Pivot Index

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

function pivotIndex(nums) {
  // Khởi tạo tổng của mảng đã cho ...
  let totalSum = 0;

  // Duyệt qua các phần tử và cộng chúng lại để lưu trữ vào totalSum
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  // Khởi tạo leftSum là tổng các số đầu tiên từ i, không bao gồm nums[i] ...
  let leftSum = 0;

  // Một lần nữa duyệt qua tất cả các phần tử bằng vòng lặp for và lưu trữ tổng của các số từ trái sang phải ...
  for (let i = 0; i < nums.length; i++) {
    // Tổng bên trái == leftSum
    // Tổng bên phải === totalSum - leftSum - nums[i]
    // Kiểm tra nếu leftSum === totalSum - leftSum - nums[i]
    if (leftSum * 2 == totalSum - nums[i]) {
      return i; // Trả về chỉ số pivot...
    }

    leftSum += nums[i];
  }

  return -1; // Nếu không có chỉ số nào thỏa mãn điều kiện trong đề bài...
}

let nums = [1, 7, 3, 6, 5, 6];

console.log(pivotIndex(nums));
