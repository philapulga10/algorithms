function reverseString(s) {
  // INITIALIZE POINTERS FOR THE BEGINNING AND END OF THE STRING
  let start = 0;
  let end = s.length - 1;

  // CONTINUE SWAPPING CHARACTERS UNTIL THE POINTERS MEET OR CROSS
  while (start <= end) {
    // SWAP THE CHARACTERS AT THE CURRENT START AND END POSITIONS
    [s[start], s[end]] = [s[end], s[start]];

    // MOVE THE POINTERS TOWARDS THE MIDDLE OF THE STRING
    start++;
    end--;
  }

  return s;
};

let s = ["h","e","l","l","o"]
let result = reverseString(s);

console.log(result);