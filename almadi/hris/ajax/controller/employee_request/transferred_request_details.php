<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

/*
 * 1 - HR First
 * 2 - Closed
 */

function search($tcodeid, $query){
	
	// HR First
	if($query == 'hr_first'){
		$request = "SELECT * FROM reporting_date_info WHERE type_reporting = 1 AND trans_code = '$tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$request = "SELECT * FROM reporting_date_info WHERE type_reporting = 1 AND trans_code = '$tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// PDF
	if($query == 'transferred_pdf'){
		$request = "SELECT * FROM reporting_date_info WHERE type_reporting = 1 AND trans_code = '$tcodeid' AND request_status = 3";
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
	@$employee_request_notes = mysql_real_escape_string(mysql_result($request_data,0,"emp_notes"));
	@$employee_request_reporting_date = mysql_real_escape_string(mysql_result($request_data,0,"emp_reporting_date"));
	
	// Attachment for Request
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"emp_file_path"));
	@$request_file_path_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_path_filename = $request_file_path_explode[0];
	
	// Transfer date
	$transfer = "SELECT employee_id_details, expected_transfer_date, request_status
						FROM request_personnel_transfer_info
						WHERE employee_id_details = '".$employee_id."' AND request_status = 4";
	$transfer_data = mysql_query($transfer);
	@$transfer_date = mysql_real_escape_string(mysql_result($transfer_data,0,"expected_transfer_date"));

	// Employee name
	$employee = "SELECT
						id_number,
						fullname,
						project_name,
						position,
						iqama_number,
						contract_g_date_employed,
						contract_years,
						nationality
						FROM employee_details WHERE id_number = '".$employee_id."' ";
	$employee_data = mysql_query($employee);
	@$employee_name = mysql_real_escape_string(mysql_result($employee_data,0,"fullname"));
	@$employee_pname = mysql_real_escape_string(mysql_result($employee_data,0,"project_name"));
	@$employee_position = mysql_real_escape_string(mysql_result($employee_data,0,"position"));
	@$employee_nationality = mysql_real_escape_string(mysql_result($employee_data,0,"nationality"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR First details
	@$request_hr_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_by"));
	@$request_hr_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_created"));
	@$request_hr_notes = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_notes"));
	@$request_hr_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_days"));
	
	// Attachment for HR First
	@$hr_first_file_path = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_file"));
	@$hr_first_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_first_file_path));
	@$hr_first_file_path_filename = $hr_first_file_path_explode[0];
	
	// HR First encoder name
	$hr_first_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$request_hr_update_by."' ";
	$hr_first_encoder_data = mysql_query($hr_first_encoder);
	@$hr_first_encoder_name = mysql_real_escape_string(mysql_result($hr_first_encoder_data,0,"fullname"));
	
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
			
			'employee_transfer_date' => $transfer_date,
			
			'employee_request_notes' => $employee_request_notes,
			'employee_request_reporting_date' => $employee_request_reporting_date,
			
			'request_file_path' => $request_file_path,
			'request_file_filename' => $request_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// HR First details
			'request_hr_update_by' => $request_hr_update_by,
			'hr_first_encoder_name' => $hr_first_encoder_name,
			'request_hr_update_created' => $request_hr_update_created,
			'request_hr_update_days' => $request_hr_update_days,
			
			'request_hr_notes' => $request_hr_notes,
			
			'hr_first_file_path' => $hr_first_file_path,
			'hr_first_file_path_filename' => $hr_first_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'test_result' => $request
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
	); // end array
	
}// end function

$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>