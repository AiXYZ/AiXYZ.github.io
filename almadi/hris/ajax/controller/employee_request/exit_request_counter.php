<?php
ob_start();
session_start();

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

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search(){
	
// 	$department = getDeptAccess($_SESSION["login_user"]);
// 	$typeDepartment = $department['hr_department']; // <-- 1 - HR, 2 - FD, 3 - All Dept, 4 - Project Site, 5 - PM, 6 - AM
	
	@$projects = getProjects($_SESSION["login_user"]);
	
	// =========================================================================================== \\
	
	// For exit HR First
	$exitRequest_HR_First = "SELECT eri.employee_id_details, eri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM exit_request_info as eri JOIN employee_details as ed ON (ed.id_number = eri.employee_id_details) where ed.employment_status = 1 and eri.request_status = 1 AND ed.project_id IN ($projects)";
	$exitRequest_HR_First_data = mysql_query($exitRequest_HR_First);
	$exitRequest_HR_First_row = mysql_num_rows($exitRequest_HR_First_data);
	$exitRequest_HR_First_ctr = 0;
	$er_hr_first_total = 0;
	while ($exitRequest_HR_First_ctr < $exitRequest_HR_First_row){
		
			@$er_hr_first_total++;
	
		$exitRequest_HR_First_ctr++;
	}// end while
	// For exit HR First
	
	// For exit FD
	$exitRequest_FD = "SELECT eri.employee_id_details, eri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM exit_request_info as eri JOIN employee_details as ed ON (ed.id_number = eri.employee_id_details) where ed.employment_status = 1 and eri.request_status = 2 AND ed.project_id IN ($projects)";
	$exitRequest_FD_data = mysql_query($exitRequest_FD);
	$exitRequest_FD_row = mysql_num_rows($exitRequest_FD_data);
	$exitRequest_FD_ctr = 0;
	$er_fd_total = 0;
	while ($exitRequest_FD_ctr < $exitRequest_FD_row){
	
		@$er_fd_total++;
	
		$exitRequest_FD_ctr++;
	}//end while
	// For exit FD
	
	// For exit HR Final
	$exitRequest_HR_Final = "SELECT eri.employee_id_details, eri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM exit_request_info as eri JOIN employee_details as ed ON (ed.id_number = eri.employee_id_details) where ed.employment_status = 1 and eri.request_status = 3 AND ed.project_id IN ($projects)";
	$exitRequest_HR_Final_data = mysql_query($exitRequest_HR_Final);
	$exitRequest_HR_Final_row = mysql_num_rows($exitRequest_HR_Final_data);
	$exitRequest_HR_Final_ctr = 0;
	$er_hr_final_total = 0;
	while ($exitRequest_HR_Final_ctr < $exitRequest_HR_Final_row){
	
		@$er_hr_final_total++;
	
		$exitRequest_HR_Final_ctr++;
	}//end while
	// For exit HR Final
	
	// For exit Visa
	$exitRequest_Visa = "SELECT eri.employee_id_details, eri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM exit_request_info as eri JOIN employee_details as ed ON (ed.id_number = eri.employee_id_details) where ed.employment_status = 1 and eri.request_status = 4 AND ed.project_id IN ($projects)";
	$exitRequest_Visa_data = mysql_query($exitRequest_Visa);
	$exitRequest_Visa_row = mysql_num_rows($exitRequest_Visa_data);
	$exitRequest_Visa_ctr = 0;
	$er_visa_total = 0;
	while ($exitRequest_Visa_ctr < $exitRequest_Visa_row){
	
			@$er_visa_total++;
	
		$exitRequest_Visa_ctr++;
	}// end while
	// For exit Visa
	
	// For exit Ticket
	$exitRequest_Ticket = "SELECT eri.employee_id_details, eri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM exit_request_info as eri JOIN employee_details as ed ON (ed.id_number = eri.employee_id_details) where ed.employment_status = 1 and eri.request_status = 5 AND ed.project_id IN ($projects)";
	$exitRequest_Ticket_data = mysql_query($exitRequest_Ticket);
	$exitRequest_Ticket_row = mysql_num_rows($exitRequest_Ticket_data);
	$exitRequest_Ticket_ctr = 0;
	$er_ticket_total = 0;
	while ($exitRequest_Ticket_ctr < $exitRequest_Ticket_row){
	
			@$er_ticket_total++;
	
		$exitRequest_Ticket_ctr++;
	}// end while
	// For exit Ticket
	
	// For exit Clearance
	$exitRequest_Clearance = "SELECT eri.employee_id_details, eri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM exit_request_info as eri JOIN employee_details as ed ON (ed.id_number = eri.employee_id_details) where ed.employment_status = 1 and eri.request_status = 6 AND ed.project_id IN ($projects)";
	$exitRequest_Clearance_data = mysql_query($exitRequest_Clearance);
	$exitRequest_Clearance_row = mysql_num_rows($exitRequest_Clearance_data);
	$exitRequest_Clearance_ctr = 0;
	$er_clearance_total = 0;
	while ($exitRequest_Clearance_ctr < $exitRequest_Clearance_row){
	
			@$er_clearance_total++;
	
		$exitRequest_Clearance_ctr++;
	}// end while
	// For exit Clearance
	
	// For exit Muqeem
	$exitRequest_Muqeem = "SELECT eri.employee_id_details, eri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM exit_request_info as eri JOIN employee_details as ed ON (ed.id_number = eri.employee_id_details) where ed.employment_status = 1 and eri.request_status = 7 AND ed.project_id IN ($projects)";
	$exitRequest_Muqeem_data = mysql_query($exitRequest_Muqeem);
	$exitRequest_Muqeem_row = mysql_num_rows($exitRequest_Muqeem_data);
	$exitRequest_Muqeem_ctr = 0;
	$er_muqeem_total = 0;
	while ($exitRequest_Muqeem_ctr < $exitRequest_Muqeem_row){
	
			@$er_muqeem_total++;
	
		$exitRequest_Muqeem_ctr++;
	}// end while
	// For exit Muqeem
	
	// For exit Closed
	$exitRequest_Closed = "SELECT eri.employee_id_details, eri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM exit_request_info as eri JOIN employee_details as ed ON (ed.id_number = eri.employee_id_details) where ed.employment_status = 1 and eri.request_status = 8 AND ed.project_id IN ($projects)";
	$exitRequest_Closed_data = mysql_query($exitRequest_Closed);
	$exitRequest_Closed_row = mysql_num_rows($exitRequest_Closed_data);
	$exitRequest_Closed_ctr = 0;
	$er_closed_total = 0;
	while ($exitRequest_Closed_ctr < $exitRequest_Closed_row){
	
		@$er_closed_total++;
	
		$exitRequest_Closed_ctr++;
	}// end while
	// For exit Closed
	
	// For exit Decline
	$exitRequest_Declined = "SELECT eri.employee_id_details, eri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM exit_request_info as eri JOIN employee_details as ed ON (ed.id_number = eri.employee_id_details) where ed.employment_status = 1 and eri.request_status = 9 AND ed.project_id IN ($projects)";
	$exitRequest_Declined_data = mysql_query($exitRequest_Declined);
	$exitRequest_Declined_row = mysql_num_rows($exitRequest_Declined_data);
	$exitRequest_Declined_ctr = 0;
	$er_declined_total = 0;
	while ($exitRequest_Declined_ctr < $exitRequest_Declined_row){
	
		@$er_declined_total++;
	
		$exitRequest_Declined_ctr++;
	}// end while
	// For exit Decline
	
	// This is for the total of the exit request
	$ER_Grand_Total = $er_hr_first_total + $er_fd_total + $er_hr_final_total + $er_visa_total + $er_ticket_total + $er_clearance_total + $er_muqeem_total;
	
	// =========================================================================================== \\
	
	return array(
			'er_hr_first_total' => '('.$er_hr_first_total.')',
			'er_fd_total' => '('.$er_fd_total.')',
			'er_hr_final_total' => '('.$er_hr_final_total.')',
			'er_visa_total' => '('.$er_visa_total.')',
			'er_ticket_total' => '('.$er_ticket_total.')',
			'er_clearance_total' => '('.$er_clearance_total.')',
			'er_muqeem_total' => '('.$er_muqeem_total.')',
			'er_closed_total' => '('.$er_closed_total.')',
			'er_declined_total' => '('.$er_declined_total.')',
			'er_grand_total' => '('.$ER_Grand_Total.')'
	);// end array
	
}// end function

$result = search();
echo json_encode($result);
?>