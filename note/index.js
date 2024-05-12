const numbers = "phinguyenuit10";

const object = {};

for (let number of numbers) {
  object[number] = (object[number] || 0) + 1;
}

console.log(object);

// --------------------------------------------------------------

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

// --------------------------------------------------------------

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

// --------------------------------------------------------------

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

// --------------------------------------------------------------
