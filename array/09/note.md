- digits = [9, 9, 9]
- khởi tạo i = digits.length - 1
- chạy từ cuối đến đầu mảng
- nếu vòng lặp có phần tử hiện tại bằng 9 gán vị trị hiện tại là 0
- chạy đến khi nào khi i giảm đến i = -1
- lúc này kiểm tra xem nếu i nhỏ hơn 0 -> khởi tạng một mảng mới là [1] -> sau đó cộng vào mảng đã duyệt
- nếu i lớn hơn hoặc bằng 0 > tăng giá trị tại phần tử của mảng hiện tại lên 1 đơn vị
- trả về mảng digits

*** trong thuật toán này, i là yếu tố quan trọng, vì i sẽ đánh giá được 2 trường hợp đó là tất cả các phần tử bằng 9 hay ngược lại