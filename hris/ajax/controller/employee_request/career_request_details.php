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

function search($cr_tcodeid, $cr_query){
	// HR Closed
	if($cr_query == 'cc_hr'){
		$request = "SELECT * FROM career_info WHERE tcode_vacation = '$cr_tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if	
	
	// HR Closed
	if($cr_query == 'cc_closed'){
		$request = "SELECT * FROM career_info WHERE tcode_vacation = '$cr_tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// HR Closed
	if($cr_query == 'cc_declined'){
		$request = "SELECT * FROM career_info WHERE tcode_vacation = '$cr_tcodeid' AND request_status = 3";
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
	
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"career_file"));
	@$request_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_name = $request_explode[0];	
	@$request_notes = mysql_real_escape_string(mysql_result($request_data,0,"career_notes"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	
	// HR closed
	@$hr_final_update_by = mysql_real_escape_string(mysql_result($request_data,0,"first_update_by"));
	@$hr_final_update_created = mysql_real_escape_string(mysql_result($request_data,0,"first_created"));
	@$hr_final_update_days = mysql_real_escape_string(mysql_result($request_data,0,"first_update_days"));
	@$hr_final_notes = mysql_real_escape_string(mysql_result($request_data,0,"first_notes"));
	
	// HR Final Encoder name
	$hrfinal_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_final_update_by."' ";
	$hrfinal_encoder_data = mysql_query($hrfinal_encoder);
	@$hrfinal_encoder_name = mysql_result($hrfinal_encoder_data,0,"fullname");
	
	@$fr_hr_final_file_path = mysql_real_escape_string(mysql_result($request_data,0,"first_file"));
	@$fr_hr_final_explode = explode("|",separateFilePathOnMultipleFolders($fr_hr_final_file_path));
	@$fr_hr_final_file_name = $fr_hr_final_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */

	// HR declined
	@$request_hr_update_by = mysql_real_escape_string(mysql_result($request_data,0,"declined_update_by"));
	@$request_hr_update_created = mysql_real_escape_string(mysql_result($request_data,0,"declined_created"));
	@$request_hr_update_days = mysql_real_escape_string(mysql_result($request_data,0,"declined_update_days"));
	@$request_hr_notes = mysql_real_escape_string(mysql_result($request_data,0,"declined_notes"));
	
	// HR Encoder name
	$hr_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$request_hr_update_by."' ";
	$hr_encoder_data = mysql_query($hr_encoder);
	@$hr_encoder_name = mysql_result($hr_encoder_data,0,"fullname");
	
	@$fr_hrreceived_file_path =  mysql_real_escape_string(mysql_result($request_data,0,"declined_file"));
	@$fr_hrreceived_request_explode = explode("|",separateFilePathOnMultipleFolders($fr_hrreceived_file_path));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */	
	
	return array(
			//Encoder details
			'cr_encode_by' => $encode_by,
			'cr_encoder_name' => $encoder_name,
			'cr_encode_date' => $encode_date,
			'cr_elapsed_days' => $days_between,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			// Employee details
			'cr_employee_id' => $employee_id,
			'cr_employee_name' => $employee_name,
			'cr_employee_pname' => $employee_pname,
			'cr_employee_position' => $employee_position,
			'cr_employee_nationality' => $employee_nationality,
			'cr_file_path' => $request_file_path,
			'cr_file_name' => $request_file_name,
			'cr_notes' => $request_notes,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			// HR closing 
			'cr_hrclosing_update_by' => $hr_final_update_by,
			'cr_hrclosing_encoder_name' => $hrfinal_encoder_name,
			'cr_hrclosing_update_created' => $hr_final_update_created,
			'cr_hrclosing_update_days' => $hr_final_update_days,
			'cr_hrclosing_file_path' => $fr_hr_final_file_path,
			'cr_hrclosing_file_name' => $fr_hr_final_file_name,
			'cr_hrclosing_notes' => $hr_final_notes,			

			/* ------------------------------------------------------------------------------------------------------------------------------- */
			// HR declined
			'cr_hrdeclinde_update_by' => $request_hr_update_by,
			'cr_hrdeclinde_encoder_name' => $hr_encoder_name,
			'cr_hrdeclinde_update_created' => $request_hr_update_created,
			'cr_hrdeclinde_update_days' => $request_hr_update_days,
			'cr_hrdeclinde_file_path' => $fr_hrreceived_file_path,
			'cr_hrdeclinde_file_name' => $fr_hrreceived_request_explode,
			'cr_hrdeclinde_notes' => $request_hr_notes,			
			
			'cr_test_result' => $tcode
	); // end array
	
}// end function

//$result = search(20160316185143, cr_closed);
$result = search($_POST['cr_tcode_id'], $_POST['cr_query']);
echo json_encode($result);
?>