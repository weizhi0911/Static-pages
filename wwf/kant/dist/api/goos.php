<?php
//设置编码
header('content-type:text/html;charset=utf-8');
//?连接数据库
include 'conn.php';
//*接收数据
//第几页
$page = isset($_POST['page']) ? $_POST['page'] : '';
//每页的条数
$num = isset($_POST['num']) ? $_POST['num'] : '';

//排序的类别
$type = isset($_POST['type']) ? $_POST['type'] : '';
$list = isset($_POST['list']) ? $_POST['list'] : '';


//todo 规律
$index = ($page - 1) * $num;

if ($type) {
	if($list){
		$sql1 = "SELECT * FROM kant_goods ORDER BY $type DESC LIMIT $index,$num";
	}else{
		$sql1 = "SELECT * FROM kant_goods ORDER BY $type LIMIT $index,$num";
	}
} else {
	$sql1 = "SELECT * FROM kant_goods LIMIT $index,$num";
} 

//执行语句

$res1 = $conn->query($sql1);

//需求：要数据
// var_dump($res1);
$need = $res1->fetch_all(MYSQLI_ASSOC);


//!为了获取总条数
$sql2 = "SELECT * FROM kant_goods";
//执行语句
$res2 = $conn->query($sql2);

$sql = "SELECT * FROM kant_goods";
$res = $conn->query($sql);
$all = $res->fetch_all(MYSQLI_ASSOC);

//传输多个数据
$summary = array(
	"data" => $need,//数据
	"total" => $res2->num_rows,//数据总个数个数
	"page" => $page,//页数
	"num" => $num,//要的数据个数
);

//把数组转成字符串,并防止中文转义
echo json_encode($summary, JSON_UNESCAPED_UNICODE);
?>