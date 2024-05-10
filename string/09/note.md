- pattern = "abba"

- string = "dog cat cat dog"

- words = string.split(" ") = ["dog", "cat", "cat", dog]

- obj = {}

- i = 0 -> i = 3

- i = 0 -> obj[abba[0]] = undefined -> obj[pattern[i]] = obj[a] = dog

- i = 1 -> obj[abba[1]] = undefined -> obj[pattern[i]] = obj[b] = cat

- i = 2 -> obj[abba[2]] = obj[b] = cat -> obj[pattern[i]] === obj[b] = cat

- i = 3 -> obj[abba[3]] = obj[a] = dog -> obj[pattern[i]] = obj[a] = dog

- Object.values(obj) = ['dog', cat]

- new Set(Object.values(obj)) = 2