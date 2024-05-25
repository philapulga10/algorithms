let isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  objS = {};
  objT = {};

  for (let i = 0; i < s.length; i++) {
    objS[s[i]] = (objS[s[i]] || 0) + 1;
    objT[t[i]] = (objT[t[i]] || 0) + 1;
  }

  for (let key in objS) {
    if (objS[key] !== objT[key]) {
      return false;
    }
  }

  return true;
};

let s = "anagram";
let t = "nagaran";

console.log(isAnagram(s, t));
