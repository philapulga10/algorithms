- haystack = "absbutsad"
- needle = "bus"

- haystackLength = 9
- needleLength = 3

- i = 0
  - isMatch = true
  - j = 0 -> haystack[0] = a !== needle[0] = b -> isMatch = false -> break
- i = 1
  - isMatch = true
  - j = 0 -> haystack[1] = b === needle[0] = b
  - j = 1 -> haystack[2] = s !== needle[1] = u -> isMatch = false -> break
- i = 2
  - isMatch = true
  - j = 0 -> haystack[2] = s !== needle[0] = b -> isMatch = false -> break
- i = 3
  - isMatch = true
  - j = 0 -> haystack[3] = b !== needle[0] = b
  - j = 1 -> haystack[4] = u !== needle[1] = u
  - j = 2 -> haystack[5] = t !== needle[1] = s -> isMatch = false -> break
- i = 4
  - isMatch = true
  - j = 0 -> haystack[4] = u !== needle[0] = b -> isMath = false -> break
- i = 5
  - isMatch = true
  - j = 0 -> haystack[5] = t !== needle[0] = b -> isMath = false -> break
- i = 6
  - isMatch = true
  - j = 0 -> haystack[6] = s !== needle[0] = b -> isMath = false -> break
