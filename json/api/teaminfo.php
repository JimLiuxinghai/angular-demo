<?php
include_once'conn.php';
header("Content-Type:text/html; charset=utf-8");
$my=new mysql();
$my->connect();
$sql="select team_pic,team_intro from teaminfo ";
$query=mysql_query($sql);
$result=array();
while($row=mysql_fetch_array($query)){
	$result[]=$row;
}
echo json_encode($result);
mysql_close();
?>
