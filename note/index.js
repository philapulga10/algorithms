{
  let shortString = "abcd";
  let longString = "abcde";

  for (let i = 0; i < longString.length; i++) {
    let find = false;

    for (let j = 0; j < shortString.length; j++) {
      if (shortString[i] === longString[j]) {
        find = true;

        break;
      }
    }

    if (!find) {
      console.log(longString[i]);
    }
  }

  console.log("");
}

// --------------------------------------------------------------

{
  const numbers = "phinguyenuit10";

  const object = {};

  for (let number of numbers) {
    object[number] = (object[number] || 0) + 1;
  }

  console.log(object);
}

// --------------------------------------------------------------

{
  let s = "anagram";
  let t = "nagaram";

  let objectS = {};
  let objectT = {};

  for (let i = 0; i < s.length; i++) {
    objectS[s[i]] = objectS[[s[i]] || 0] + 1;
    objectT[t[i]] = objectT[[t[i]] || 0] + 1;
  }

  for (let key in objectS) {
    if (objectS[key] !== objectT[key]) {
      console.log(false);
    }
  }

  console.log(true);
}

// --------------------------------------------------------------

{
  let string1 = "abc";
  let string2 = "hbagdc";

  let string1Index = 0;
  let string2Index = 0;

  while (string1Index < string1.length && string2Index < string2.length) {
    if (string1[string1Index] === string2[string2Index]) {
      string1Index++;
    }

    string2Index++;
  }

  console.log(string1Index === string1.length);
}

// --------------------------------------------------------------

{
  let haystack = "absbutsad";
  let needle = "sad";

  let haystackLength = haystack.length;
  let needleLength = needle.length;

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    let match = true;

    for (let j = 0; j < needleLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;

        break;
      }
    }

    if (match) {
      console.log(i);
    }
  }

  console.log(-1);
}

// --------------------------------------------------------------

{
  let string = "moon  fly me   to   theeee";

  let length = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
      length++;
    } else {
      break;
    }
  }

  console.log(length);
}

// --------------------------------------------------------------

{
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

  let i = 0;
  let max = nums[0];

  while (i < nums.length) {
    let sum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];

      if (sum > max) {
        max = sum;
      }
    }

    i++;
  }

  console.log(max);
}

// --------------------------------------------------------------

{
  let arr = [1, 0, 2, 3, 0, 4, 5, 0];

  const n = arr.length;
  let i = 0;

  while (i < n) {
    if (arr[i] === 0) {
      for (let j = n - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }

      i++;
    }

    i++;
  }

  console.log(arr);
}

// --------------------------------------------------------------

{
  let numbers1 = [2, 2, 3];
  let numbers2 = [1, 1, 2, 2, 4];

  numbers1.sort((a, b) => a - b);
  numbers2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  let result = [];

  while (i < numbers1.length && j < numbers2.length) {
    if (numbers1[i] === numbers2[j]) {
      result.push(numbers1[i]);

      i++;
      j++;
    } else if (numbers1[i] < numbers2[j]) {
      i++;
    } else {
      j++;
    }
  }

  console.log(result);
}

// --------------------------------------------------------------

{
  let numbers = [1, 2, 3, 1];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        console.log(true);
      }
    }
  }

  console.log(false);
}

// --------------------------------------------------------------

{
  const numbers = [1, 2, 1, 2, 5];

  let seen = {};

  for (let number of numbers) {
    if (seen[number]) {
      seen[number] = false;
    } else {
      seen[number] = true;
    }
  }

  for (let number in seen) {
    if (seen[number]) {
      console.log(parseInt(number));
    }
  }
}

// --------------------------------------------------------------

{
  let array = [0, 1, 0, 3, 12];

  let slowPointer = 0;

  for (let fastPointer = 0; fastPointer < array.length; fastPointer++) {
    if (array[fastPointer] !== 0) {
      array[slowPointer] = array[fastPointer];
      slowPointer++;
    }
  }

  while (slowPointer < array.length) {
    array[slowPointer] = 0;
    slowPointer++;
  }

  console.log(array);
}

// --------------------------------------------------------------

{
  let nonZeroElements = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      nonZeroElements.push(array[i]);
    }
  }

  for (let i = 0; i < nonZeroElements.length; i++) {
    array[i] = nonZeroElements[i];
  }

  for (let i = nonZeroElements.length; i < array.length; i++) {
    array[i] = 0;
  }

  console.log(array);
}

// --------------------------------------------------------------

{
  let lastNonZeroFoundAt = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      let temp = array[lastNonZeroFoundAt];

      array[lastNonZeroFoundAt] = array[i];
      array[i] = temp;
      lastNonZeroFoundAt++;
    }
  }

  console.log(array);
}
