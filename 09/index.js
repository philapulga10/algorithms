let findDisappearedNumbers = function (nums) {
  const disArr = new Set(nums);
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!disArr.has(i)) {
      result.push(i);
    }
  }

  return result;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

let result = findDisappearedNumbers(nums);

console.log(result);