- haystack = "absbutsad"

- needle = "sad"

- haystackLength = 9

- needleLength = 3

- i = 0 -> i = 6

- i = 0 -> "absbutsad".substr(0, 3) = abs !== sad

- i = 1 -> "absbutsad".substr(1, 3) = bsb !== sad

- i = 2 -> "absbutsad".substr(2, 3) = sbu !== sad

- i = 3 -> "absbutsad".substr(3, 3) = but !== sad

- i = 4 -> "absbutsad".substr(4, 3) = uts !== sad

- i = 5 -> "absbutsad".substr(5, 3) = tsa !== sad

- i = 6 -> "absbutsad".substr(6, 3) = sad !== sad