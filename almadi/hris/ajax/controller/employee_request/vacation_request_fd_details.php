<?php
include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($tcodeid){
	
	$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND hr_update_by IS NOT NULL AND ISNULL(fd_update_by) AND ISNULL(decline_by)";
	$vacation_data = mysql_query($vacation);
	
	// TCode
	@$tcode = mysql_real_escape_string(mysql_result($vacation_data,0,"tcode_vacation"));
	
	//Employee ID
	@$employeeID = mysql_real_escape_string(mysql_result($vacation_data,0,"employee_id_details"));
	
	// Encoder Details
	@$encoder_id = mysql_real_escape_string(mysql_result($vacation_data,0,"created_by"));
	@$encoder_created = mysql_real_escape_string(mysql_result($vacation_data,0,"date_created"));
	
	// Name of the encoder
	$encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$employeeID."' ";
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
	@$replacement_name = mysql_real_escape_string(mysql_result($vacation_data,0,"fullName_replacement"));
	@$replacement_pname = mysql_real_escape_string(mysql_result($vacation_data,0,"project_name_replacement"));
	@$replacement_posname = mysql_real_escape_string(mysql_result($vacation_data,0,"job_title_replacement"));
	
	// Employee Details
	
	// HR First Details
	@$hr_first_employee_id = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_update_by"));
	@$hr_first_created = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_update_created"));
	@$hr_update_days = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_update_days"));
	@$hr_file_path = mysql_real_escape_string(mysql_result($vacation_data,0,"vr_request_file_initial"));
	@$hr_file_path_explode = explode("|",separateFilePathOnMultipleFolders($hr_file_path));
	@$hr_file_name = $hr_file_path_explode[0];
	@$hr_first_notes = mysql_real_escape_string(mysql_result($vacation_data,0,"notes_hr"));
	
	// Name of the hr first update
	$encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_first_employee_id."' ";
	$encoder_data = mysql_query($encoder);
	@$hr_first_name = mysql_result($encoder_data,0,"fullname");
	// Name of the hr first update
	
	// HR First Details
	
	return array(
			'tcode_fd' => $tcode,
			
			'encoder_id_fd' => $encoder_id,
			'encoder_created_fd' => $encoder_created,
			'encoder_name_fd' => $encoder_name,
			'elapsed_days_fd' => $days_between,
			
			'employee_id_fd' => $employee_id,
			'employee_name_fd' => $employee_name,
			'employee_pname_fd' => $employee_pname,
			
			'employee_position_fd' => $employee_position,
			'employee_leave_type_fd' => $employee_leave_type,
			'employee_number_of_days_fd' => $employee_number_of_days,
			
			'expected_departure_from_date_fd' => $expected_departure_from_date,
			'expected_departure_to_date_fd' => $expected_departure_to_date,
			'who_will_pay_visa_fd' => $who_will_pay_visa,
			
			'replacement_requirements_fd' => $replacement_requirements,
			'vacation_request_file_path_fd' => $vacation_request_file_path,
			'vacation_request_file_fd' => $vacation_request_file,
			'employee_iqama_number_fd' => $employee_info_iqama_number,
			
			'employee_info_contract_g_date_employed_fd' => $employee_info_contract_g_date_employed,
			'employee_info_contract_years_fd' => $employee_info_contract_years,
			'employee_length_of_service_fd' => $length_of_service,
			
			'employee_last_vacation_date_fd' => $employee_last_vacation_date,
			'employee_date_joined_last_vacation_fd' => $employee_date_joined_last_vacation,
			'employee_days_of_last_vacation_fd' => $employee_days_of_last_vacation,
			
			'employee_length_of_service_fd' => $employee_length_of_service,
			'employee_vr_summary_fd' => $employee_vr_summary,
			'reason_for_vacation' => $reason_for_vacation,
			
			'replacement_id_number' => $replacement_id_number,
			'replacement_name' => $replacement_name,
			
			'hr_first_employee_id' => $hr_first_employee_id,
			'hr_first_name' => $hr_first_name,
			'hr_first_created' => $hr_first_created,
			'hr_first_update_days' => $hr_update_days,
			'hr_first_file_path' => $hr_file_path,
			'hr_first_file_name' => $hr_file_name,
			'hr_first_notes' => $hr_first_notes
			
			
			
	); // end array
	
}// end function

$result = search($_POST['tcode_id']);
echo json_encode($result);
?>