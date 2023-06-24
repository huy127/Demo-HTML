<?php
// Kết nối đến cơ sở dữ liệu
$conn = mysqli_connect('localhost', 'root', '', 'quanlysinhvien');

// Kiểm tra kết nối
if (!$conn) {
  die("Không thể kết nối đến cơ sở dữ liệu: " . mysqli_connect_error());
}

// Xử lý yêu cầu AJAX
if (isset($_GET['page']) && isset($_GET['perPage'])) {
  $page = $_GET['page'];
  $perPage = $_GET['perPage'];
  

  // Tính toán vị trí bắt đầu và số lượng sinh viên cần lấy
  $start = ($page - 1) * $perPage;
  $end = $start + $perPage;

  // Truy vấn dữ liệu sinh viên từ cơ sở dữ liệu
  $query = "SELECT * FROM students LIMIT $start, $perPage";
  $result = mysqli_query($conn, $query);

  // Lấy tổng số lượng sinh viên
  $totalCountQuery = "SELECT COUNT(*) AS total FROM students";
  $totalCountResult = mysqli_query($conn, $totalCountQuery);
  $totalCount = mysqli_fetch_assoc($totalCountResult)['total'];
  

  // Tính toán tổng số trang
  $totalPages = ceil($totalCount / $perPage);

  // Tạo một mảng chứa dữ liệu sinh viên và thông tin phân trang
  $response = array(
    'students' => array(),
    'totalPages' => $totalPages,
    'currentPage' => $page
  );

  // Lặp qua kết quả truy vấn và thêm dữ liệu sinh viên vào mảng
  while ($row = mysqli_fetch_assoc($result)) {
    $student = array(
      'id' => $row['id'],
      'name' => $row['name'],
      'major' => $row['major']
    );
    $response['students'][] = $student;
  }

  // Chuyển đổi mảng thành định dạng JSON và trả về cho yêu cầu AJAX
  echo json_encode($response);
}

// Đóng kết nối
mysqli_close($conn);
?>
