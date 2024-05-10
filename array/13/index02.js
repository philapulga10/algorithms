function containsDuplicate(numbers) {
  numbers.sort();

  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] === numbers[i + 1]) {
      return true;
    }
  }

  return false;
}

let numbers = [1, 2, 3, 4];

let result = containsDuplicate(numbers);

console.log(result);
