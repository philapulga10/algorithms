function intersectionII(numbers1, numbers2) {
  numbers1.sort((a, b) => b - a);
  numbers2.sort((a, b) => b - a);

  let result = [];

  let i = numbers1.length - 1;
  let j = numbers2.length - 1;

  while (i >= 0 && j >= 0) {
    if (numbers1[i] === numbers2[j]) {
      result.push(numbers1[i]);

      i--;
      j--;
    } else if (numbers1[i] > numbers2[j]) {
      j--;
    } else {
      i--;
    }
  }

  return result;
}

let numbers1 = [4, 2, 2, 3, 7];
let numbers2 = [1, 5, 1, 2, 7, 2, 4];

let result = intersectionII(numbers1, numbers2);

console.log(result);
