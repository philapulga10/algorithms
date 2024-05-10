function kiemTraSoHoanThien(n) {
  let tongUocSo = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      tongUocSo += i;
    }
  }

  return tongUocSo === n;
}

const soCanKiemTra = 28;
const ketQua = kiemTraSoHoanThien(soCanKiemTra);

if (ketQua) {
  console.log(`${soCanKiemTra} là một số hoàn thiện.`);
} else {
  console.log(`${soCanKiemTra} không phải là một số hoàn thiện.`);
}