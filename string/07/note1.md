28. Find the Index of the First Occurrence in a String
- haystack = "absbutsad"
- needle = "sad"
- tính độ dài 2 chuỗi
- haystack có độ dài là 9, needle có độ dài là 3
- chạy một vòng lặp for với số lần là 9 - 3 = 6 -> chạy từ 0 -> 6
- mỗi vòng lặp như vậy -> cắt chuỗi với haystack -> bắt đầu với vị trí là i -> cắt 3 ký tự trong chuỗi (3 này tương đương với độ dài của chuỗi needle) -> cắt tới khi nào mà nếu 3 ký tự cắt ra bằng với chuỗi needle thì return i -> nếu chạy hết vòng lặp mà chuỗi cắt ra không bằng với needle thì return false
