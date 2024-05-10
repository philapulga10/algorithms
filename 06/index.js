function printLeaders(arr) {
  let size = arr.length;

  for (let i = 0; i < size; i++) {
    let j;

    for (j = i + 1; j < size; j++) {
      if (arr[i] <= arr[j]) {
        break;
      }
    }

    if (j == size) {
      console.log(arr[i] + " ");
    }
  }
}

let arr = [16, 17, 4, 3, 5, 2];

printLeaders(arr);
















// i = 0 => j = 1, 2, 3, 4, 5 => vì 16 < 17 => break
// i = 1 => j = 2, 3, 4, 5 => in 17
// i = 2 => j = 3, 4, 5 => vì 4 < 5 => break
// i = 3 => j = 4, 5 => 3 < 5 => break
// i = 4 => j = 5 => 5 > 2 => in 5
// i = 5 => luôn là số leaders => in 2
