<?php
//详情去购物车
header('content-type:text/html;charset=utf-8');
//?连接数据库
include 'conn.php';
$gid = isset($_POST['gid']) ? $_POST['gid'] : '';//商品id
$specification = isset($_POST['specification']) ? $_POST['specification'] : '';//规格
$shopnum = isset($_POST['shopnum']) ? $_POST['shopnum'] : '';//购买数量
$usersname = isset($_POST['usersname']) ? $_POST['usersname'] : '';//购买数量
var_dump($shopnum);
$sql = "SELECT * FROM kant_goods WHERE gid='$gid'";//查找对应id的数据库
$res = $conn->query($sql);
// var_dump($res);
$content = $res->fetch_all(MYSQLI_ASSOC);
// var_dump($content);
$images = $content[0]['images'];//图片
$namelist = $content[0]['namelist'];//商品名
$pice = $content[0]['pice'];//商品价
$weight = $content[0]['weight'];//商品重量
$discounts = $content[0]['discounts'];//优惠价格

$sql3 = "SELECT * FROM shopping_cart WHERE gid=$gid";//查找数据库里是否有这个商品
	
	//2.执行sql语句
$res3 = $conn->query($sql3);//结果集
$sql4 = "SELECT shopnum FROM shopping_cart where gid=$gid";//查找里面的商品数量
$res4 = $conn->query($sql4);//得到结果集
$content2 = $res4->fetch_all(MYSQLI_ASSOC);//得到元数据里商品数量是多少
var_dump($res3->num_rows);
if ($res3->num_rows) {
		//商品存在
    //改
    // var_dump($shopnum);
    $shopnum = $shopnum + $content2[0]['shopnum'];//相加赋值
    // var_dump($shopnum);
    $sql2 = "UPDATE shopping_cart SET shopnum=$shopnum where gid=$gid";
    $res2 = $conn->query($sql2);
    // var_dump($res2);
} else {
    $sql2 = "INSERT INTO shopping_cart (gid,specification,shopnum,images,namelist,pice,weights,discounts,usersname) VALUES ($gid,'$specification',$shopnum,'$images','$namelist',$pice,$weight,$discounts,'$usersname')";
    $res2 = $conn->query($sql2);
}

echo json_encode($res2, JSON_UNESCAPED_UNICODE);
?>