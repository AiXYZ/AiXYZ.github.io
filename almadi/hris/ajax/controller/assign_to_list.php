<?php
include_once("../../../inc/config.php");
include_once("../../../inc/functions.php");

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// $assign = "SELECT id, employee_id, request_features FROM system_accounts WHERE request_features IN (2)";
// $assign_data = mysql_result($assign);
// $assign_rows = mysql_num_rows($assign_data);
// $assign_ctr = 0;
// while ($assign_ctr < $assign_rows){
	
// 	$employee_id = mysql_
	
	
// 	$assign_ctr++;
// }

// header('Content-type: application/json');
// echo json_encode($data);


$sql = mysql_query("SELECT id, employee_id, request_features FROM system_accounts WHERE request_features IN (2)");
if(mysql_num_rows($sql)){
	$data = array();
	while ($row=mysql_fetch_array($sql)) {
		
		$employee = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$row['employee_id']."' ";
		$employee_data = mysql_query($employee);
		$employee_name = mysql_result($employee_data,0,"fullname");
		
		$data[] = array(
				'id' => $row['id'],
				'employee_id' => $row['employee_id'],
				'employee_name' => $employee_name
		);
	}//end while
	header('Content-type: application/json');
	echo json_encode($data);
}// end if

?>