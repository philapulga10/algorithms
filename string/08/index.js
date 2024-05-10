let findTheDifference = function (shortString, longString) {
  for (let string of shortString) {
    if (shortString.indexOf(string) !== -1) {
      longString = longString.replace(string, "");
    }
  }

  return longString;
};

let shortString = "abcd";
let longString = "abcde";

let result = findTheDifference(shortString, longString);

console.log(result);
