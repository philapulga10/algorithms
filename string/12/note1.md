- s = "axc"
- t = "ahbgdc"

- sIndex = 0
- tIndex = 0

- s[0] = a === t[0] = a -> sIndex++ = 1, tIndex++ = 1
- s[1] = x !=== t[1] = h -> tIndex++ = 2
- s[1] = x !== t[2] = b -> tIndex++ = 3
- s[1] = x !== t[3] = g -> tIndex++ = 4
- s[1] = x !== t[4] = d -> tIndex++ = 5
- s[1] = x !== t[5] = c -> tIndex++ = 6

- return 1 !== s.length = 3

-------------------------------------------------------

- s = "abc"
- t = "abcdefg"

- sIndex = 0;
- tIndex = 0

- s[0] = a === t[0] = a -> sIndex++ = 1, tIndex++ = 1
- s[1] = b === t[1] = b -> sIndex++ = 2, tIndex++ = 2
- s[2] = c === t[2] = c -> sIndex++ 3, tIndex++ = 3

- return sIndex === s.length = 3