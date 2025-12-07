<?php
// Tệp Controller giữ vai trò điều phối

require_once 'models/SinhVienModel.php';

// Kết nối CSDL
$host = '127.0.0.1';
$dbname = 'cse485_web';
$username = 'root';
$password = '';

$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";

try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Kết nối thất bại: " . $e->getMessage());
}

// Thêm sinh viên mới
if (isset($_POST['ten_sinh_vien']) && isset($_POST['email'])) {

    $ten = $_POST['ten_sinh_vien'];
    $email = $_POST['email'];

    // Gọi Model
    addSinhVien($pdo, $ten, $email);

    // Refresh trang
    header('Location: index.php');
    exit;
}

$danh_sach_sv = getAllSinhVien($pdo);

// Gọi view
include 'views/sinhvien_view.php';
?>
