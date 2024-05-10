function timUocSoLeLonNhat(n) {
  let uocSoLeLonNhat = 1;

  for (let i = 3; i <= n; i += 2) {
    if (n % i === 0) {
      uocSoLeLonNhat = i;
    }
  }

  return uocSoLeLonNhat;
}

const soNguyenDuong = 100;
const uocSoLeLonNhat = timUocSoLeLonNhat(soNguyenDuong);
console.log(`Ước số lẻ lớn nhất của ${soNguyenDuong} là: ${uocSoLeLonNhat}`);