const isSubsequence = (s, t) => {
  let subsequence = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[subsequence]) {
      subsequence++;
    }
  }

  return subsequence === t.length;
};

let s = "achbgd";
let t = "abc";

let result = isSubsequence(s, t);

console.log(result);
