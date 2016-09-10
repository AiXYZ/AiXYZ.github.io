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
	if($cr_query == 'fv_hr'){
		$request = "SELECT * FROM family_info WHERE tcode_vacation = '$cr_tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if	
	
	// HR Closed
	if($cr_query == 'fv_closed'){
		$request = "SELECT * FROM family_info WHERE tcode_vacation = '$cr_tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// HR Closed
	if($cr_query == 'fv_declined'){
		$request = "SELECT * FROM family_info WHERE tcode_vacation = '$cr_tcodeid' AND request_status = 3";
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
	
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"family_file"));
	@$request_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_name = $request_explode[0];	
	@$request_notes = mysql_real_escape_string(mysql_result($request_data,0,"family_notes"));
	
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
			'fv_encode_by' => $encode_by,
			'fv_encoder_name' => $encoder_name,
			'fv_encode_date' => $encode_date,
			'fv_elapsed_days' => $days_between,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			// Employee details
			'fv_employee_id' => $employee_id,
			'fv_employee_name' => $employee_name,
			'fv_employee_pname' => $employee_pname,
			'fv_employee_position' => $employee_position,
			'fv_employee_nationality' => $employee_nationality,
			'fv_file_path' => $request_file_path,
			'fv_file_name' => $request_file_name,
			'fv_notes' => $request_notes,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			// HR closing 
			'fv_hrclosed_update_by' => $hr_final_update_by,
			'fv_hrclosed_encoder_name' => $hrfinal_encoder_name,
			'fv_hrclosed_update_created' => $hr_final_update_created,
			'fv_hrclosed_update_days' => $hr_final_update_days,
			'fv_hrclosed_file_path' => $fr_hr_final_file_path,
			'fv_hrclosed_file_name' => $fr_hr_final_file_name,
			'fv_hrclosed_notes' => $hr_final_notes,			
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			// HR declined
			'fv_hrdeclined_update_by' => $request_hr_update_by,
			'fv_hrdeclined_encoder_name' => $hr_encoder_name,
			'fv_hrdeclined_update_created' => $request_hr_update_created,
			'fv_hrdeclined_update_days' => $request_hr_update_days,
			'fv_hrdeclined_file_path' => $fr_hrreceived_file_path,
			'fv_hrdeclined_file_name' => $fr_hrreceived_request_explode,
			'fv_hrdeclined_notes' => $request_hr_notes,			
			
			'fv_test_result' => $tcode
	); // end array
	
}// end function

//$result = search(20160201232545, fv_declined);
$result = search($_POST['fv_tcode_id'], $_POST['fv_query']);
echo json_encode($result);
?>