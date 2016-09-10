<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

/*
 * 1 - HR First
 * 2 - Send to bank
 * 3 - Received from bank
 * 4 - Send to site
 * 5 - Closed
 * 6 - Declined
 */

function search($tcodeid, $query){
	
	// HR First
	if($query == 'hr_first'){
		$request = "SELECT * FROM general_request_info WHERE transaction_code = '$tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if
	
	// Approved to
	if($query == 'approved_to'){
		$request = "SELECT * FROM general_request_info WHERE transaction_code = '$tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// Approved from
	if($query == 'approved_from'){
		$request = "SELECT * FROM general_request_info WHERE transaction_code = '$tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$request = "SELECT * FROM general_request_info WHERE transaction_code = '$tcodeid' AND request_status = 3";
		$request_data = mysql_query($request);
	}//end if
	
	// Declined
	if($query == 'declined'){
		$request = "SELECT * FROM general_request_info WHERE transaction_code = '$tcodeid' AND request_status = 4";
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
	@$employee_request_notes = mysql_real_escape_string(mysql_result($request_data,0,"request_reason"));
	@$employee_request_subject = mysql_real_escape_string(mysql_result($request_data,0,"grsubject"));
	
	//Attachment for Request
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path"));
	@$request_file_path_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_path_filename = $request_file_path_explode[0];

	//Employee name
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
	
	// HR details
	@$hr_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_by"));
	@$hr_update_date = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_date"));
	@$hr_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_days"));
	@$hr_update_note = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_note"));
	
	//Attachment for HR
	@$hr_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path_request"));
	@$hr_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_file_path));
	@$hr_file_path_filename = $hr_file_path_explode[0];
	
	// HR encoder name
	$hr_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_update_by."' ";
	$hr_encoder_data = mysql_query($hr_encoder);
	@$hr_encoder_name = mysql_result($hr_encoder_data,0,"fullname");
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Assigned from details
	@$assigned_from_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_by_second"));
	@$assigned_from_update_date = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_date_second"));
	@$assigned_from_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_days_second"));
	@$assigned_from_update_note = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_note_second"));
	
	//Attachment for Assigned from
	@$assigned_from_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path_second"));
	@$assigned_from_file_path_explode = explode("|",separateFilePathOnMultipleFolders($assigned_from_file_path));
	@$assigned_from_file_path_filename = $assigned_from_file_path_explode[0];
	
	// Assigned from encoder name
	$assigned_from_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$assigned_from_update_by."' ";
	$assigned_from_encoder_data = mysql_query($assigned_from_encoder);
	@$assigned_from_encoder_name = mysql_result($assigned_from_encoder_data,0,"fullname");
	
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
			
			'employee_request_notes' => $employee_request_notes,
			
			'request_file_path' => $request_file_path,
			'request_file_filename' => $request_file_path_filename,
			
			'employee_request_subject' => $employee_request_subject,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// HR First details
			'hr_update_by' => $hr_update_by,
			'hr_encoder_name' => $hr_encoder_name,
			'hr_update_date' => $hr_update_date,
			'hr_update_days' => $hr_update_days,
			
			'hr_update_note' => $hr_update_note,
			
			'hr_file_path' => $hr_file_path,
			'hr_file_path_filename' => $hr_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// Assigned from details
			'assigned_from_update_by' => $assigned_from_update_by,
			'assigned_from_encoder_name' => $assigned_from_encoder_name,
			'assigned_from_update_date' => $assigned_from_update_date,
			'assigned_from_update_days' => $assigned_from_update_days,
			'assigned_from_update_note' => $assigned_from_update_note,
			'assigned_from_file_path' => $assigned_from_file_path,
			'assigned_from_file_path_filename' => $assigned_from_file_path_filename,
				
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'test_result' => $request
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
	); // end array
	
}// end function

$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>