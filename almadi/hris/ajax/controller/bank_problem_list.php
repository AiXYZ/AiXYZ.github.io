<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

$sql = mysql_query("SELECT id, issues_name	FROM bank_request_issues");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		$data[] = array(
				'id' => $row['id'],
				'problem_name' => $row['issues_name']
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if
?>