function containsDuplicate(numbers) {
  const counts = {};

  for (const number of numbers) {
    if (counts[number]) {
      return true;
    } else {
      counts[number] = true;
    }
  }

  return false;
}

let numbers = [1, 2, 3, 4];

let result = containsDuplicate(numbers);

console.log(result);
