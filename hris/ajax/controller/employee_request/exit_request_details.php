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
		$request = "SELECT * FROM exit_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 1";
		$request_data = mysql_query($request);
	}//end if
	
	// FD
	if($query == 'fd'){
		$request = "SELECT * FROM exit_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 2";
		$request_data = mysql_query($request);
	}//end if
	
	// HR Final
	if($query == 'hrfinal'){
		$request = "SELECT * FROM exit_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 3";
		$request_data = mysql_query($request);
	}//end if
	
	// Visa
	if($query == 'visa'){
		$request = "SELECT * FROM exit_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 4";
		$request_data = mysql_query($request);
	}//end if
	
	// Ticket
	if($query == 'ticket'){
		$request = "SELECT * FROM exit_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 5";
		$request_data = mysql_query($request);
	}//end if
	
	// Clearance
	if($query == 'clearance'){
		$request = "SELECT * FROM exit_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 6";
		$request_data = mysql_query($request);
	}//end if
	
	// Muqeem
	if($query == 'muqeem'){
		$request = "SELECT * FROM exit_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 7";
		$request_data = mysql_query($request);
	}//end if
	
	// Closed
	if($query == 'closed'){
		$request = "SELECT * FROM exit_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 8";
		$request_data = mysql_query($request);
	}//end if
	
	// Declined
	if($query == 'declined'){
		$request = "SELECT * FROM exit_request_info WHERE tcode_vacation = '$tcodeid' AND request_status = 9";
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
	@$employee_iqama_number = mysql_real_escape_string(mysql_result($employee_data,0,"iqama_number"));
	@$employee_total_salary = number_format(mysql_real_escape_string(mysql_result($employee_data,0,"total_salary")), 2);
	
	@$employee_contract_date = mysql_real_escape_string(mysql_result($employee_data,0,"contract_g_date_employed"));
	@$employee_contract_years = mysql_real_escape_string(mysql_result($employee_data,0,"contract_years"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	@$request_leave_type = mysql_real_escape_string(mysql_result($request_data,0,"type_of_leave"));
	@$request_number_of_days = mysql_real_escape_string(mysql_result($request_data,0,"number_of_days"));
	
	@$request_expected_departure_from_date = mysql_real_escape_string(mysql_result($request_data,0,"expected_departure_from_date"));
	@$request_expected_departure_to_date = mysql_real_escape_string(mysql_result($request_data,0,"expected_departure_to_date"));
	@$who_will_pay_visa_id = mysql_real_escape_string(mysql_result($request_data,0,"pay_visa"));
	
	// Name for the Who will pay visa
	if($who_will_pay_visa_id == 1){
		$request_who_will_pay_visa = 'Employee';
	}else {
		$request_who_will_pay_visa = 'Company';
	}// end if else
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */	
	
	@$replacement_requirements_id = mysql_real_escape_string(mysql_result($request_data,0,"replacement_requirements"));
	
	if($replacement_requirements_id == 'nr'){
		$replacement_requirements = 'NR - Need for Replacement';
	}else if($replacement_requirements_id == 'nnr'){
		$replacement_requirements = 'NNR - No Need for Replacement';
	}else {
		$replacement_requirements = 'AR - Already have Replacement';
	}// end if else
	
	@$request_file_path = mysql_real_escape_string(mysql_result($request_data,0,"vr_request_file"));
	@$request_explode = explode("|",separateFilePathOnMultipleFolders($request_file_path));
	@$request_file_name = $request_explode[0];
	
	@$request_notes = mysql_real_escape_string(mysql_result($request_data,0,"reason_for_vacation"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	@$request_employee_id_replacement = mysql_real_escape_string(mysql_result($request_data,0,"employee_id_replacement"));
	
	// Replacement name
	$replacement = "SELECT id_number, fullname, project_name, position FROM employee_details WHERE id_number = '".$request_employee_id_replacement."' ";
	$replacement_data = mysql_query($replacement);
	@$replacement_name = mysql_real_escape_string(mysql_result($replacement_data,0,"fullname"));
	@$replacement_pname = mysql_real_escape_string(mysql_result($replacement_data,0,"project_name"));
	@$replacement_position = mysql_real_escape_string(mysql_result($replacement_data,0,"position"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	@$last_vacation_date = mysql_real_escape_string(mysql_result($request_data,0,"last_vacation_date"));
	@$date_joined_last_vacation = mysql_real_escape_string(mysql_result($request_data,0,"date_joined_last_vacation"));
	@$date_days_of_last_vacation = mysql_real_escape_string(mysql_result($request_data,0,"days_of_last_vacation"));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR First
	@$request_hr_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_by"));
	@$request_hr_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_created"));
	@$request_hr_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_update_days"));
	@$request_hr_notes = mysql_real_escape_string(mysql_result($request_data,0,"notes_hr"));
	
	@$exit_hrfirst_file_path =  mysql_real_escape_string(mysql_result($request_data,0,"vr_request_file_initial"));
	@$exit_hrfirst_request_explode = explode("|",separateFilePathOnMultipleFolders($exit_hrfirst_file_path));
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */

	// FD
	@$request_fd_update_by = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_by"));
	@$request_fd_update_created = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_created"));
	@$request_fd_update_days = mysql_real_escape_string(mysql_result($request_data,0,"fd_update_days"));
	@$request_fd_notes = mysql_real_escape_string(mysql_result($request_data,0,"notes_fd"));
	
	@$request_fd_total_deductions = mysql_real_escape_string(mysql_result($request_data,0,"total_deductions"));
	@$request_fd_credit = mysql_real_escape_string(mysql_result($request_data,0,"credit_fd"));
	
	// FD Encoder name
	$fd_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$request_fd_update_by."' ";
	$fd_encoder_data = mysql_query($fd_encoder);
	@$fd_encoder_name = mysql_result($fd_encoder_data,0,"fullname");
	
	@$exit_fd_file_path = mysql_real_escape_string(mysql_result($request_data,0,"fd_file_path"));
	@$exit_fd_explode = explode("|",separateFilePathOnMultipleFolders($exit_fd_file_path));
	@$exit_fd_file_name = $exit_fd_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// HR Final
	@$hr_final_update_by = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_by"));
	@$hr_final_update_created = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_update_created"));
	@$hr_final_update_days = mysql_real_escape_string(mysql_result($request_data,0,"hr_final_days"));
	@$hr_final_notes = mysql_real_escape_string(mysql_result($request_data,0,"notes_hr_final"));
	
	// HR Final Encoder name
	$hrfinal_encoder = "SELECT id_number, fullname FROM employee_details WHERE id_number = '".$hr_final_update_by."' ";
	$hrfinal_encoder_data = mysql_query($hrfinal_encoder);
	@$hrfinal_encoder_name = mysql_result($hrfinal_encoder_data,0,"fullname");
	
	@$exit_hr_final_file_path = mysql_real_escape_string(mysql_result($request_data,0,"file_hr_final"));
	@$exit_hr_final_explode = explode("|",separateFilePathOnMultipleFolders($exit_hr_final_file_path));
	@$exit_hr_final_file_name = $exit_hr_final_explode[0];
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
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
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
	// Ticket
	$ticket = "SELECT * FROM process_ticket WHERE tcode = '".$tcodeid."' ";
	$ticket_data = mysql_query($ticket);
	@$ticket_created_by = mysql_real_escape_string(mysql_result($visa_data,0,"created_by"));
	@$ticket_date_created = mysql_real_escape_string(mysql_result($ticket_data,0,"date_created"));
	@$ticket_from = mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_from"));
	@$ticket_to = mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_to"));
	@$departure_date = mysql_real_escape_string(mysql_result($ticket_data,0,"departure_date"));
	@$ticket_class = mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_class"));
	@$ticket_price = number_format(mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_price")),2);
	@$ticket_number = mysql_real_escape_string(mysql_result($ticket_data,0,"ticket_number"));
	@$name_airlines =mysql_real_escape_string( mysql_result($ticket_data,0,"name_airlines"));
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
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
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
	
	/* ------------------------------------------------------------------------------------------------------------------------------- */
	
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
	
	// Attachment (Outside KSA)
	@$muqeem_outside_ksa_file_path = mysql_real_escape_string(mysql_result($muqeem_data,0,"files_path_closed"));
	@$muqeem_outside_ksa_explode = explode("|",separateFilePathOnMultipleFolders($muqeem_outside_ksa_file_path));
	@$muqeem_outside_ksa_filename = $muqeem_outside_ksa_explode[0];
	
	// Attachment (Iqama received)
	@$muqeem_iqama_received_file_path = mysql_real_escape_string(mysql_result($muqeem_data,0,"files_path_iqama"));
	@$muqeem_iqama_received_explode = explode("|",separateFilePathOnMultipleFolders($muqeem_iqama_received_file_path));
	@$muqeem_iqama_received_filename = $muqeem_iqama_received_explode[0];
	
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
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'request_leave_type' => $request_leave_type,
			'request_number_of_days' => $request_number_of_days,
			
			'request_expected_departure_from_date' => $request_expected_departure_from_date,
			'request_expected_departure_to_date' => $request_expected_departure_to_date,
			'request_who_will_pay_visa' => $request_who_will_pay_visa,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'replacement_requirements' => $replacement_requirements,
			'request_file_path' => $request_file_path,
			'request_file_name' => $request_file_name,
			'employee_iqama_number' => $employee_iqama_number,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'employee_contract_date' => $employee_contract_date,
			'employee_contract_years' => $employee_contract_years,
			
			'employee_total_salary' => $employee_total_salary,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'request_notes' => $request_notes,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'request_employee_id_replacement' => $request_employee_id_replacement,
			'replacement_name' => $replacement_name,
			'replacement_pname' => $replacement_pname,
			'replacement_position' => $replacement_position,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'last_vacation_date' => $last_vacation_date,
			'date_joined_last_vacation' => $date_joined_last_vacation,
			'date_days_of_last_vacation' => $date_days_of_last_vacation,
				
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// HR First
			'request_hr_update_by' => $request_hr_update_by,
			'request_hr_update_created' => $request_hr_update_created,
			'request_hr_update_days' => $request_hr_update_days,
			'request_hr_notes' => $request_hr_notes,
			'exit_hrfirst_file_path' => $exit_hrfirst_file_path,
			'exit_hrfirst_file_name' => $exit_hrfirst_request_explode,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// FD
			'request_fd_update_by' => $request_fd_update_by,
			'request_fd_encoder_name' => $fd_encoder_name,
			'request_fd_update_created' => $request_fd_update_created,
			'request_fd_update_days' => $request_fd_update_days,
			'request_fd_total_deductions' => $request_fd_total_deductions,
			'request_fd_credit' => $request_fd_credit,
			'exit_fd_file_path' => $exit_fd_file_path,
			'exit_fd_file_name' => $exit_fd_file_name,
			'request_fd_notes' => $request_fd_notes,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
				
			// HR Final
			'request_hr_final_update_by' => $hr_final_update_by,
			'request_hr_final_encoder_name' => $hrfinal_encoder_name,
			'request_hr_final_update_created' => $hr_final_update_created,
			'request_hr_final_update_days' => $hr_final_update_days,
			'exit_hr_final_file_path' => $exit_hr_final_file_path,
			'exit_hr_final_file_name' => $exit_hr_final_file_name,
			'hr_final_notes' => $hr_final_notes,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
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
				
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// Ticket
			'ticket_created_by' => $ticket_created_by,
			'ticket_fullname' => $ticket_fullname,
			'ticket_date_created' => $ticket_date_created,
			'ticket_from' => $airport_from_name,
			'ticket_to' => $airport_to_name,
			'departure_date' => $departure_date,
			'ticket_class' => $class_ticket_name,
			'ticket_price' => $ticket_price,
			'ticket_number' => $ticket_number,
			'name_airlines' => $name_airlines,
// 			'elapsed_days' => $elapsed_days,
			'ticket_file_path' => $ticket_file_path,
			'ticket_filename' => $ticket_filename,
			'note_ticket' => $note_ticket,
				
			'ticket_from_code' => $ticket_from,
			'ticket_to_code' => $ticket_to,
			'ticket_class_id' => $ticket_class,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			// Clearance
			'clearance_created_by' => $clearance_created_by,
			'clearance_date_created' => $clearance_date_created,
			'clearance_elapsed_days' => $clearance_elapsed_days,
			'clearance_process_notes' => $clearance_clearance_process_notes,
			
			'clearance_benefit' => $clearance_benefit,
			'clearance_ticket' => $clearance_ticket,
				
			'clearance_files_path' => $clearance_files_path_clearance,
			'clearance_filename' => $clearance_filename,
				
			'clearance_fullname' => $clearance_fullname,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
				
			// Muqeem
			'muqeem_created_by' => $muqeem_created_by,
			'muqeem_fullname' => $closed_name_fullname,
			'muqeem_date_created' => $muqeem_date_created,
			'muqeem_out_ksa_g' => $muqeem_out_ksa_g,
			'muqeem_out_ksa_h' => $muqeem_out_ksa_h,
			'muqeem_elapsed_days' => $muqeem_elapsed_days,
			'muqeem_close_notes' => $muqeem_close_notes,
			
			'muqeem_outside_ksa_file_path' => $muqeem_outside_ksa_file_path,
			'muqeem_outside_ksa_filename' => $muqeem_outside_ksa_filename,
			
			'muqeem_iqama_received_file_path' => $muqeem_iqama_received_file_path,
			'muqeem_iqama_received_filename' => $muqeem_iqama_received_filename,
			
			/* ------------------------------------------------------------------------------------------------------------------------------- */
			
			'test_result' => $tcode
	); // end array
	
}// end function

$result = search($_POST['tcode_id'], $_POST['query']);
echo json_encode($result);
?>