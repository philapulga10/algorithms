function closestToZero(arr) {
  // SẮP XẾP MẲNG THEO THỨ TỰ TĂNG DẦN
  arr.sort((a, b) => Math.abs(a) - Math.abs(b));

  let minSum = Infinity;
  let result = [];

  // LẶP QUA MẢNG VÀ TÌM CẶP SỐ CÓ TỔNG GẦN NHẤT VỚI 0
  for (let i = 0; i < arr.length - 1; i++) {
    const sum = arr[i] + arr[i + 1];

    if (Math.abs(sum) < Math.abs(minSum)) {
      minSum = sum;
      result = [arr[i], arr[i + 1]];
    }
  }

  return result;
}

const arr = [1, 3, -5, 7, 8, -2];
const closestPair = closestToZero(arr);
console.log("Two elements closest to zero:", closestPair);
