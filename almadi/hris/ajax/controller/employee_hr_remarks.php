<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();

mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

$sql = mysql_query("SELECT id, created_by, emp_id, created_date, hr_remarks FROM employee_hr_remarks WHERE emp_id = '".$_GET['eid']."' ");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		$data[] = array(
				'id' => $row['id'],
				'employee_id' => $row['emp_id'],
				'created_by' => $row['created_by'],
				'created_date' => $row['created_date'],
				'hr_remarks' => $row['hr_remarks']
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if
?>