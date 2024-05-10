- pattern = "abba"
- string = "dog cat cat dog"

- word = ["dog", "cat", "cat", "dog"]

- patternMap = {}
- wordMap = {}

- pattern.length = 4

- i = 0 -> char = a, word = dog
  - patternMap[a] === undefined, patternMap[a] !== dog
- i = 1 -> char = b, word = cat
  - patternMap[b] === undefined, patternMap[b] !== cat
- i = 2 -> char = b, word = cat
  - wordMap[b] === undefined, patternMap[b] !== cat
- i = 3 -> char = a, word = dog
  - wordMap[a] === undefined, patternMap[a] !== dog

- patternMap[a] = dog
- patternMap[b] = cat
- patternMap[b] = cat
- patternMap[a] = dog

- wordMap[dog] = a
- wordMap[cat] = b
- wordMap[cat] = b
- wordMap[dog] = a

- return true