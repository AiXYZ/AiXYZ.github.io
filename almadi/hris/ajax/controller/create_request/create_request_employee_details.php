<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($employee_id){
	
	$employee = "SELECT
						id_number,
						fullname,
						project_name,
						position,
						nationality,
						iqama_number,
						contract_g_date_entry,
						total_salary,
						type_of_visa
						FROM employee_details WHERE id_number = '".$employee_id."' ";
	$employee_data = mysql_query($employee);
	@$employee_name = mysql_real_escape_string(mysql_result($employee_data,0,"fullname"));
	@$employee_pname = mysql_real_escape_string(mysql_result($employee_data,0,"project_name"));
	@$employee_position = mysql_real_escape_string(mysql_result($employee_data,0,"position"));
	@$employee_nationality = mysql_real_escape_string(mysql_result($employee_data,0,"nationality"));
	@$employee_iqama_number = mysql_real_escape_string(mysql_result($employee_data,0,"iqama_number"));
	@$contract_g_date_entry = mysql_real_escape_string(mysql_result($employee_data,0,"contract_g_date_entry"));
	@$total_salary = mysql_real_escape_string(mysql_result($employee_data,0,"total_salary"));
	@$type_of_visa = mysql_real_escape_string(mysql_result($employee_data,0,"type_of_visa"));
	
	return array(
			// Employee details
			'create_employee_name' => $employee_name,
			'create_employee_pname' => $employee_pname,
			'create_employee_position' => $employee_position,
			'create_employee_nationality' => $employee_nationality,
			'create_employee_iqama_number' => $employee_iqama_number,
			'contract_g_date_entry' => $contract_g_date_entry,
			'total_salary' => $total_salary,
			'type_of_visa' => $type_of_visa,
	); // end array
	
}// end function

//$result = search(3744);
$result = search($_POST['employee_id']);
echo json_encode($result);
?>