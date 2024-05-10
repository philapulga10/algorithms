function duplicateZeros(arr) {
  let n = arr.length;
  let i = 0;

  while (i < n) {
    if (arr[i] === 0) {
      for (let j = n - 1; j >= i + 1; j--) {
        arr[j] = arr[j - 1];
      }

      i++;
    }

    i++;
  }
}

let arr = [1, 0, 2, 3, 0, 4, 5, 0];

duplicateZeros(arr);

console.log(arr);
