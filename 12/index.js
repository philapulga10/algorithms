let countSegments = function (s) {
  // SPLIT THE INPUT STRING BY SPACES
  const segments = s.split(' ');
  let count = 0;

  // ITERATE THROUGH THE SEGMENTS AND COUNT NON-EMPTY ONES
  for (const segment of segments) {
    if (segment !== '') {
      count++;
    }
  }

  return count;
};

const s = "Hello, my name is John";

let result = countSegments(s);

console.log(result);


