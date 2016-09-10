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
	if($query == 'hrfirst'){
		$request = "SELECT * FROM bank_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if
	
	// Send to bank
	if($query == 'sendtobank'){
		$request = "SELECT * FROM bank_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// Received from bank
	if($query == 'receivedfrombank'){
		$request = "SELECT * FROM bank_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 3";
		$request_data = mysql_query($request);
	}//end if
	
	// Send to site
	if($query == 'sendtosite'){
		$request = "SELECT * FROM bank_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 4";
		$request_data = mysql_query($request);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$request = "SELECT * FROM bank_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 5";
		$request_data = mysql_query($request);
	}//end if
	
	// Declined
	if($query == 'declined'){
		$request = "SELECT * FROM bank_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 6";
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
	@$employee_id = mysql_real_escape_string(mysql_result($request_data,0,"employee_id_details"));
	@$bank_type_id = mysql_real_escape_string(mysql_result($request_data,0,"bank_type"));
	@$bank_issues_id = mysql_real_escape_string(mysql_result($request_data,0,"bank_issues"));
	@$bank_notes_bank_request = mysql_real_escape_string(mysql_result($request_data,0,"notes_bank_request"));
	
	// Bank type name
	$bank_type = "SELECT * FROM bank_request_type WHERE id = '".$bank_type_id."' ";
	$bank_type_data = mysql_query($bank_type);
	@$bank_type_name = mysql_result($bank_type_data,0,"type_name");
	
	// Bank issues name
	$bank_issues = "SELECT * FROM bank_request_issues WHERE id = '".$bank_issues_id."' ";
	$bank_issues_data = mysql_query($bank_issues);
	@$bank_issues_name = mysql_result($bank_issues_data,0,"issues_name");
	
	// Attachment for Request
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path_request"));
	@$request_file_path_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_path_filename = $request_file_path_explode[0];

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
	@$request_hr_notes = mysql_real_escape_string(mysql_result($request_data,0,"notes_hr"));
	@$request_hr_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_days"));
	
	// Attachment for HR First
	@$hr_first_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path"));
	@$hr_first_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_first_file_path));
	@$hr_first_file_path_filename = $hr_first_file_path_explode[0];
	
	// HR First encoder name
	$hr_first_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$request_hr_update_by."' ";
	$hr_first_encoder_data = mysql_query($hr_first_encoder);
	@$hr_first_encoder_name = mysql_result($hr_first_encoder_data,0,"fullname");
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Send to bank details
	@$request_fd_update_by = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_by"));
	@$request_fd_update_created = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_created"));
	@$request_fd_update_days = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_days"));
	@$request_fd_notes = mysql_real_escape_string(mysql_result($request_data,0,"notes_fd"));
	
	// Attachment for Send to bank
	@$fd_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path_second"));
	@$fd_file_path_explode = explode("|",separateFilePathOnMultipleFolders($fd_file_path));
	@$fd_file_path_filename = $fd_file_path_explode[0];
	
	// Send to bank encoder name
	$fd_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$request_fd_update_by."' ";
	$fd_encoder_data = mysql_query($fd_encoder);
	@$fd_encoder_name = mysql_result($fd_encoder_data,0,"fullname");
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Received from bank
	@$request_received_update_by = mysql_real_escape_string(mysql_result($request_data,0,"received_update_by"));
	@$request_received_update_created = mysql_real_escape_string(mysql_result($request_data,0,"received_update_created"));
	@$request_received_update_days = mysql_real_escape_string(mysql_result($request_data,0,"received_update_days"));
	@$request_received_note = mysql_real_escape_string(mysql_result($request_data,0,"received_note"));
	
	// Attachment for Received from bank
	@$received_file_path = mysql_real_escape_string(mysql_result($request_data,0,"received_file"));
	@$received_file_path_explode = explode("|",separateFilePathOnMultipleFolders($received_file_path));
	@$received_file_path_filename = $received_file_path_explode[0];
	
	// Received from bank encoder name
	$received_from_bank_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$request_received_update_by."' ";
	$received_from_bank_encoder_data = mysql_query($received_from_bank_encoder);
	@$received_from_bank_encoder_name = mysql_result($received_from_bank_encoder_data,0,"fullname");
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Send to site details
	@$request_hr_final_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_by"));
	@$request_hr_final_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_created"));
	@$request_hr_final_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_days"));
	@$request_hr_final_note = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_note"));
	
	// Attachment for Received from bank
	@$received_hr_final_path = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_path"));
	@$received_hr_final_path_explode = explode("|",separateFilePathOnMultipleFolders($received_hr_final_path));
	@$received_hr_final_path_filename = $received_hr_final_path_explode[0];
	
	// Received from bank encoder name
	$send_to_site_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$request_hr_final_update_by."' ";
	$send_to_site_encoder_data = mysql_query($send_to_site_encoder);
	@$send_to_site_encoder_name = mysql_result($received_from_bank_encoder_data,0,"fullname");
	
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
			
			'bank_type_name' => $bank_type_name,
			'bank_issues_name' => $bank_issues_name,
			
			'bank_notes_bank_request' => $bank_notes_bank_request,
			
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
			
			// Send to bank details
			'request_fd_update_by' => $request_fd_update_by,
			'fd_encoder_name' => $fd_encoder_name,
			'request_fd_update_created' => $request_fd_update_created,
			'request_fd_update_days' => $request_fd_update_days,
				
			'request_fd_notes' => $request_fd_notes,
				
			'fd_file_path' => $fd_file_path,
			'fd_file_path_filename' => $fd_file_path_filename,
			
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// Received from bank details
			'request_received_update_by' => $request_received_update_by,
			'received_from_bank_encoder_name' => $received_from_bank_encoder_name,
			'request_received_update_created' => $request_received_update_created,
			'request_received_update_days' => $request_received_update_days,
			
			'request_received_note' => $request_received_note,
			
			'received_file_path' => $received_file_path,
			'received_file_path_filename' => $received_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// Send to site
			'request_hr_final_update_by' => $request_hr_final_update_by,
			'send_to_site_encoder_name' => $send_to_site_encoder_name,
			'request_hr_final_update_created' => $request_hr_final_update_created,
			'request_hr_final_days' => $request_hr_final_days,
				
			'request_hr_final_note' => $request_hr_final_note,
				
			'received_hr_final_path' => $received_hr_final_path,
			'received_hr_final_path_filename' => $received_hr_final_path_filename,
				
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'test_result' => $request
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
	); // end array
	
}// end function

$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>