- string = ["flower", "fl", "flowerer", "flow", "flight"]
- firstString = "flower"
- string.length = 5
- i = 1
  - string[i].indexof(firstString) = "fl".indexof("flower") = -1 !== 0 => firstString = "flower".substring(0, 5) = flowe
  - string[i].indexof(firstString) = "fl".indexof("flowe") = 
  -1 !== 0 => firstString = "flowe".substring(0, 4) = flow
  - string[i].indexof(firstString) = "fl".indexof("flow") = -1 !== 0 => firstString = "flow".substring(0, 3) = flo
  - string[i].indexof(firstString) = 'fl'.indexof("flo") = -1
  !== 0 => firstString = "flo".substring(0, 2) = fl
  - string[i].indexof(firstString) = 'fl'.indexof('fl') === 0
  ==> firstString = fl
- i = 2
  - "flowerer".substring("fl") === 0
- i = 3
  - "flow".substring("fl") === 0
- i = 4
  -"flight".substring("fl") === 0