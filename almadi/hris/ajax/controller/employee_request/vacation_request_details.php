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

//function search($empid){
function search($tcodeid, $query){
	
	// HR First
	if($query == 'hrfirst'){
		//$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND ISNULL(hr_update_by) AND ISNULL(decline_by)";
		$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 1";
		$vacation_data = mysql_query($vacation);
	}//end if
	
	// FD
	if($query == 'fd'){
		//$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND hr_update_by IS NOT NULL AND ISNULL(fd_update_by) AND ISNULL(decline_by)";
		$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 2";
		$vacation_data = mysql_query($vacation);
	}//end if
	
	// HR Final
	if($query == 'hrfinal'){
		//$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND hr_update_by IS NOT NULL AND fd_update_by IS NOT NULL AND ISNULL(hr_final_update_by) AND ISNULL(decline_by)";
		$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 3";
		$vacation_data = mysql_query($vacation);
	}//end if
	
	// Visa
	if($query == 'visa'){
		//$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND hr_final_update_by IS NOT NULL AND tcode_vacation NOT IN (SELECT tcode FROM process_visa) AND ISNULL(decline_by)";
		$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 4";
		$vacation_data = mysql_query($vacation);
	}//end if
	
	// Ticket
	if($query == 'ticket'){
		//$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND hr_final_update_by IS NOT NULL AND tcode_vacation IN (SELECT tcode FROM process_visa) AND tcode_vacation NOT IN (SELECT tcode FROM process_ticket) AND ISNULL(decline_by)";
		$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 5";
		$vacation_data = mysql_query($vacation);
	}//end if
	
	// Clearance
	if($query == 'clearance'){
		//$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND hr_final_update_by IS NOT NULL AND tcode_vacation IN (SELECT tcode FROM process_visa) AND tcode_vacation IN (SELECT tcode FROM process_ticket) AND tcode_vacation NOT IN (SELECT tcode FROM process_clearance) AND ISNULL(decline_by)";
		$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 6";
		$vacation_data = mysql_query($vacation);
	}//end if
	
	// Muqeem
	if($query == 'muqeem'){
		//$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND hr_final_update_by IS NOT NULL AND tcode_vacation IN (SELECT tcode FROM process_visa) AND tcode_vacation IN (SELECT tcode FROM process_ticket) AND tcode_vacation NOT IN (SELECT tcode FROM process_close) AND tcode_vacation IN (SELECT tcode FROM process_clearance) AND ISNULL(decline_by)";
		$vacation = "SELECT * FROM vacation_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 7";
		$vacation_data = mysql_query($vacation);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$vacation = "SELECT * FROM request_closed AS pc INNER JOIN vacation_request_info AS vr ON pc.tcode = vr.tcode_vacation AND pc.tcode = '$tcodeid' AND vr.tcode_vacation = '$tcodeid' ";
		$vacation_data = mysql_query($vacation);
	}//end if
	
	// Decline
	if($query == 'declined'){
		$vacation = "SELECT * FROM request_declined AS pd INNER JOIN vacation_request_info AS vr ON pd.tcode = vr.tcode_vacation AND pd.tcode = '$tcodeid' AND vr.tcode_vacation = '$tcodeid' ";
		$vacation_data = mysql_query($vacation);
	}//end if

	// TCODE
	@$tcode = mysql_real_escape_string(mysql_result($vacation_data,0,"tcode_vacation"));
	
	//Employee ID
	@$employeeID = mysql_real_escape_string(mysql_result($vacation_data,0,"employee_id_details"));
	
	//Last vacation
	@$last_vacation_date = mysql_real_escape_string(mysql_result($vacation_data,0,"last_vacation_date"));
	@$date_joined_last_vacation = mysql_real_escape_string(mysql_result($vacation_data,0,"date_joined_last_vacation"));
	@$days_of_last_vacation = mysql_real_escape_string(mysql_result($vacation_data,0,"days_of_last_vacation"));
	@$date_joined_summary = mysql_real_escape_string(mysql_result($vacation_data,0,"date_joined_summary"));
	
	// Encoder Details
	@$encoder_id = mysql_real_escape_string(mysql_result($vacation_data,0,"created_by"));
	@$encoder_created = mysql_real_escape_string(mysql_result($vacation_data,0,"date_created"));
	
	// Name of the encoder
	$encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$encoder_id."' ";
	$encoder_data = mysql_query($encoder);
	@$encoder_name = mysql_result($encoder_data,0,"fullname");
	
	@$employee_leave_type = mysql_real_escape_string(mysql_result($vacation_data,0,"type_of_leave"));
	@$employee_number_of_days = mysql_real_escape_string(mysql_result($vacation_data,0,"number_of_days"));
	
	// Function to compute the elapsed day between the Created date and the Current date
	$elapsedDays = elapsed_days($encoder_created); 
	$days_between = $elapsedDays['days_between'];
	// Function to compute the elapsed day between the Created date and the Current date
	
	@$expected_departure_from_date = mysql_real_escape_string(mysql_result($vacation_data,0,"expected_departure_from_date"));
	@$expected_departure_to_date = mysql_real_escape_string(mysql_result($vacation_data,0,"expected_departure_to_date"));
	@$who_will_pay_visa_id = mysql_real_escape_string(mysql_result($vacation_data,0,"pay_visa"));
	@$reason_for_vacation = mysql_real_escape_string(mysql_result($vacation_data,0,"reason_for_vacation"));
	
	@$hr_update_created =  mysql_real_escape_string(mysql_result($vacation_data,0,"hr_update_created"));
	@$hr_update_days =  mysql_real_escape_string(mysql_result($vacation_data,0,"hr_update_days"));
	
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
	
	// Employee Personal Details
	$employee_info = "SELECT * FROM employee_details WHERE id_number = '".$employeeID."' ";
	$employee_info_data = mysql_query($employee_info);
	@$employee_id = mysql_real_escape_string(mysql_result($employee_info_data,0,"id_number"));
	@$employee_name = mysql_real_escape_string(mysql_result($employee_info_data,0,"fullname"));
	@$employee_pname = mysql_real_escape_string(mysql_result($employee_info_data,0,"project_name"));
	
	@$employee_position = mysql_real_escape_string(mysql_result($employee_info_data,0,"position"));
	@$employee_info_iqama_number = mysql_result($employee_info_data,0,"iqama_number");
	@$employee_info_contract_g_date_employed = mysql_result($employee_info_data,0,"contract_g_date_employed");
	@$employee_info_contract_years = mysql_result($employee_info_data,0,"contract_years");
	
	// This is for the replacement details
	@$replacement_id_number = mysql_real_escape_string(mysql_result($vacation_data,0,"employee_id_replacement"));
	$replacement = "SELECT id_number, fullname, project_name, position FROM employee_details WHERE id_number = '".$replacement_id_number."' ";
	$replacement_data = mysql_query($replacement);
	@$replacement_name = mysql_real_escape_string(mysql_result($replacement_data,0,"fullname"));
	@$replacement_pname = mysql_real_escape_string(mysql_result($replacement_data,0,"project_name"));
	@$replacement_posname = mysql_real_escape_string(mysql_result($replacement_data,0,"position"));
	
	/* ======================================================================= */
	
	// HR First Details
	@$hr_update_by = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_update_by"));
	@$hr_first_file_path = mysql_real_escape_string(mysql_result($vacation_data,0,"vr_request_file_initial"));
	@$hr_first_explode = explode("|",separateFilePathOnMultipleFolders($hr_first_file_path));
	@$hr_first_filename = $hr_first_explode[0];
	@$hr_first_notes = mysql_real_escape_string(mysql_result($vacation_data,0,"notes_hr"));
	
	// Name for the HR FIRST update encoder
	$hr_first = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_update_by."' ";
	$hr_first_data = mysql_query($hr_first);
	@$hr_first_name =  mysql_real_escape_string(mysql_result($hr_first_data,0,"fullname"));
	
	// This is for the Total Salary on FD TABS
	$fd_Total_Salary = "SELECT id_number, fullname, total_salary FROM employee_details WHERE id_number = '".$employeeID."' ";
	$fd_Total_Salary_data = mysql_query($fd_Total_Salary);
	@$fd_Total_Salary_Value = number_format(mysql_real_escape_string(mysql_result($fd_Total_Salary_data,0,"total_salary")), 2);
	// This is for the Total Salary on FD TABS
	
	/* ======================================================================= */
	
	// FD Details
	@$fd_update_by = mysql_real_escape_string(mysql_result($vacation_data,0,"fd_update_by"));
	@$fd_update_created = mysql_real_escape_string(mysql_result($vacation_data,0,"fd_update_created"));
	@$fd_update_days = mysql_real_escape_string(mysql_result($vacation_data,0,"fd_update_days"));
	@$fd_update_file_path = mysql_real_escape_string(mysql_result($vacation_data,0,"fd_file_path"));
	@$fd_explode = explode("|",separateFilePathOnMultipleFolders($fd_update_file_path));
	@$fd_filename = $fd_explode[0];
	@$fd_notes = mysql_real_escape_string(mysql_result($vacation_data,0,"notes_fd"));
	
	@$fd_total_deductions = number_format(mysql_real_escape_string(mysql_result($vacation_data,0,"total_deductions")),2);
	@$fd_credit = number_format(mysql_real_escape_string(mysql_result($vacation_data,0,"credit_fd")),2);
	
	// Name for the FD update encoder
	$fd = "SELECT id_number, fullname, total_salary FROM employee_details WHERE id_number = '".$employeeID."' ";
	$fd_data = mysql_query($fd);
	@$fd_name = mysql_real_escape_string(mysql_result($fd_data,0,"fullname"));
	@$fd_total_salary =  number_format(mysql_real_escape_string(mysql_result($fd_data,0,"total_salary")),2);
	
	/* ======================================================================= */
	
	// HR Final
	@$hr_final_update_by = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_final_update_by"));
	@$hr_final_update_created = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_final_update_created"));
	@$hr_final_days = mysql_real_escape_string(mysql_result($vacation_data,0,"hr_final_days"));
	@$hr_final_notes = mysql_real_escape_string(mysql_result($vacation_data,0,"notes_hr_final"));
	
	@$hr_final_update_file_path = mysql_real_escape_string(mysql_result($vacation_data,0,"file_hr_final"));
	@$hr_final_explode = explode("|",separateFilePathOnMultipleFolders($hr_final_update_file_path));
	@$hr_final_filename = $hr_final_explode[0];
	
	// Name for the HR Final update encoder
	$hr_final = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_final_update_by."' ";
	$hr_final_data = mysql_query($hr_final);
	@$hr_final_name = mysql_result($hr_final_data,0,"fullname");
	
	/* ======================================================================= */
	
	// Visa
	$visa = "SELECT * FROM process_visa WHERE tcode = '".$tcodeid."' ";
	$visa_data = mysql_query($visa);
	@$visa_created_by = mysql_real_escape_string(mysql_result($visa_data,0,"created_by"));
	@$visa_date_created = mysql_real_escape_string(mysql_result($visa_data,0,"date_created"));
	@$visa_number = mysql_real_escape_string(mysql_result($visa_data,0,"visa_number"));
	@$visa_number_of_days = mysql_real_escape_string(mysql_result($visa_data,0,"number_of_days"));
	@$visa_exit_before_gregorian = mysql_real_escape_string(mysql_result($visa_data,0,"gregorian_date"));
	@$visa_exit_before_date_hijiri = mysql_real_escape_string(mysql_result($visa_data,0,"hijiri_date"));
	@$visa_return_before_gregorian = mysql_real_escape_string(mysql_result($visa_data,0,"gregorian_return_date"));
	@$visa_return_before_hijiri = mysql_real_escape_string(mysql_result($visa_data,0,"hijiri_return_date"));
	@$visa_elapsed_days = mysql_real_escape_string(mysql_result($visa_data,0,"elapsed_days"));
	@$visa_note = mysql_real_escape_string(mysql_result($visa_data,0,"note_visa"));
	
	@$visa_file_path = mysql_real_escape_string(mysql_result($visa_data,0,"files_path"));
	@$visa_explode = explode("|",separateFilePathOnMultipleFolders($visa_file_path));
	@$visa_filename = $visa_explode[0];
	
	// Name for the Visa update encoder
	$visa_name = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$visa_created_by."' ";
	$visa_name_data = mysql_query($visa_name);
	@$visa_fullname = mysql_real_escape_string(mysql_result($visa_name_data,0,"fullname"));
	
	/* ======================================================================= */
	
	// Ticket
	$ticket = "SELECT * FROM process_ticket WHERE tcode = '".$tcodeid."' ";
	$ticket_data = mysql_query($ticket);
	@$ticket_created_by = mysql_real_escape_string(mysql_result($visa_data,0,"created_by"));
	@$ticket_date_created = mysql_real_escape_string(mysql_result($ticket_data,0,"date_created"));
	@$ticket_from = mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_from"));
	@$ticket_to = mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_to"));
	@$departure_date = mysql_real_escape_string(mysql_result($ticket_data,0,"departure_date"));
	@$return_date = mysql_real_escape_string(mysql_result($ticket_data,0,"return_date"));
	@$ticket_class = mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_class"));
	@$ticket_price = number_format(mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_price"),2));
	@$ticket_number = mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_number"));
	@$name_airlines =mysql_real_escape_string( mysql_result($ticket_data,0,"name_airlines"));
	@$ticket_return_date = mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_return_date"));
	@$elapsed_days = mysql_real_escape_string(mysql_result($ticket_data,0,"elapsed_days"));
	@$note_ticket = mysql_real_escape_string(mysql_result($ticket_data,0,"note_ticket"));
	
	@$ticket_file_path = mysql_real_escape_string(mysql_result($ticket_data,0,"files_path_ticket"));
	@$ticket_explode = explode("|",separateFilePathOnMultipleFolders($ticket_file_path));
	@$ticket_filename = $ticket_explode[0];

	// Name for the Ticket update encoder
	$ticket_name = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$ticket_created_by."' ";
	$ticket_name_data = mysql_query($ticket_name);
	@$ticket_fullname = mysql_real_escape_string(mysql_result($ticket_name_data,0,"fullname"));
	
	// Airport From
	$airport_from = "SELECT * FROM airport_list WHERE airport_code = '".$ticket_from."' ";
	$airport_from_data = mysql_query($airport_from);
	@$airport_from_name = $ticket_from." - ".mysql_real_escape_string(mysql_result($airport_from_data,0,"airport_name"));
	
	// Airport To
	$airport_to = "SELECT * FROM airport_list WHERE airport_code = '".$ticket_to."' ";
	$airport_to_data = mysql_query($airport_to);
	@$airport_to_name = $ticket_to." - ".mysql_real_escape_string(mysql_result($airport_to_data,0,"airport_name"));
	
	// Ticket Class
	$class_ticket = "SELECT * FROM ticket_class WHERE id = '".$ticket_class."' ";
	$class_ticket_data = mysql_query($class_ticket);
	@$class_ticket_name = mysql_real_escape_string(mysql_result($class_ticket_data,0,"ticket_class"));
	
	/* ======================================================================= */
	
	// Clearance
	$clearance = "SELECT * FROM process_clearance WHERE tcode = '".$tcodeid."' ";
	$clearance_data = mysql_query($clearance);
	@$clearance_created_by = mysql_real_escape_string(mysql_result($clearance_data,0,"created_by"));
	@$clearance_date_created = mysql_real_escape_string(mysql_result($clearance_data,0,"date_created"));
	@$clearance_benefit = mysql_real_escape_string(mysql_result($clearance_data,0,"benefit"));
	@$clearance_ticket = mysql_real_escape_string(mysql_result($clearance_data,0,"ticket"));
	@$clearance_elapsed_days = mysql_real_escape_string(mysql_result($clearance_data,0,"elapsed_days"));
	@$clearance_clearance_process_notes = mysql_real_escape_string(mysql_result($clearance_data,0,"clearance_process_notes"));
	
	@$clearance_files_path_clearance = mysql_real_escape_string(mysql_result($clearance_data,0,"files_path_clearance"));
	@$clearance_explode = explode("|",separateFilePathOnMultipleFolders($clearance_files_path_clearance));
	@$clearance_filename = $clearance_explode[0];
	
	// Name of the Clearance update encoder
	$clearance_name = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$clearance_created_by."' ";
	$clearance_name_data = mysql_query($clearance_name);
	@$clearance_fullname = mysql_real_escape_string(mysql_result($clearance_name_data,0,"fullname"));
	
	
	/* ======================================================================= */
	
	// Muqeem
	$muqeem = "SELECT * FROM process_close WHERE tcode = '".$tcodeid."' ";
	$muqeem_data = mysql_query($muqeem);
	@$muqeem_created_by = mysql_real_escape_string(mysql_result($muqeem_data,0,"created_by"));
	@$muqeem_date_created = mysql_real_escape_string(mysql_result($muqeem_data,0,"date_created"));
	@$muqeem_out_ksa_g = mysql_real_escape_string(mysql_result($muqeem_data,0,"gregorian_out_of_ksa_date"));
	@$muqeem_out_ksa_h = mysql_real_escape_string(mysql_result($muqeem_data,0,"hijiri_out_of_ksa_date"));
	@$muqeem_elapsed_days = mysql_real_escape_string(mysql_result($muqeem_data,0,"elapsed_days"));
	@$muqeem_close_notes = mysql_real_escape_string(mysql_result($muqeem_data,0,"close_notes"));
	
	// Name of the Muqeem update encoder
	$closed_name = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$muqeem_created_by."' ";
	$closed_name_data = mysql_query($closed_name);
	@$closed_name_fullname = mysql_real_escape_string(mysql_result($closed_name_data,0,"fullname"));
	
	/* ======================================================================= */
	
	
	return array(
			'tcode' => $tcode,
			'encoder_id' => $encoder_id,
			'encoder_created' => $encoder_created,
			'encoder_name' => $encoder_name,
			'employee_id' => $employee_id,
			'employee_name' => $employee_name,
			'employee_pname' => $employee_pname,
			'employee_position' => $employee_position,
			'employee_leave_type' => $employee_leave_type,
			'employee_number_of_days' => $employee_number_of_days,
			'expected_departure_from_date' => $expected_departure_from_date,
			'expected_departure_to_date' => $expected_departure_to_date,
			'elapsed_days' => $days_between,
			'who_will_pay_visa' => $who_will_pay_visa,
			'replacement_requirements' => $replacement_requirements,
			'vacation_request_file_path' => $vacation_request_file_path,
			'vacation_request_file' => $vacation_request_file,
			'employee_iqama_number' => $employee_info_iqama_number,
			'employee_info_contract_g_date_employed' => $employee_info_contract_g_date_employed,
			'employee_info_contract_years' => $employee_info_contract_years,
			'reason_for_vacation' => $reason_for_vacation,
			
			'replacement_requirements_id' => $replacement_requirements_id,
			'replacement_id_number' => $replacement_id_number,
			'replacement_name' => $replacement_name,
			'replacement_pname' => $replacement_pname,
			'replacement_posname' => $replacement_posname,
			
			'last_vacation_date' => $last_vacation_date,
			'date_joined_last_vacation' => $date_joined_last_vacation,
			'days_of_last_vacation' => $days_of_last_vacation,
			
			//HR Details
			'hr_update_by' => $hr_update_by,
			'hr_first_name' => $hr_first_name,
			'hr_update_created' => $hr_update_created,
			'hr_update_days' => $hr_update_days,
			'hr_first_file_path' => $hr_first_file_path,
			'hr_first_filename' => $hr_first_filename,
			'hr_first_notes' => $hr_first_notes,
			'hr_first_notes_edit' => $hr_first_notes,
			
			'total_salary_fd_tab' => $fd_Total_Salary_Value, 
			
			// FD Details
			'fd_update_by' => $fd_update_by,
			'fd_name' => $fd_name,
			'fd_update_created' => $fd_update_created,
			'fd_update_days' => $fd_update_days,
			'fd_update_file_path' => $fd_update_file_path,
			'fd_filename' => $fd_filename,
			'fd_notes' => $fd_notes,
			
			'fd_total_salary' => $fd_total_salary,
			'fd_total_deductions' => $fd_total_deductions,
			'fd_credit' => $fd_credit,
			
			// HR Final
			'hr_final_update_by' => $hr_final_update_by,
			'hr_final_name' => $hr_final_name,
			'hr_final_update_created' => $hr_final_update_created,
			'hr_final_days' => $hr_final_days,
			'hr_final_notes' => $hr_final_notes,
			'hr_final_update_file_path' => $hr_final_update_file_path,
			'hr_final_filename' => $hr_final_filename,
			
			// Visa
			'visa_created_by' => $visa_created_by,
			'visa_fullname' => $visa_fullname,
			'visa_date_created' => $visa_date_created,
			'visa_number' => $visa_number,
			'visa_number_of_days' => $visa_number_of_days,
			'visa_exit_before_gregorian' => $visa_exit_before_gregorian,
			'visa_exit_before_date_hijiri' => $visa_exit_before_date_hijiri,
			'visa_return_before_gregorian' => $visa_return_before_gregorian,
			'visa_return_before_hijiri' => $visa_return_before_hijiri,
			'visa_elapsed_days' => $visa_elapsed_days,
			'visa_note' => $visa_note,
			'visa_file_path' => $visa_file_path,
			'visa_filename' => $visa_filename,
			
			// Ticket
			'ticket_created_by' => $ticket_created_by,
			'ticket_fullname' => $ticket_fullname,
			'ticket_date_created' => $ticket_date_created,
			'ticket_from' => $airport_from_name,
			'ticket_to' => $airport_to_name,
			'departure_date' => $departure_date,
			'return_date' => $return_date,
			'ticket_class' => $class_ticket_name,
			'ticket_price' => $ticket_price,
			'ticket_number' => $ticket_number,
			'name_airlines' => $name_airlines,
			'ticket_return_date' => $ticket_return_date,
// 			'elapsed_days' => $elapsed_days,
			'ticket_file_path' => $ticket_file_path,
			'ticket_filename' => $ticket_filename,
			'note_ticket' => $note_ticket,
			
			'ticket_from_code' => $ticket_from,
			'ticket_to_code' => $ticket_to,
			'ticket_class_id' => $ticket_class,
			
			// Clearance
			'clearance_created_by' => $clearance_created_by,
			'clearance_date_created' => $clearance_date_created,
			'clearance_benefit' => $clearance_benefit,
			'clearance_ticket' => $clearance_ticket,
			'clearance_elapsed_days' => $clearance_elapsed_days,
			'clearance_process_notes' => $clearance_clearance_process_notes,
			
			'clearance_files_path_clearance' => $clearance_files_path_clearance,
			'clearance_filename' => $clearance_filename,
			
			'clearance_fullname' => $clearance_fullname,
			
			// Muqeem
			'muqeem_created_by' => $muqeem_created_by,
			'muqeem_fullname' => $closed_name_fullname,
			'muqeem_date_created' => $muqeem_date_created,
			'muqeem_out_ksa_g' => $muqeem_out_ksa_g,
			'muqeem_out_ksa_h' => $muqeem_out_ksa_h,
			'muqeem_elapsed_days' => $muqeem_elapsed_days,
			'muqeem_close_notes' => $muqeem_close_notes,
			
			'test_result' => $vacation
			
	);
}//end	

//$result = search($_POST['employee_id']);
$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>