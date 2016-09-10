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
		$request = "SELECT * FROM renew_iqama_info WHERE tcode = '$tcodeid' AND iqama_status = 1";
		$request_data = mysql_query($request);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$request = "SELECT * FROM renew_iqama_info WHERE tcode = '$tcodeid' AND iqama_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Encoder details
	@$encode_by = mysql_real_escape_string(mysql_result($request_data,0,"send_from"));
	@$encode_date = mysql_real_escape_string(mysql_result($request_data,0,"send_date"));
	
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

	//Attachment for Request
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"iqama_file_path"));
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
	$hrFirst = "SELECT update_by, update_created, update_days, ri_tcode FROM renew_iqama_request_history WHERE ri_tcode = '".$tcodeid."' ";
	$hrFirst_data = mysql_query($hrFirst);
	
	@$request_hr_update_by = mysql_real_escape_string(mysql_result($hrFirst_data,0,"update_by"));
	@$request_hr_update_created = mysql_real_escape_string(mysql_result($hrFirst_data,0,"update_created"));
	@$request_hr_update_days = mysql_real_escape_string(mysql_result($hrFirst_data,0,"update_days"));
	
	//HR First encoder name
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
			
			'request_file_path' => $request_file_path,
			'request_file_filename' => $request_file_path_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// HR First details
			'request_hr_update_by' => $request_hr_update_by,
			'hr_first_encoder_name' => $hr_first_encoder_name,
			'request_hr_update_created' => $request_hr_update_created,
			'request_hr_update_days' => $request_hr_update_days,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'test_result' => $request
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
	); // end array
	
}// end function

$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>