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
		$request = "SELECT * FROM cash_advance_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if
	
	// Approval
	if($query == 'approval'){
		$request = "SELECT * FROM cash_advance_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// Employee received
	if($query == 'employeereceived'){
		$request = "SELECT * FROM cash_advance_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 3";
		$request_data = mysql_query($request);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$request = "SELECT * FROM cash_advance_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 4";
		$request_data = mysql_query($request);
	}//end if
	
	// Declined
	if($query == 'declined'){
		$request = "SELECT * FROM cash_advance_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 5";
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
	@$amount = mysql_real_escape_string(mysql_result($request_data,0,"amount"));
	@$reason_for_cash_advance = mysql_real_escape_string(mysql_result($request_data,0,"reason_for_cash_advance"));
	
	// Attachment for Request
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_path_request"));
	@$request_file_path_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_path_filename = $request_file_path_explode[0];
	
	$employee = "SELECT
						id_number,
						fullname,
						project_name,
						position,
						nationality,
						total_salary
						FROM employee_details WHERE id_number = '".$employee_id."' ";
	$employee_data = mysql_query($employee);
	@$employee_name = mysql_real_escape_string(mysql_result($employee_data,0,"fullname"));
	@$employee_pname = mysql_real_escape_string(mysql_result($employee_data,0,"project_name"));
	@$employee_position = mysql_real_escape_string(mysql_result($employee_data,0,"position"));
	@$employee_nationality = mysql_real_escape_string(mysql_result($employee_data,0,"nationality"));
	@$employee_total_salary = number_format(mysql_real_escape_string(mysql_result($employee_data,0,"total_salary")), 0);
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR First details
	@$hr_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_by"));
	@$hr_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_created"));
	
	@$hr_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_days"));
	@$hr_remaining_salary = number_format(mysql_real_escape_string(mysql_result($request_data,0,"credit_salary")), 0);
	@$hr_oustanding_balance = number_format(mysql_real_escape_string(mysql_result($request_data,0,"credit")), 0);
	@$hr_last_advance_amount = number_format(mysql_real_escape_string(mysql_result($request_data,0,"last_advance_amount")), 0);
	@$hr_last_advance_date = mysql_real_escape_string(mysql_result($request_data,0,"last_advance_date"));
	@$hr_payment_method = mysql_real_escape_string(mysql_result($request_data,0,"payment_method"));
	@$hr_notes = mysql_real_escape_string(mysql_result($request_data,0,"notes_hr"));
	
	@$hr_notes = mysql_real_escape_string(mysql_result($request_data,0,"notes_hr"));
	
	// Attachment for HR First
	@$hr_first_file_path = mysql_real_escape_string(mysql_result($request_data,0,"hr_initial_file"));
	@$hr_first_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_first_file_path));
	@$hr_first_file_path_filename = $hr_first_file_path_explode[0];
	
	// HR First encoder name
	$hr_first_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_update_by."' ";
	$hr_first_encoder_data = mysql_query($hr_first_encoder);
	@$hr_first_encoder_name = mysql_result($hr_first_encoder_data,0,"fullname");
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Approval details
	@$approval_update_by = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_by"));
	@$approval_update_created = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_created"));
	@$approval_update_days = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_days"));
	@$approval_update_notes = mysql_real_escape_string(mysql_result($request_data,0,"notes_fd"));
	
	// Attachment for approval
	@$approval_file_path = mysql_real_escape_string(mysql_result($request_data,0,"hr_second_file"));
	@$approval_file_path_explode = explode("|",separateFilePathOnMultipleFolders($approval_file_path));
	@$approval_file_path_filename = $approval_file_path_explode[0];
	
	// Approval encoder name
	$approval_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$approval_update_by."' ";
	$approval_encoder_data = mysql_query($approval_encoder);
	@$approval_encoder_name = mysql_real_escape_string(mysql_result($approval_encoder_data,0,"fullname"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Employee received
	@$employee_received_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_by"));
	@$employee_received_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_created"));
	@$employee_received_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_days"));
	@$employee_received_update_notes = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_notes"));
	
	// Attachment for approval
	@$employee_received_file_path = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_file"));
	@$employee_received_file_path_explode = explode("|",separateFilePathOnMultipleFolders($employee_received_file_path));
	@$employee_received_file_path_filename = $employee_received_file_path_explode[0];
	
	// Approval encoder name
	$employee_received_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$employee_received_update_by."' ";
	$employee_received_encoder_data = mysql_query($employee_received_encoder);
	@$employee_received_encoder_name = mysql_real_escape_string(mysql_result($employee_received_encoder_data,0,"fullname"));
	
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
			
			'employee_total_salary' => $employee_total_salary,
			
			'amount' => $amount,
			'reason_for_cash_advance' => $reason_for_cash_advance,
			
			'request_file_path' => $request_file_path,
			'request_file_filename' => $request_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// HR First details
			'hr_update_by' => $hr_update_by,
			'hr_first_encoder_name' => $hr_first_encoder_name,
			'hr_update_created' => $hr_update_created,
			'hr_update_days' => $hr_update_days,
			'hr_remaining_salary' => $hr_remaining_salary,
			'hr_oustanding_balance' => $hr_oustanding_balance,
			'hr_last_advance_amount' => $hr_last_advance_amount,
			'hr_last_advance_date' => $hr_last_advance_date,
			'hr_payment_method' => $hr_payment_method,
			'hr_first_file_path' => $hr_first_file_path,
			'hr_first_file_path_filename' => $hr_first_file_path_filename,
			'hr_notes' => $hr_notes,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
 			'approval_update_by' => $approval_update_by,
			'approval_encoder_name' => $approval_encoder_name,
			'approval_update_created' => $approval_update_created,
			'approval_update_days' => $approval_update_days,
			'approval_update_notes' => $approval_update_notes,
			'approval_file_path' => $approval_file_path,
			'approval_file_path_filename' => $approval_file_path_filename,
 			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'employee_received_update_by' => $employee_received_update_by,
			'employee_received_encoder_name' => $employee_received_encoder_name,
			'employee_received_update_created' => $employee_received_update_created,
			'employee_received_update_days' => $employee_received_update_days,
			'employee_received_update_notes' => $employee_received_update_notes,
			'employee_received_file_path' => $employee_received_file_path,
			'employee_received_file_path_filename' => $employee_received_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
				
			//'xxx' => $xxx,
			
			'test_result' => $request
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
	); // end array
	
}// end function

$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>