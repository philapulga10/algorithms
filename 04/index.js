function kiemTraSoChinhPhuong(n) {
  const canBacHai = Math.sqrt(n);
  
  return Number.isInteger(canBacHai);
}

const soCanKiemTra = 16;
console.log(`Số ${soCanKiemTra} có phải là số chính phương không? ${kiemTraSoChinhPhuong(soCanKiemTra)}`);
