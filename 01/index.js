function kiem_tra_snt(n) {
  let flag = true;

  if (n < 2) {
    flag = false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      flag = false;

      break;
    }
  }

  if (flag) {
    console.log(n + ' la so nguyen to');
  } else {
    console.log(n + ' khong phai la so nguyen to');
  }
}

kiem_tra_snt(25);