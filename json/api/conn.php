<?php
class mysql {
	var $conn;
	var $host="127.0.0.1";
	var $dbname="guanwang";
	var $dbpwd="vertrigo";
	var $dbuser="root";
	function connect(){
		$this->conn=mysql_connect($this->host,$this->dbuser,$this->dbpwd);
		mysql_select_db($this->dbname,$this->conn);
		mysql_query("set names utf8");
	}
}
?>

