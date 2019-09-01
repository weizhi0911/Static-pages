<?php
	//设置编码
header('content-type:text/html;charset=utf-8');
	
	//接收后端的数据，插入到数据库，如果搞定发送状态给前端
	
	//连接数据库
include 'conn.php';
	
	//接收数据
$gid = isset($_GET['gid']) ? $_GET['gid'] : '';

	
	//1.写sql语句
$sql = "DELETE FROM shopping_cart where gid=$gid";
	
	//2.执行语句
$res = $conn->query($sql);//insert update delete语句都是返回布尔值
	
//	var_dump($res);
if ($res) {
		//删除成功
    echo 'yes';
} else {
		//失败
    echo 'no';
}
	
	/*
	 	乱码：数据的存储编码不一致的时候会乱码，只要统一编码方式就不会乱码
 * 数据来源：csv格式，变成utf-8
 * 数据的存储：数据的链接、数据库、数据字段都是utf-8
 * 数据使用：html、php
 */
?>