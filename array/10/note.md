- array = [0, 1, 0, 3, 2]
- slowPointer = 0
- fastPointer = 0 -> array[0] = 0
- fastPointer = 1 -> array[1] = 1 !== 0 -> array[slowPointer] = array[fastPointer] -> array[0] = array[1] -> [1, 1, 0, 3, 12] -> slowPointer++ = 1
- fastPointer = 2 -> array[2] === 0
- fastPointer = 3 -> array[3] = 3 !== 0 -> array[slowPointer] = array[fastPointer] -> array[1] = array[3] -> [1, 3, 0, 3, 12] -> slowPointer++ = 2
- fastPointer = 4 -> array[4] = 12 !== 0 -> aray[slowPointer] = array[fastPointer] -> array[2] = array[4] -> [1, 3, 12, 3, 12]
- slowPointer = 3 < array.length = 5
- slowPointer < array.length -> [1, 3, 12, 0, 12] -> array[slowPointer] = 0
-> [1, 3, 12, 0, 0]

*** trong thuật toán này thì slowPointer và fastPointer là quan trọng