- s = "pwwkew"
- charIndexMap = {}, left = 0, maxLength = 0
- right = 0
  - currentChar = p => charIndexMap[p] = 0
  - currentChar = { p: 0 }
  - maxLenght = Math.max(0, 1) = 1
- right = 1
  - currentChar = w => charIndexMap[w] = 1
  - currentChar = { p: 0, w: 1 }
  - maxLenght = Math.max(1, 1) = 1
- right = 2
  - currentChar = w
  - charIndexMap[w] !== undefined && charIndexMap[w] > 0
  - left = 2
  - charIndexMap[w] = 2
  - currentChar = { p: 0; w: 2 }
  - maxLength = Math.max(1, 1) = 1
- right = 3
  - currentChar = k
  - charIndexMap[k] = 3
  - currentChar = { p: 0; w: 2, k: 3 }
  - maxLength = Math.max(1, 2) = 2
- right = 4
  - currentChar = e
  -
- right = 5
  - currentChar = w
