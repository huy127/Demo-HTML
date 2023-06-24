<?php
// Kết nối đến cơ sở dữ liệu
$conn = mysqli_connect('localhost', 'root', '', 'quanlysinhvien');

// Kiểm tra kết nối
if (!$conn) {
  die("Không thể kết nối đến cơ sở dữ liệu: " . mysqli_connect_error());
}

// Xử lý yêu cầu AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $id = $_POST['id'];

  // Xóa sinh viên khỏi cơ sở dữ liệu
  $query = "DELETE FROM students WHERE id=$id";

  // Thực thi truy vấn
  if (mysqli_query($conn, $query)) {
    echo "success";
  } else {
    echo "error";
  }
}

// Đóng kết nối
mysqli_close($conn);
?>
