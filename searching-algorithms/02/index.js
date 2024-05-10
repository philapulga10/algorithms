// ---------- START: SOLUTION ONE ----------
// function findMissingNumber(array) {
//   let temp = [];
//   let n = array.length;

//   for (let i = 0; i < n; i++) {
//     temp[i] = 0;
//   }

//   for (let i = 0; i < n; i++) {
//     temp[array[i] - 1] = 1;
//   }

//   for (let i = 0; i < n; i++) {
//     if (temp[i] === 0) {
//       return i + 1;
//     }
//   }
// }

// let array = [1, 3, 7, 5, 6, 2];

// let element = findMissingNumber(array);

// console.log('Missing number: ', element);
// ---------- END: SOLUTION ONE ----------

// ---------- START: SOLUTION TWO ----------
function findMissingNumber(array) {
  const presenceArray = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    presenceArray[array[i] - 1] = 1;
  }

  for (let i = 0; i < presenceArray.length; i++) {
    if (presenceArray[i] === 0) {
      return i + 1;
    }
  }
}

let array = [1, 3, 7, 5, 6, 2];

let element = findMissingNumber(array);

console.log('Missing number: ', element);
// ---------- END: SOLUTION TWO ----------



