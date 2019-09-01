<?php
//详情
header('content-type:text/html;charset=utf-8');
//?连接数据库
include 'conn.php';
$gid = isset($_GET['gid']) ? $_GET['gid'] : '';
$sql = "SELECT * FROM kant_goods WHERE gid='$gid'";
$res = $conn->query($sql);
// var_dump($res);
$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>