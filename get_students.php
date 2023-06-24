<?php
// Kết nối CSDL và lấy danh sách sinh viên với phân trang
$conn = new mysqli('localhost', 'sa', '', 'quanlysinhvien');
if ($conn->connect_error) {
  die("Lỗi kết nối CSDL: " . $conn->connect_error);
}

$page = isset($_GET['page']) ? $_GET['page'] : 1;
$perPage = isset($_GET['perPage']) ? $_GET['perPage'] : 2;
$offset = ($page - 1) * $perPage;

$sql = "SELECT * FROM students";
$result = $conn->query($sql);
$totalRows = $result->num_rows;
$totalPages = ceil($totalRows / $perPage);

$sql = "SELECT * FROM students LIMIT $perPage OFFSET $offset";
$result = $conn->query($sql);

$studentList = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $studentList[] = array(
      'id' => $row['id'],
      'name' => $row['name'],
      'major' => $row['major']
    );
  }
}

$response = array(
  'studentList' => $studentList,
  'totalPages' => $totalPages
);

echo json_encode($response);

$conn->close();
?>
