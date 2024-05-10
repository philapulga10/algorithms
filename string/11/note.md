- s = "loveleetcode"

- c = "e"

- reult = [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

- tìm index của từ nào trong chuỗi s bằng với từ c

  - nếu là từ e thì có các index sau: 3, 5, 6, 11

- tính độ dài của chuỗi s

- dùng vòng lặp for chạy từ 0 cho đến s.length - 1

- lấy được i từ 0 cho đến s.length - 1

- so sánh i với các vị trí index tìm được ở bên trên

- lây index trừ đi i -> nếu kết quả nào nhỏ nhât -> lấy kêt quả đó

- cộng kết quả đo vào mảng với index là i