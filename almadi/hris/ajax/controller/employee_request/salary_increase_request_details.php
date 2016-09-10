<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - Employee Recevied
 * 4 - Closed
 * 5 - Declined
 */

function search($tcodeid, $query){
	
	// HR First
	if($query == 'hrfirst'){
		$request = "SELECT * FROM salary_increase_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if
	
	// Approval
	if($query == 'approval'){
		$request = "SELECT * FROM salary_increase_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// HR Final
	if($query == 'hrfinal'){
		$request = "SELECT * FROM salary_increase_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 3";
		$request_data = mysql_query($request);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$request = "SELECT * FROM salary_increase_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 4";
		$request_data = mysql_query($request);
	}//end if
	
	// Declined
	if($query == 'declined'){
		$request = "SELECT * FROM salary_increase_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 5";
		$request_data = mysql_query($request);
	}//end if
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Encoder details
	@$encode_by = mysql_real_escape_string(mysql_result($request_data,0,"created_by"));
	@$encode_date = mysql_real_escape_string(mysql_result($request_data,0,"date_created"));
	
	// Encoder name
	$encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$encode_by."' ";
	$encoder_data = mysql_query($encoder);
	@$encoder_name = mysql_real_escape_string(mysql_result($encoder_data,0,"fullname"));
	
	// Function to compute the elapsed day between the Created date and the Current date
	$elapsedDays = elapsed_days($encode_date);
	$days_between = $elapsedDays['days_between'];
	// Function to compute the elapsed day between the Created date and the Current date
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Employee details
	@$employee_id = mysql_real_escape_string(mysql_result($request_data,0,"emp_id_number"));
	@$salary_increase_request_notes = mysql_real_escape_string(mysql_result($request_data,0,"request_notes"));
	
	// Attachment for Request
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"request_file_path"));
	@$request_file_path_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_path_filename = $request_file_path_explode[0];
	
	$employee = "SELECT
						id_number,
						fullname,
						project_name,
						position,
						nationality,
						total_salary,
						contract_g_date_employed
						FROM employee_details WHERE id_number = '".$employee_id."' ";
	$employee_data = mysql_query($employee);
	@$employee_name = mysql_real_escape_string(mysql_result($employee_data,0,"fullname"));
	@$employee_pname = mysql_real_escape_string(mysql_result($employee_data,0,"project_name"));
	@$employee_position = mysql_real_escape_string(mysql_result($employee_data,0,"position"));
	@$employee_nationality = mysql_real_escape_string(mysql_result($employee_data,0,"nationality"));
	@$employee_contract_g_date_employed = mysql_real_escape_string(mysql_result($employee_data,0,"contract_g_date_employed"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR First details
	$hr_first_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_first_update_by"));
	$hr_first_update_date = mysql_real_escape_string(mysql_result($request_data,0,"hr_first_update_date"));
	$hr_first_notes = mysql_real_escape_string(mysql_result($request_data,0,"hr_first_notes"));
	$hr_first_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_first_days"));
	
	// HR First encoder name
	$hr_first_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_first_update_by."' ";
	$hr_first_encoder_data = mysql_query($hr_first_encoder);
	@$hr_first_encoder_name = mysql_real_escape_string(mysql_result($hr_first_encoder_data,0,"fullname"));
	
	// Attachment for HR First
	@$hr_first_file_path = mysql_real_escape_string(mysql_result($request_data,0,"hr_first_file_path"));
	@$hr_first_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_first_file_path));
	@$hr_first_file_path_filename = $hr_first_file_path_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Salary history
	$salaryCurrent = "SELECT id, emp_id_number, basic_salary, other_allowance, total_salary, effectivity_date FROM salary_history WHERE emp_id_number = '$employee_id' ORDER BY id DESC LIMIT 1 ";
	$salaryCurrent_data = mysql_query($salaryCurrent);
	$salaryCurrent_rows = mysql_num_rows($salaryCurrent_data);
	@$salaryCurrent_id = mysql_result($salaryCurrent_data,0,"id");
	@$salaryCurrent_basic_salary = number_format(mysql_result($salaryCurrent_data,0,"basic_salary"), 0);
	@$salaryCurrent_other_allowance = number_format(mysql_result($salaryCurrent_data,0,"other_allowance"), 0);
	@$salaryCurrent_total_salary = number_format(mysql_result($salaryCurrent_data,0,"total_salary"), 0);
	@$effectivity_date = mysql_result($salaryCurrent_data,0,"effectivity_date");
	
	// Without comma
	@$Current_basic_salary = mysql_result($salaryCurrent_data,0,"basic_salary");
	@$Current_other_allowance = mysql_result($salaryCurrent_data,0,"other_allowance");
	@$Current_total_salary = mysql_result($salaryCurrent_data,0,"total_salary");
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Approval details
	$hr_second_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_second_update_by"));
	$hr_second_update_date = mysql_real_escape_string(mysql_result($request_data,0,"hr_second_update_date"));
	$hr_second_notes = mysql_real_escape_string(mysql_result($request_data,0,"hr_second_notes"));
	$hr_second_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_second_days"));
	
	// Approval encoder name
	$hr_second_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_second_update_by."' ";
	$hr_second_encoder_data = mysql_query($hr_second_encoder);
	@$hr_second_encoder_name = mysql_real_escape_string(mysql_result($hr_second_encoder_data,0,"fullname"));
	
	// Attachment for Approval
	@$hr_second_file_path = mysql_real_escape_string(mysql_result($request_data,0,"hr_second_file_path"));
	@$hr_second_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_second_file_path));
	@$hr_second_file_path_filename = $hr_second_file_path_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR Final
	$hr_third_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_third_update_by"));
	$hr_third_update_date = mysql_real_escape_string(mysql_result($request_data,0,"hr_third_update_date"));
	$hr_third_notes = mysql_real_escape_string(mysql_result($request_data,0,"hr_third_notes"));
	$hr_third_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_third_days"));
	
	// HR Final encoder name
	$hr_third_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_third_update_by."' ";
	$hr_third_encoder_data = mysql_query($hr_third_encoder);
	@$hr_third_encoder_name = mysql_real_escape_string(mysql_result($hr_third_encoder_data,0,"fullname"));
	
	// Attachment for HR Final
	@$hr_third_file_path = mysql_real_escape_string(mysql_result($request_data,0,"hr_third_file_path"));
	@$hr_third_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_third_file_path));
	@$hr_third_file_path_filename = $hr_third_file_path_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	return array(
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
				
			// Encoder details
			'encode_by' => $encode_by,
			'encoder_name' => $encoder_name,
			'encode_date' => $encode_date,
			'elapsed_days' => $days_between,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// Employee details
			'employee_id' => $employee_id,
			'employee_name' => $employee_name,
			'employee_pname' => $employee_pname,
			'employee_position' => $employee_position,
			'employee_nationality' => $employee_nationality,
			
			'request_file_path' => $request_file_path,
			'request_file_filename' => $request_file_path_filename,
			
			'salary_increase_request_notes' => $salary_increase_request_notes,
			
			'employee_contract_date' => $employee_contract_g_date_employed,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// HR First
			'hr_first_update_by' => $hr_first_update_by,
			'hr_first_encoder_name' => $hr_first_encoder_name,
			'hr_first_update_date' => $hr_first_update_date,
			'hr_first_notes' => $hr_first_notes,
			'hr_first_days' => $hr_first_days,
			'hr_first_file_path' => $hr_first_file_path,
			'hr_first_file_path_filename' => $hr_first_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'salaryCurrent_id' => $salaryCurrent_id,
			
			'salaryCurrent_basic_salary' => $salaryCurrent_basic_salary,
			'salaryCurrent_other_allowance' => $salaryCurrent_other_allowance,
			'salaryCurrent_total_salary' => $salaryCurrent_total_salary,
			'salaryCurrent_effectivity_date' => $effectivity_date,
			
			// Without comma
			'Current_basic_salary' => $Current_basic_salary,
			'Current_other_allowance' => $Current_other_allowance,
			'Current_total_salary' => $Current_total_salary,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// Approval
			'hr_second_update_by' => $hr_second_update_by,
			'hr_second_encoder_name' => $hr_second_encoder_name,
			'hr_second_update_date' => $hr_second_update_date,
			'hr_second_notes' => $hr_second_notes,
			'hr_second_days' => $hr_second_days,
			'hr_second_file_path' => $hr_second_file_path,
			'hr_second_file_path_filename' => $hr_second_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// HR Final
			'hr_third_update_by' => $hr_third_update_by,
			'hr_third_encoder_name' => $hr_third_encoder_name,
			'hr_third_update_date' => $hr_third_update_date,
			'hr_third_notes' => $hr_third_notes,
			'hr_third_days' => $hr_third_days,
			'hr_third_file_path' => $hr_third_file_path,
			'hr_third_file_path_filename' => $hr_third_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
				
			//'xxx' => $xxx,
			
			'test_result' => $request
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
	); // end array
	
}// end function

$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>