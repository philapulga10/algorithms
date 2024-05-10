Giải thuật:
1. Khởi tạo biến i:
- Biến i được khởi tạo bằng digits.length - 1, tức là vị trí của phần tử cuối cùng trong mảng digits.
2. Duyệt ngược từ cuối mảng về đầu mảng:
- Trong vòng lặp while, chương trình kiểm tra xem phần tử digits[i] có bằng 9 hay không.
- Nếu digits[i] là 9, thì chương trình đặt digits[i] thành 0 và giảm i đi 1 để di chuyển đến phần tử trước đó của mảng.
- Quá trình này tiếp tục cho đến khi gặp một phần tử digits[i] khác 9, hoặc cho đến khi i giảm xuống -1 (tức là đã duyệt hết mảng và tất cả các phần tử đều là 9).
3. Kiểm tra điều kiện if (i < 0):
- Sau khi kết thúc vòng lặp while, chương trình kiểm tra xem giá trị của i có nhỏ hơn 0 hay không.
Nếu i nhỏ hơn 0, điều này có nghĩa là tất cả các phần tử trong mảng digits đều là 9.
- Trong trường hợp này, chương trình tạo một mảng arr chứa giá trị 1 duy nhất (đây là kết quả của phép cộng 1).
- Tiếp theo, chương trình nối mảng arr này với mảng digits ban đầu bằng cách sử dụng phương thức concat, kết quả sẽ là một mảng mới chứa các số đã được cộng 1.
4. Trường hợp else:
- Nếu i không nhỏ hơn 0 sau khi kết thúc vòng lặp while, điều này có nghĩa là phần tử tại vị trí i không phải là 9.
Trong trường hợp này, chương trình đơn giản tăng giá trị của phần tử digits[i] lên 1.
5. Trả về kết quả:
- Cuối cùng, hàm plusOne trả về mảng digits đã được cập nhật sau khi thực hiện phép cộng 1.