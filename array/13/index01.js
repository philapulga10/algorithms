function containsDuplicate(numbers) {
  const set = new Set(numbers);

  return set.size !== numbers.length;
}

let numbers = [1, 2, 3, 4];

let result = containsDuplicate(numbers);

console.log(result);
