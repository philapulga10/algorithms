- string = ["flower", "flow", "flight"]

- lấy phần tử đầu tiên gán cho biến firstString

- chạy vòng lặp for từ phần tử thứ 2 cho đến phần tử cuối -> ở đây là i từ 0 đến string.length - 1

- dùng vòng lặp while kiểm tra khi nào mà firstString nằm trong string[i] (sử dụng phương thứ indexOf) thì dừng vòng lặp while lại

- trong vòng lặp while xử lý chuỗi firstString, cắt đi từ cuối của firstString

- nếu firstString === "" -> return ""

- return firstString
