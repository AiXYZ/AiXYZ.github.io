<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($employee_id){
	// Employee name
	$employee = "SELECT
						id_number,
						fullname,
						project_name,
						position,
						iqama_number,
						iqama_g_date,
						iqama_h_date
						FROM employee_details WHERE id_number = '".$employee_id."' ";
	$employee_data = mysql_query($employee);
	@$employee_name = mysql_real_escape_string(mysql_result($employee_data,0,"fullname"));
	@$employee_pname = mysql_real_escape_string(mysql_result($employee_data,0,"project_name"));
	@$employee_position = mysql_real_escape_string(mysql_result($employee_data,0,"position"));
	
	@$employee_iqama_number = mysql_real_escape_string(mysql_result($employee_data,0,"iqama_number"));
	@$employee_iqama_g_date = mysql_real_escape_string(mysql_result($employee_data,0,"iqama_g_date"));
	@$employee_iqama_h_date = mysql_real_escape_string(mysql_result($employee_data,0,"iqama_h_date"));
	
	//remailing number of days start
	$currentDate = date("Y/m/d");
	$day_result = floor((strtotime($currentDate) - strtotime($employee_iqama_g_date))/86400);
	$remainingDays = substr($day_result, 1);
	//remaining number of days end

	return array(
			'iqama_employee_name' => $employee_name,
			'iqama_employee_pname' => $employee_pname,
			'iqama_employee_position' => $employee_position,
			'employee_iqama_number' => $employee_iqama_number,
			'employee_iqama_g_date' => $employee_iqama_g_date,
			'employee_iqama_h_date' => $employee_iqama_h_date,
			'remainingDays' => $remainingDays
	); // end array
	
}// end function

//$result = search(3744);
$result = search($_POST['iqama_employeeIdNo']);
echo json_encode($result);
?>