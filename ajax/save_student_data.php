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
  $name = $_POST['name'];
  $major = $_POST['major'];

  if (empty($id)) {
    // Thêm sinh viên mới vào cơ sở dữ liệu
    $query = "INSERT INTO students (name, major) VALUES ('$name', '$major')";
  } else {
    // Cập nhật thông tin sinh viên đã có trong cơ sở dữ liệu
    $query = "UPDATE students SET name='$name', major='$major' WHERE id=$id";
  }

  // Thực thi truy vấn
  if (mysqli_query($conn, $query)) {
    echo "successss";
  } else {
    echo "error";
  }
}

// Đóng kết nối
mysqli_close($conn);
?>
