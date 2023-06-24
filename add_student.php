<?php
// Lấy thông tin sinh viên từ yêu cầu POST
$name = $_POST['name'];
$major = $_POST['major'];

// Kết nối đến cơ sở dữ liệu MySQL
$conn = new mysqli('localhost', 'sa', '', 'quanlysinhvien');
if ($conn->connect_error) {
  die("Lỗi kết nối CSDL: " . $conn->connect_error);
}

// Thực hiện câu truy vấn INSERT để thêm sinh viên vào bảng "students"
$sql = "INSERT INTO students (name, major) VALUES ('$name', '$major')";
if ($conn->query($sql) === TRUE) {
  echo "Thêm sinh viên thành công";
} else {
  echo "Lỗi: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
