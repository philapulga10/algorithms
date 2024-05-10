- nums = [4, 3, 2, 7, 8, 2, 3, 1]
- vì có các phần tử giống nhau nên ta dùng new Set(nums) để chỉ giữ lại các giá trị duy nhất trong mảng nums
- tính độ dài của mảng nums
- chạy vòng lặp for từ 1 cho đến nums.length để lấy ra index
- sử dụng phương thức has với index vừa lấy ra (kiểm tra xem phần tử = index đó có nằm trong Set hay không?) để kiểm tra xem nếu nó là undefined thì trả ra index hiện tại

input: [4, 3, 2, 7, 8, 2, 3, 1]
ouput: [5, 6]