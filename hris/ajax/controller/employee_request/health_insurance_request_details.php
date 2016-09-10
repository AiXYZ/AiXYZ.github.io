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
		$request = "SELECT * FROM health_insurance_info WHERE tcode_vacation = '$tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if
	
	// Send to company
	if($query == 'send_to_company'){
		$request = "SELECT * FROM health_insurance_info WHERE tcode_vacation = '$tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// Received from company
	if($query == 'received_from_company'){
		$request = "SELECT * FROM health_insurance_info WHERE tcode_vacation = '$tcodeid' AND request_status = 3";
		$request_data = mysql_query($request);
	}//end if
	
	// Send to site
	if($query == 'send_to_site'){
		$request = "SELECT * FROM health_insurance_info WHERE tcode_vacation = '$tcodeid' AND request_status = 4";
		$request_data = mysql_query($request);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$request = "SELECT * FROM health_insurance_info WHERE tcode_vacation = '$tcodeid' AND request_status = 5";
		$request_data = mysql_query($request);
	}//end if
	
	// Declined
	if($query == 'declined'){
		$request = "SELECT * FROM health_insurance_info WHERE tcode_vacation = '$tcodeid' AND request_status = 6";
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
	@$employee_request_notes = mysql_real_escape_string(mysql_result($request_data,0,"health_notes"));
	
	@$request_health_type_id = mysql_real_escape_string(mysql_result($request_data,0,"health_type"));
	$health_type = "SELECT * FROM health_request_type WHERE id = '".$request_health_type_id."' ";
	$health_type_data = mysql_query($health_type);
	@$health_type_name = mysql_real_escape_string(mysql_result($health_type_data,0,"type_name"));
	
	@$request_health_issues_id = mysql_real_escape_string(mysql_result($request_data,0,"health_issues"));
	$health_issues = "SELECT * FROM health_request_issues WHERE id = '".$request_health_issues_id."' ";
	$health_issues_data = mysql_query($health_issues);
	@$health_issues_name = mysql_real_escape_string(mysql_result($health_issues_data,0,"issues_name"));
	if(strlen($health_issues_name) > 0){
		@$hi_issues_name = $health_issues_name;
	}else {
		@$hi_issues_name = '&nbsp;';
	}
	
	// Attachment for Request
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"health_file"));
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
	@$request_hr_update_by = mysql_real_escape_string(mysql_result($request_data,0,"first_update_by"));
	@$request_hr_update_created = mysql_real_escape_string(mysql_result($request_data,0,"first_created"));
	@$request_hr_notes = mysql_real_escape_string(mysql_result($request_data,0,"first_notes"));
	@$request_hr_update_days = mysql_real_escape_string(mysql_result($request_data,0,"first_update_days"));
	
	// Attachment for HR First
	@$hr_first_file_path = mysql_real_escape_string(mysql_result($request_data,0,"first_file"));
	@$hr_first_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_first_file_path));
	@$hr_first_file_path_filename = $hr_first_file_path_explode[0];
	
	// HR First encoder name
	$hr_first_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$request_hr_update_by."' ";
	$hr_first_encoder_data = mysql_query($hr_first_encoder);
	@$hr_first_encoder_name = mysql_real_escape_string(mysql_result($hr_first_encoder_data,0,"fullname"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Send to company details
	@$second_update_by = mysql_real_escape_string(mysql_result($request_data,0,"second_update_by"));
	@$second_update_created = mysql_real_escape_string(mysql_result($request_data,0,"second_created"));
	@$second_update_days = mysql_real_escape_string(mysql_result($request_data,0,"second_update_days"));
	@$second_notes = mysql_real_escape_string(mysql_result($request_data,0,"second_notes"));
	
	// Attachment for Send to company
	@$second_file_path = mysql_real_escape_string(mysql_result($request_data,0,"second_file"));
	@$second_file_path_explode = explode("|",separateFilePathOnMultipleFolders($second_file_path));
	@$second_file_path_filename = $second_file_path_explode[0];
	
	// Send to company encoder name
	$second_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$second_update_by."' ";
	$second_encoder_data = mysql_query($second_encoder);
	@$second_encoder_name = mysql_real_escape_string(mysql_result($second_encoder_data,0,"fullname"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Received from company
	@$third_update_by = mysql_real_escape_string(mysql_result($request_data,0,"third_update_by"));
	@$third_update_created = mysql_real_escape_string(mysql_result($request_data,0,"third_created"));
	@$third_update_days = mysql_real_escape_string(mysql_result($request_data,0,"third_update_days"));
	@$third_notes = mysql_real_escape_string(mysql_result($request_data,0,"third_notes"));
	
	// Attachment for Received from company
	@$third_file_path = mysql_real_escape_string(mysql_result($request_data,0,"third_file"));
	@$third_file_path_explode = explode("|",separateFilePathOnMultipleFolders($third_file_path));
	@$third_file_path_filename = $third_file_path_explode[0];
	
	// Received from company encoder name
	$third_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$third_update_by."' ";
	$third_encoder_data = mysql_query($third_encoder);
	@$third_encoder_name = mysql_result($third_encoder_data,0,"fullname");
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Send to site details
	@$fourth_update_by = mysql_real_escape_string(mysql_result($request_data,0,"signature_update_by"));
	@$fourth_update_created = mysql_real_escape_string(mysql_result($request_data,0,"signature_created"));
	@$fourth_update_days = mysql_real_escape_string(mysql_result($request_data,0,"signature_update_days"));
	@$fourth_notes = mysql_real_escape_string(mysql_result($request_data,0,"signature_notes"));
	
	// Attachment for Received from bank
	@$fourth_file_path = mysql_real_escape_string(mysql_result($request_data,0,"signature_file"));
	@$fourth_path_explode = explode("|",separateFilePathOnMultipleFolders($fourth_file_path));
	@$fourth_path_filename = $fourth_path_explode[0];
	
	// Received from bank encoder name
	$fourth_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$fourth_update_by."' ";
	$fourth_encoder_data = mysql_query($fourth_encoder);
	@$fourth_encoder_name = mysql_result($received_from_bank_encoder_data,0,"fullname");
	
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
			
			'health_type_name' => $health_type_name,
			'health_issues_name' => $hi_issues_name,
			
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
			
			// Send to company details
			'second_update_by' => $second_update_by,
			'second_encoder_name' => $second_encoder_name,
			'second_update_created' => $second_update_created,
			'second_update_days' => $second_update_days,
			'second_notes' => $second_notes,
			'second_file_path' => $second_file_path,
			'second_file_path_filename' => $second_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// Received from company details
			'third_update_by' => $third_update_by,
			'third_encoder_name' => $third_encoder_name,
			'third_update_created' => $third_update_created,
			'third_update_days' => $third_update_days,
			'third_notes' => $third_notes,
			'third_file_path' => $third_file_path,
			'third_file_path_filename' => $third_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// Send to site
			'fourth_update_by' => $fourth_update_by,
			'fourth_encoder_name' => $fourth_encoder_name,
			'fourth_update_created' => $fourth_update_created,
			'fourth_update_days' => $fourth_update_days,
			'fourth_notes' => $fourth_notes,
			'fourth_file_path' => $fourth_file_path,
			'fourth_file_path_filename' => $fourth_path_filename,
				
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'test_result' => $request
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
	); // end array
	
}// end function

$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>