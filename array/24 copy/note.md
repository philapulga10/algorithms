- nums1 = [1, 12, -5, -6, 50, 3]
- k1 = 4

- sum = 0
- i = 0 -> sum = 1
- i = 1 -> sum = 13
- i = 2 -> sum = 8
- i = 3 -> sum = 2

- -> maxSum = 2

- i = 4
  - sum = 2 + 50 - 1 = 51
  - -> maxSum = 51
- i = 5
  - sum = 51 + 3 - 12 = 42
  - -> maxSum = 51

-> return (51 / 4) -> return 12.75
