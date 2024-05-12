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
