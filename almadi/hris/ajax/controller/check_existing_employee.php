<?php
include_once("../../../inc/config.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($employee_id){
	
	$checkInfo = "SELECT * FROM employee_details WHERE id_number = '$employee_id' ";
	$checkInfo_data = mysql_query($checkInfo);
	$checkInfo_rows = mysql_num_rows($checkInfo_data);
	
	if($checkInfo_rows > 0){
		$existing = 'TRUE';
	}else {
		$existing = 'FALSE';
	}
	
	return array('existing_employee' => $existing);
	
}// end function

$result = search($_POST['employee_id']);
echo json_encode($result);
?>