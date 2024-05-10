function intersection(numbers1, numbers2) {
  numbers1.sort((a, b) => a - b);
  numbers2.sort((a, b) => a - b);

  let result = [];

  let i = 0;
  let j = 0;

  while (i < numbers1.length && j < numbers1.length) {
    if (numbers1[i] === numbers2[j]) {
      if (result.length === 0 || result[result.length - 1] !== numbers1[i]) {
        result.push(numbers1[i]);
      }

      i++;
      j++;
    } else if (numbers1[i] < numbers2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

let numbers1 = [1, 2, 2, 1];
let numbers2 = [2, 2];

let result = intersection(numbers1, numbers2);

console.log(result);
