<?php
// Lấy trang (page) từ yêu cầu GET
$page = $_GET['page'];


// Số lượng phim cần hiển thị trên mỗi trang
$moviesPerPage = 3;

// Tính toán phạm vi phim cần hiển thị trên trang hiện tại
$offset = ($page - 1) * $moviesPerPage;
$limit = $moviesPerPage;

// Simulate fetching movies from database or API
$movies = [
    // Dữ liệu phim sẽ được lấy từ cơ sở dữ liệu hoặc API
    // Ví dụ:
    ['title' => 'Phim 1', 'year' => 2021],
    ['title' => 'Phim 2', 'year' => 2022],
    ['title' => 'Phim 3', 'year' => 2023],
    ['title' => 'Phim 4', 'year' => 2024],
    ['title' => 'Phim 5', 'year' => 2025],
];

// Hiển thị danh sách phim
foreach ($movies as $movie) {
    echo '<p>' . $movie['title'] . ' (' . $movie['year'] . ')</p>';
}
?>
