- numbers = [4, 3, 2, 7, 8, 2, 3, 1]
- n = 8
- seen = [false, false, false, false, false, false, false, false]
- result = []

- seen[3] = true
- seen[2] = true
- seen[1] = true
- seen[6] = true
- seen[7] = true
- seen[1] = true
- seen[2] = true
- seen[0] = true
- seen = [true, true, true, true, false, false, true, true]

- i = 0 => seen[0] = true
- i = 1 => seen[1] = true
- i = 2 => seen[2] = true
- i = 3 => seen[3] = true
- i = 4 => seen[4] = false => result = [5]
- i = 5 => seen[5] = false => result = [5, 6]
- i = 6 => seen[6] = true
- i = 7 => seen[7] = true

result = [5, 6]
