- numbers1 = [2, 2, 3]
- numbers2 = [1, 1, 2, 2, 4]

- result = []

- i = 0
- j = 0

- numbers1[0] = 2 > numbers2[0] = 1 -> i = 0, j = 1
- numbers1[0] = 2 > numbers2[1] = 1 -> i = 0, j = 2
- numbers1[0] = 2 === numbers2[2] = 2
  - result.length === 0
  - result[-1] = undefined !== numbers1[0] = 2 -> result = [2]
  - -> i = 1, j = 3
- numbers1[1] = 2 === numbers2[3] = 2
  - result.length = 1 !== 0
  - result[0] = 2 === numbers1[1] = 2 -> i = 2, j = 4
- numbers1[2] = 3 < numbers2[4] = 4 -> i++ = i = 3
