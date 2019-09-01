<?php
	
	//后端：接收前端的数据，查询该用户是否存在，给前端返回相关信息
	
	//查询之前要连接数据库
include 'conn.php';
	
	//接收前端的数据
$name = isset($_GET['name']) ? $_GET['name'] : '';
	
	//1.写查询语句
$sql = "SELECT * FROM kant_users WHERE usersname='$name'";
	
	//2.执行sql语句
$res = $conn->query($sql);//结果集
if ($res->num_rows) {
		//找到了，已存在，不给注册
	echo 'no';
} else {
	echo 'yes';
}
?>