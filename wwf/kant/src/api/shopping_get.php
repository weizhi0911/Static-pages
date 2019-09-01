<?php
//购物车渲染
//详情
header('content-type:text/html;charset=utf-8');
//?连接数据库
include 'conn.php';
$sql = "SELECT * FROM shopping_cart";
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content, JSON_UNESCAPED_UNICODE);
?>