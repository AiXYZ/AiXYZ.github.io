<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

/*
1 - HR Received
2 - HR Closing
3 - Closed
*/

function search($fr_tcodeid, $fr_query){
	
	// HR Received
	if($fr_query == 'fr_hr_received'){
		$request = "SELECT * FROM floating_personnel_info WHERE trans_code = '$fr_tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if

	// HR Closing
	if($fr_query == 'fr_hr_closing'){
		$request = "SELECT * FROM floating_personnel_info WHERE trans_code = '$fr_tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if	

	// HR Closed
	if($fr_query == 'fr_closed'){
		$request = "SELECT * FROM floating_personnel_info WHERE trans_code = '$fr_tcodeid' AND request_status = 3";
		$request_data = mysql_query($request);
	}//end if	
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Tcode
	@$tcode = mysql_real_escape_string(mysql_result($request_data,0,"trans_code"));
	
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
	
	// Employee name
	$employee = "SELECT
						id_number,
						fullname,
						project_name,
						position,
						nationality
						FROM employee_details WHERE id_number = '".$employee_id."' ";
	$employee_data = mysql_query($employee);
	@$employee_name = mysql_real_escape_string(mysql_result($employee_data,0,"fullname"));
	@$employee_pname = mysql_real_escape_string(mysql_result($employee_data,0,"project_name"));
	@$employee_position = mysql_real_escape_string(mysql_result($employee_data,0,"position"));
	@$employee_nationality = mysql_real_escape_string(mysql_result($employee_data,0,"nationality"));
	
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"emp_file_path"));
	@$request_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_name = $request_explode[0];	
	@$request_notes = mysql_real_escape_string(mysql_result($request_data,0,"emp_notes"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR Received
	@$request_hr_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_by"));
	@$request_hr_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_created"));
	@$request_hr_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_days"));
	@$request_hr_notes = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_notes"));

	// HR Encoder name
	$hr_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$request_hr_update_by."' ";
	$hr_encoder_data = mysql_query($hr_encoder);
	@$hr_encoder_name = mysql_result($hr_encoder_data,0,"fullname");	
	
	@$fr_hrreceived_file_path =  mysql_real_escape_string(mysql_result($request_data,0,"hr_update_file"));
	@$fr_hrreceived_request_explode = explode("|",separateFilePathOnMultipleFolders($fr_hrreceived_file_path));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR closing
	@$hr_final_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_by"));
	@$hr_final_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_created"));
	@$hr_final_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_days"));
	@$hr_final_notes = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_notes"));
	
	// HR Final Encoder name
	$hrfinal_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_final_update_by."' ";
	$hrfinal_encoder_data = mysql_query($hrfinal_encoder);
	@$hrfinal_encoder_name = mysql_result($hrfinal_encoder_data,0,"fullname");
	
	@$fr_hr_final_file_path = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_file"));
	@$fr_hr_final_explode = explode("|",separateFilePathOnMultipleFolders($fr_hr_final_file_path));
	@$fr_hr_final_file_name = $fr_hr_final_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	return array(
			//Encoder details
			'fr_encode_by' => $encode_by,
			'fr_encoder_name' => $encoder_name,
			'fr_encode_date' => $encode_date,
			'fr_elapsed_days' => $days_between,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			// Employee details
			'fr_employee_id' => $employee_id,
			'fr_employee_name' => $employee_name,
			'fr_employee_pname' => $employee_pname,
			'fr_employee_position' => $employee_position,
			'fr_employee_nationality' => $employee_nationality,
			'fr_file_path' => $request_file_path,
			'fr_file_name' => $request_file_name,
			'fr_notes' => $request_notes,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			// HR Received
			'fr_hrreceived_update_by' => $request_hr_update_by,
			'fr_hrreceived_encoder_name' => $hr_encoder_name,
			'fr_hrreceived_update_created' => $request_hr_update_created,
			'fr_hrreceived_update_days' => $request_hr_update_days,
			'fr_hrreceived_file_path' => $fr_hrreceived_file_path,
			'fr_hrreceived_file_name' => $fr_hrreceived_request_explode,	
			'fr_hrreceived_notes' => $request_hr_notes,

			/* ------------------------------------------------------------------------------------------------------------------------------- */
			// HR closing 
			'fr_hrclosing_update_by' => $hr_final_update_by,
			'fr_hrclosing_encoder_name' => $hrfinal_encoder_name,
			'fr_hrclosing_update_created' => $hr_final_update_created,
			'fr_hrclosing_update_days' => $hr_final_update_days,
			'fr_hrclosing_file_path' => $fr_hr_final_file_path,
			'fr_hrclosing_file_name' => $fr_hr_final_file_name,
			'fr_hrclosing_notes' => $hr_final_notes,			
			
			'fr_test_result' => $tcode
	); // end array
	
}// end function

//$result = search(20150328120929, fr_closed);
$result = search($_POST['fr_tcode_id'], $_POST['fr_query']);
echo json_encode($result);
?>