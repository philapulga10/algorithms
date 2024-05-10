- nums = [4, 3, 2, 7, 8, 2, 3, 1]

- result = []

- uniqueValues = new Set(nums) = [4, 3, 2, 7, 8, 1]

- i = 1 => uniqueValues.has(i) => uniqueValues.has(1)

- i = 2 => uniqueValues.has(i) => uniqueValues.has(2)

- i = 3 => uniqueValues.has(i) => uniqueValues.has(3)

- i = 4 => uniqueValues.has(i) => uniqueValues.has(4)

- i = 5 => uniqueValues.has(i) => uniqueValues.has(5) => result = [5]

- i = 6 => uniqueValues.has(i) => uniqueValues.has(6) => result = [6]

- i = 7 => uniqueValues.has(i) => uniqueValues.has(7)

- i = 8 => uniqueValues.has(i) => uniqueValues.has(8)

=> result = [5, 6]