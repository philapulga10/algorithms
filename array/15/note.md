- numbers1 = [2, 2, 3]
- numbers2 = [1, 1, 2, 2, 4]
- i = 0
- j = 0
- result = []
- numbers1.length = 3, number2.length = 4
- numbers1[0] = 2 > numbers2[0] = 1 -> j++ = 1
- numbers1[0] = 2 > numbers2[1] = 1 -> j++ = 2
- numbers2[0] = 2 === numbers2[1] = 2 -> i++ = 1, j++ = 3 -> result = [2]
- numbers1[1] = 2 === numbers2[3] = 2 -> result = [2] -> i++ = 2, j++ = 4
-> return result