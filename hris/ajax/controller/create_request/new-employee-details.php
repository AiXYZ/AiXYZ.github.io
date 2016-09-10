<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($tcodeid){
	
	$request = "SELECT * FROM reporting_date_info WHERE trans_code = '$tcodeid'";
	$request_data = mysql_query($request);
	
	@$employee_id = mysql_real_escape_string(mysql_result($request_data,0,"emp_id_number"));
	@$emp_reporting_date = mysql_real_escape_string(mysql_result($request_data,0,"emp_reporting_date"));
	@$emp_notes = mysql_real_escape_string(mysql_result($request_data,0,"emp_notes"));
	
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
			'newEmployee_employee_id' => $employee_id,
			'newEmployee_employee_name' => $employee_name,
			'newEmployee_employee_pname' => $employee_pname,
			'newEmployee_employee_position' => $employee_position,
			'newEmployee_iqama_number' => $employee_iqama_number,
			'newEmployee_emp_reporting_date' => $emp_reporting_date,
			'newEmployee_emp_notes' => $emp_notes,
			'newEmployee_remainingDays' => $remainingDays
	); // end array
	
}// end function

//$result = search('201607311341134384');
$result = search($_POST['newEmployee_tcode_id']);
echo json_encode($result);
?>