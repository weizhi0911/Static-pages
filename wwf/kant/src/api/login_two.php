<?php
	//设置编码
header('content-type:text/html;charset=utf-8');
	
	//接收后端的数据，插入到数据库，如果搞定发送状态给前端
	
	//连接数据库
include 'conn.php';
	
	//接收数据
$name = isset($_POST['name']) ? $_POST['name'] : '15279976425';
$psw = isset($_POST['psw']) ? $_POST['psw'] : 'a123456';
	
	//1.写sql语句
$sql = "SELECT * FROM kant_users WHERE usersname='$name';";
	
	//2.执行语句
$res = $conn->query($sql);//insert update delete语句都是返回布尔值
// var_dump($res->num_rows);
// if ($res) {
// 		//插入成功
//     echo 'yes';
// } else {
// 		//失败
//     echo 'no';
// }
$sql2 = "SELECT * FROM kant_users WHERE password='$psw';";
$res2 = $conn->query($sql2);
// var_dump($res->num_rows);
// var_dump($res2->num_rows);

$login_re = array(//1为有，可以登录
    'name' => $res->num_rows,
    'pass' => $res2->num_rows,
);

echo json_encode($login_re, JSON_UNESCAPED_UNICODE);
	/*
	 	乱码：数据的存储编码不一致的时候会乱码，只要统一编码方式就不会乱码
 * 数据来源：csv格式，变成utf-8
 * 数据的存储：数据的链接、数据库、数据字段都是utf-8
 * 数据使用：html、php
 */
?>