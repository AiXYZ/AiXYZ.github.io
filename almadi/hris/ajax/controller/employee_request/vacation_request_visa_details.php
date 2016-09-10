<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($tcodeid){
	
	//$vacation = "SELECT * FROM vacation_request_info WHERE employee_id_details = '$empid' AND hr_update_by IS NOT NULL AND fd_update_by IS NOT NULL AND hr_final_update_by IS NOT NULL AND ISNULL(closed_by) AND ISNULL(decline_by)";
	$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND hr_update_by IS NOT NULL AND fd_update_by IS NOT NULL AND hr_final_update_by IS NOT NULL AND tcode_vacation NOT IN (SELECT tcode FROM process_visa) AND ISNULL(decline_by)";
	$vacation_data = mysql_query($vacation);
	
	// TCode
	@$tcode = mysql_real_escape_string(mysql_result($vacation_data,0,"tcode_vacation"));
	
	//Employee ID
	@$employeeID = mysql_real_escape_string(mysql_result($vacation_data,0,"employee_id_details"));
	
	// Encoder Details
	@$encoder_id = mysql_real_escape_string(mysql_result($vacation_data,0,"created_by"));
	@$encoder_created = mysql_real_escape_string(mysql_result($vacation_data,0,"date_created"));
	
	// Name of the encoder
	$encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$encoder_id."' ";
	$encoder_data = mysql_query($encoder);
	@$encoder_name = mysql_result($encoder_data,0,"fullname");
	// Encoder Details
	
	// Function to compute the elapsed day between the Created date and the Current date
	$elapsedDays = elapsed_days($encoder_created);
	$days_between = $elapsedDays['days_between'];
	// Function to compute the elapsed day between the Created date and the Current date
	
	// Employee Details
	@$employee_id = mysql_real_escape_string(mysql_result($vacation_data,0,"employee_id_details"));
	@$employee_name = mysql_real_escape_string(mysql_result($vacation_data,0,"full_name_details"));
	@$employee_pname = mysql_real_escape_string(mysql_result($vacation_data,0,"project_name_details"));
	
	@$employee_position = mysql_real_escape_string(mysql_result($vacation_data,0,"job_title_details"));
	@$employee_leave_type = mysql_real_escape_string(mysql_result($vacation_data,0,"type_of_leave"));
	@$employee_number_of_days = mysql_real_escape_string(mysql_result($vacation_data,0,"number_of_days"));
	
	@$expected_departure_from_date = mysql_real_escape_string(mysql_result($vacation_data,0,"expected_departure_from_date"));
	@$expected_departure_to_date = mysql_real_escape_string(mysql_result($vacation_data,0,"expected_departure_to_date"));
	@$who_will_pay_visa_id = mysql_real_escape_string(mysql_result($vacation_data,0,"pay_visa"));
	// Name for the Who will pay visa
	if($who_will_pay_visa_id == 1){
		$who_will_pay_visa = 'Employee';
	}else {
		$who_will_pay_visa = 'Company';
	}// end if else
	@$replacement_requirements_id = mysql_real_escape_string(mysql_result($vacation_data,0,"replacement_requirements"));
	if($replacement_requirements_id == 'nr'){
		$replacement_requirements = 'NR - Need for Replacement';
	}else if($replacement_requirements_id == 'nnr'){
		$replacement_requirements = 'NNR - No Need for Replacement';
	}else {
		$replacement_requirements = 'AR - Already have Replacement';
	}// end if else
	@$vacation_request_file_path = mysql_real_escape_string(mysql_result($vacation_data,0,"vr_request_file"));
	@$vacation_request_explode = explode("|",separateFilePathOnMultipleFolders($vacation_request_file_path));
	@$vacation_request_file = $vacation_request_explode[0];
	
	$employee_info = "SELECT id_number, iqama_number, contract_g_date_employed, contract_years FROM employee_details WHERE id_number = '".$employeeID."'";
	$employee_info_data = mysql_query($employee_info);
	
	@$employee_info_iqama_number = mysql_real_escape_string(mysql_result($employee_info_data,0,"iqama_number"));
	@$employee_info_contract_g_date_employed = mysql_real_escape_string(mysql_result($employee_info_data,0,"contract_g_date_employed"));
	@$employee_info_contract_years = mysql_real_escape_string(mysql_result($employee_info_data,0,"contract_years"));
	
	//Function to compute the length of service from the current contract date to the current date
	$lengthOfService = length_of_service($employee_info_contract_g_date_employed);
	$length_of_service = $lengthOfService['length_of_service'];
	// Function to compute the length of service from the current contract date to the current date
	
	@$employee_last_vacation_date = mysql_real_escape_string(mysql_result($vacation_data,0,"last_vacation_date"));
	@$employee_date_joined_last_vacation = mysql_real_escape_string(mysql_result($vacation_data,0,"date_joined_last_vacation"));
	@$employee_days_of_last_vacation = mysql_real_escape_string(mysql_result($vacation_data,0,"days_of_last_vacation"));
	
	@$employee_length_of_service = mysql_real_escape_string(mysql_result($vacation_data,0,"length_of_service"));
	@$employee_vr_summary = mysql_real_escape_string(mysql_result($vacation_data,0,"vr_summary"));
	@$reason_for_vacation = mysql_real_escape_string(mysql_result($vacation_data,0,"reason_for_vacation"));
	
	// This is for the replacement details
	@$replacement_id_number = mysql_real_escape_string(mysql_result($vacation_data,0,"employee_id_replacement"));
	
	$replacement = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$replacement_id_number."' ";
	$replacement_data = mysql_query($replacement);
	@$replacement_name = mysql_result($replacement_data,0,"fullname");
	// This is for the replacement details
	
	// HR First Details
	@$visa_hr_first_employee_id = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_update_by"));
	@$visa_hr_first_created = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_update_created"));
	@$visa_hr_first_update_days = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_update_days"));
	@$visa_hr_first_file_path = mysql_real_escape_string(mysql_result($vacation_data,0,"vr_request_file_initial"));
	@$visa_hr_first_file_path_explode = explode("|",separateFilePathOnMultipleFolders($visa_hr_first_file_path));
	@$visa_hr_first_file_name = $visa_hr_first_file_path_explode[0];
	@$visa_hr_first_notes = mysql_real_escape_string(mysql_result($vacation_data,0,"notes_hr"));
	
	// Name of the hr first update
	$encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$visa_hr_first_employee_id."' ";
	$encoder_data = mysql_query($encoder);
	@$visa_hr_first_name = mysql_result($encoder_data,0,"fullname");
	// Name of the hr first update
	// HR First Details
	
	// FD Details
	@$encoder_id_fd = mysql_real_escape_string(mysql_result($vacation_data,0,"fd_update_by"));
	$encoder_fd = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$encoder_id_fd."' ";
	$encoder_fd_data = mysql_query($encoder_fd);
	@$encoder_name_fd = mysql_result($encoder_fd_data,0,"fullname");
	@$encoder_created_fd = mysql_real_escape_string(mysql_result($vacation_data,0,"fd_update_created"));

	@$encoder_days_fd = mysql_real_escape_string(mysql_result($vacation_data,0,"fd_update_days"));
	@$fd_basic_salary = mysql_real_escape_string(mysql_result($vacation_data,0,"basic_salary"));
	@$fd_total_deductions = mysql_real_escape_string(mysql_result($vacation_data,0,"total_deductions"));
	
	@$fd_credit = mysql_real_escape_string(mysql_result($vacation_data,0,"credit_fd"));
	@$fd_file_path = mysql_real_escape_string(mysql_result($vacation_data,0,"fd_file_path"));
	@$fd_file_path_explode = explode("|",separateFilePathOnMultipleFolders($fd_file_path));
	@$fd_file_name = $fd_file_path_explode[0];
	
	@$fd_notes = mysql_real_escape_string(mysql_result($vacation_data,0,"notes_fd"));
	// FD Details
	
	//HR Final Details
	@$hr_final_update_by = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_final_update_by"));
	
	$encoder_hr_final = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_final_update_by."' ";
	$encoder_hr_final_data = mysql_query($encoder_hr_final);
	@$encoder_name_hr_final = mysql_result($encoder_hr_final_data,0,"fullname");
	@$hr_final_update_created = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_final_update_created"));
	
	@$hr_final_days = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_final_days"));
	
	@$hr_final_file_path = mysql_real_escape_string(mysql_result($vacation_data,0,"file_hr_final"));
	@$hr_final_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_final_file_path));
	@$hr_final_file_name = $hr_final_file_path_explode[0];
	
	@$hr_final_notes = mysql_real_escape_string(mysql_result($vacation_data,0,"notes_hr_final"));
	//HR Final Details
	
	return array(
			'tcode_visa' => $tcode,
			
			'encoder_id_visa' => $encoder_id,
			'encoder_name_visa' => $encoder_name,
			'encoder_created_visa' => $encoder_created,
			'elapsed_days_visa' => $days_between,
			
			'employee_id_visa' => $employee_id,
			'employee_name_visa' => $employee_name,
			'employee_pname_visa' => $employee_pname,
			
			'employee_position_visa' => $employee_position,
			'employee_leave_type_visa' => $employee_leave_type,
			'employee_number_of_days_visa' => $employee_number_of_days,
			
			'expected_departure_from_date_visa' => $expected_departure_from_date,
			'expected_departure_to_date_visa' => $expected_departure_to_date,
			'who_will_pay_visa_VISA' => $who_will_pay_visa,
			
			'replacement_requirements_id_visa' => $replacement_requirements_id,
			
			'replacement_requirements_visa' => $replacement_requirements,
			'vacation_request_file_path_visa' => $vacation_request_file_path,
			'vacation_request_file_visa' => $vacation_request_file,
			'employee_iqama_number_visa' => $employee_info_iqama_number,
			
			'employee_info_contract_g_date_employed_visa' => $employee_info_contract_g_date_employed,
			'employee_info_contract_years_visa' => $employee_info_contract_years,
			'employee_length_of_service_visa' => $length_of_service,
			
			'employee_last_vacation_date_visa' => $employee_last_vacation_date,
			'employee_date_joined_last_vacation_visa' => $employee_date_joined_last_vacation,
			'employee_days_of_last_vacation_visa' => $employee_days_of_last_vacation,
			
			'employee_ltime_after_last_vacation_visa' => $employee_length_of_service,
			'employee_vr_summary_visa' => $employee_vr_summary,
			'reason_for_vacation_visa' => $reason_for_vacation,
			
			'required_replacement_visa' => $replacement_requirements,
			'replacement_id_number_visa' => $replacement_id_number,
			'replacement_name_visa' => $replacement_name,
			
			'visa_hr_first_employee_id' => $visa_hr_first_employee_id,
			'visa_hr_first_employee_name' => $visa_hr_first_name,
			'visa_hr_first_created' => $visa_hr_first_created,
			'visa_hr_first_update_days' => $visa_hr_first_update_days,
			'visa_hr_first_file_path' => $visa_hr_first_file_path,
			'visa_hr_first_file_name' => $visa_hr_first_file_name,
			'visa_hr_first_notes' => $visa_hr_first_notes,
			
			'visa_fd_encoder_id_fd' => $encoder_id_fd,
			'visa_fd_encoder_name_fd' => $encoder_name_fd,
			'visa_fd_encoder_created_fd' => $encoder_created_fd,
			
			'visa_fd_encoder_days' => $encoder_days_fd,
			'visa_fd_basic_salary' => $fd_basic_salary,
			'visa_fd_total_deductions' => $fd_total_deductions,
			
			'visa_fd_credit' => $fd_credit,
			'visa_fd_file_path' => $fd_file_path,
			'visa_fd_file_name' => $fd_file_name,
			
			'visa_fd_notes' => $fd_notes,
			
			'visa_hr_final_update_by' => $hr_final_update_by,
			'visa_hr_final_encoder_name' => $encoder_name_hr_final,
			'visa_hr_final_update_created' => $hr_final_update_created,
			
			'edit_visa_hr_final_notes' => $hr_final_update_created, // For editing
			
			'visa_hr_final_days' => $hr_final_days,
			'visa_hr_final_file_path' => $hr_final_file_path,
			'visa_hr_final_file_name' => $hr_final_file_name,
			
			'visa_hr_final_notes' => $hr_final_notes
			
	); // end array
	
}// end function

$result = search($_POST['tcode_id']);
echo json_encode($result);
?>