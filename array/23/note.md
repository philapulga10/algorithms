- res = []
- nums = [-4, -1, -1, 0, 1, 2]

- i = 0

  - left = 1, right = 5
    - check left = 1 < right = 5
    - total = nums[0] + nums[1] + nums[5] = -3
      - total = -3 < 0 => left = 2
  - left = 2, right = 5
    - check left = 2 < right = 5
    - total = nums[0] + nums[2] + nums[5] = -3
      - total = -3 < 0 => left = 3
  - left = 3, right = 5
    - check left = 3 < right = 5
    - total = nums[0] + nums[3] + nums[5] = -2
      - total = -2 < 0 => left = 4
  - left = 4, right = 5
    - check left = 4 < right = 5
    - total = nums[0] + nums[4] + nums[5] = -1
      - total = -1 < 0 => left = 5
  - left = 5, right = 5

- i = 1

  - left = 2, right = 5
    - check left = 2 < right = 5
    - total = nums[1] + nums[2] + nums[5] = 0
      - res = [[-1, -1, 2]]
      - left = 3
      - num[3] !== nums[2]
  - left = 3, right = 5
    - check left = 3 < right = 5
    - total = nums[1] + nums[3] + nums[5] = 1
      - total = -1 > 0 => right = 4
  - left = 3, right = 4
    - check left = 3 < right = 4
    - total = nums[1] + nums[3] + nums[4] = -3
      - total = -3 < 0 => left = 4
  - left = 4, right = 4

- i = 2

  - left = 3, right = 5
    - check left = 3 < right = 5
    - total = nums[2] + nums[3] + nums[5] = 1 => right = 4
  - left = 3, right = 4
    - check left = 4 < right = 5
    - total = nums[2] + nums[3] + nums[4] = 0
      - total = =
      - res = [[-1, -1, 2], [-1, 0, 1]]
      - nums[2] === nums[1]
  - left = 4, right = 5
    - check left = 4 < right = 5
    - total = nums[2] + nums[4] + nums[5] = 2
      - total = 2 > 0
        - right = 4
  - left = 4, right = 4
