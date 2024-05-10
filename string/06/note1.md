- string = ["flower", "", "flow", "flight"]

- ans = "flower"

- i = 1
  - "".indexOf("flower") === -1 => ans = "flower".substring(0, 5) = "flowe"
  - "".indexOf("flowe") === -1 => ans = "flowe".substring(0, 4) = "flow"
  - "".indexOf("flow") === -1 => ans = "flow".substring(0, 3) = "flo"
  ...
  - "".index("f") === -1 => ans = ""