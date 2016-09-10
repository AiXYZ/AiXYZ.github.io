<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

/*
 * 1 - HR First
 * 2 - FD
 * 3 - HR Final
 * 4 - Visa
 * 5 - Ticket
 * 6 - Clearance
 * 7 - Muqeem
 * 8 - Closed
 * 9 - Declined
 */

function search($tcodeid, $query){
	
	// HR First
	if($query == 'hrfirst'){
		$request = "SELECT * FROM request_personnel_transfer_info WHERE tcode_vacation = '$tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if
	
	// FD
	if($query == 'fd'){
		$request = "SELECT * FROM request_personnel_transfer_info WHERE tcode_vacation = '$tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// HR Final
	if($query == 'hrfinal'){
		$request = "SELECT * FROM request_personnel_transfer_info WHERE tcode_vacation = '$tcodeid' AND request_status = 3";
		$request_data = mysql_query($request);
	}//end if
	
	// Approval
	if($query == 'approval'){
		$request = "SELECT * FROM request_personnel_transfer_info WHERE tcode_vacation = '$tcodeid' AND request_status = 4";
		$request_data = mysql_query($request);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$request = "SELECT * FROM request_personnel_transfer_info WHERE tcode_vacation = '$tcodeid' AND request_status = 5";
		$request_data = mysql_query($request);
	}//end if
	
	// Declined
	if($query == 'declined'){
		$request = "SELECT * FROM request_personnel_transfer_info WHERE tcode_vacation = '$tcodeid' AND request_status = 6";
		$request_data = mysql_query($request);
	}//end if
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Tcode
	@$tcode = mysql_real_escape_string(mysql_result($request_data,0,"tcode_vacation"));
	
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
	
	@$employee_id = mysql_real_escape_string(mysql_result($request_data,0,"employee_id_details"));
	
	// Employee name
	$employee = "SELECT 
						id_number,
						fullname,
						project_name,
						position,
						iqama_number,
						contract_g_date_employed,
						contract_years,
						total_salary
						FROM employee_details WHERE id_number = '".$employee_id."' ";
	$employee_data = mysql_query($employee);
	@$employee_name = mysql_real_escape_string(mysql_result($employee_data,0,"fullname"));
	@$employee_pname = mysql_real_escape_string(mysql_result($employee_data,0,"project_name"));
	@$employee_position = mysql_real_escape_string(mysql_result($employee_data,0,"position"));
	@$employee_total_salary = number_format(mysql_real_escape_string(mysql_result($employee_data,0,"total_salary")), 0);
	
	@$project_to_id = mysql_real_escape_string(mysql_result($request_data,0,"transfer_to"));
	@$expected_transfer_date = mysql_real_escape_string(mysql_result($request_data,0,"expected_transfer_date"));
	@$reason_for_transfer = mysql_real_escape_string(mysql_result($request_data,0,"reason_for_transfer"));
	
	// Attachment for request
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path_request"));
	@$request_file_path_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_path_filename = $request_file_path_explode[0];
	
	// Project to name
	$project_to = "SELECT id, p_name FROM project_info WHERE id='".$project_to_id."' ";
	$project_to_data = mysql_query($project_to);
	@$project_to_name = mysql_real_escape_string(mysql_result($project_to_data,0,"p_name"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR First
	@$hr_first_hr_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_by"));
	@$hr_first_hr_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_created"));
	@$hr_first_hr_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_days"));
	@$hr_first_notes_hr = mysql_real_escape_string(mysql_result($request_data,0,"notes_hr"));
	
	// HR First encoder name
	$hr_first_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_first_hr_update_by."' ";
	$hr_first_encoder_data = mysql_query($hr_first_encoder);
	@$hr_first_encoder_name = mysql_result($hr_first_encoder_data,0,"fullname");
	
	// Attachment for HR First
	@$hrfirst_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path_first"));
	@$hrfirst_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hrfirst_file_path));
	@$hrfirst_file_path_filename = $hrfirst_file_path_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// FD
	@$fd_update_by = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_by"));
	@$fd_update_created = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_created"));
	@$fd_update_days = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_days"));
	@$fd_notes = mysql_real_escape_string(mysql_result($request_data,0,"notes_fd"));
	
	// FD encoder name
	$fd_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$fd_update_by."' ";
	$fd_encoder_data = mysql_query($fd_encoder);
	@$fd_encoder_name = mysql_result($fd_encoder_data,0,"fullname");
	
	// Attachment for FD
	@$fd_file_path = mysql_real_escape_string(mysql_result($request_data,0,"fd_file_path"));
	@$fd_file_path_explode = explode("|",separateFilePathOnMultipleFolders($fd_file_path));
	@$fd_file_path_filename = $fd_file_path_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR Final
	@$hr_final_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_by"));
	@$hr_final_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_created"));
	@$hr_final_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_days"));
	@$hr_final_notes = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_notes"));
	
	// HR Final encoder name
	$hr_final_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_final_update_by."' ";
	$hr_final_encoder_data = mysql_query($hr_final_encoder);
	@$hr_final_encoder_name = mysql_result($fd_encoder_data,0,"fullname");
	
	// Attachment for HR Final
	@$hr_final_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path_third"));
	@$hr_final_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_final_file_path));
	@$hr_final_file_path_filename = $hr_final_file_path_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	return array(
			
			'encode_by' => $encode_by,
			'encoder_name' => $encoder_name,
			'encode_date' => $encode_date,
			'elapsed_days' => $days_between,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'employee_id' => $employee_id,
			'employee_name' => $employee_name,
			'employee_pname' => $employee_pname,
			'employee_position' => $employee_position,
			'employee_total_salary' => $employee_total_salary,
			'project_to_name' => $project_to_name,
			'expected_transfer_date' => $expected_transfer_date,
			'reason_for_transfer' => $reason_for_transfer,
			'request_file_path' => $request_file_path,
			'request_file_filename' => $request_file_path_filename,
				
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'hr_first_hr_update_by' => $hr_first_hr_update_by,
			'hr_first_encoder_name' => $hr_first_encoder_name,
			'hr_first_hr_update_created' => $hr_first_hr_update_created,
			'hr_first_hr_update_days' => $hr_first_hr_update_days,
			'hr_first_notes_hr' => $hr_first_notes_hr,
			
			'hrfirst_file_path' => $hrfirst_file_path,
			'hrfirst_file_path_filename' => $hrfirst_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'fd_update_by' => $fd_update_by,
			'fd_encoder_name' => $fd_encoder_name,
			'fd_update_created' => $fd_update_created,
			'fd_update_days' => $fd_update_days,
			'fd_notes' => $fd_notes,
			
			'fd_file_path' => $fd_file_path,
			'fd_file_path_filename' => $fd_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'hr_final_update_by' => $hr_final_update_by,
			'hr_final_encoder_name' => $hr_final_encoder_name,
			'hr_final_update_created' => $hr_final_update_created,
			'hr_final_update_days' => $hr_final_update_days,
			'hr_final_notes' => $hr_final_notes,
			
			'hr_final_file_path' => $hr_final_file_path,
			'hr_final_file_path_filename' => $hr_final_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'test_result' => $request
	); // end array
	
}// end function

$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>