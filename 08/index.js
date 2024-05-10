let findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let current = 0;
  
  for (let i = 0; i < nums.length; i++) {
    // NẾU GIÁ TRỊ CỦA PHẦN TỬ HIỆN TẠI LÀ 0, CÓ NGHĨA LÀ DÃY SỐ 1 LIÊN TIẾP ĐÃ BỊ ĐỨT, TA CẦN RESET current VỀ 0
    // NẾU GIÁ TRỊ CỦA PHẦN TỬ HIỆN TẠI LÀ 1, TA TĂNG current LÊN 1 ĐƠN VỊ
    current = (nums[i] === 0) ? 0 : current + 1;

    // NẾU current LỚN HƠN max, CẬP NHẬT max BẰNG current
    // NẾU KHÔNG, GIỮ NGUYÊN GIÁ TRỊ CỦA max
    max = (current > max) ? current : max;
  }

  return max;
}

let nums = [1, 1, 0, 1, 1, 0, 1, 1, 1];

let result = findMaxConsecutiveOnes(nums);

console.log(result);

// i = 0 -> current = 1 -> max = 1 > 0 -> max = 1
// i = 1 -> current = 2 -> max = 2 > 1 -> max = 2
// i = 2 -> current = 0 -> max = 0 < 2 -> max = 2
// i = 3 -> current = 1 -> max = 1 < 2 -> max = 2
// i = 4 -> current = 2 -> max = 2 > 2 -> max = 2
// i = 5 -> current = 0 -> max = 0 < 2 -> max = 2
// i = 6 -> current = 1 -> max = 1 < 2 -> max = 2
// i = 7 -> current = 2 -> max = 2 < 2 -> max = 2
// i = 8 -> current = 3 -> max = 3 > 2 -> max = 3