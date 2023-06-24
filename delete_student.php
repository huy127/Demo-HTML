<?php
// Kết nối CSDL và xóa sinh viên
$conn = new mysqli('localhost', 'sa', '', 'quanlysinhvien');
if ($conn->connect_error) {
  die("Lỗi kết nối CSDL: " . $conn->connect_error);
}

$studentId = $_POST['id'];

$sql = "DELETE FROM students WHERE id='$studentId'";

if ($conn->query($sql) === TRUE) {
  echo "Xóa thành công.";
} else {
  echo "Lỗi: " . $conn->error;
}

$conn->close();
?>
