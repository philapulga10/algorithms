function firstRepeatingElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return i;
      }
    }
  }

  return -1;
}

const arr = [10, 5, 3, 4, 3, 5, 6];
const index = firstRepeatingElement(arr);

if (index === -1) {
  console.log("No repeating element found!");
} else {
  console.log("First repeating element is", arr[index]);
}
