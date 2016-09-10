<?php
ob_start();
session_start();

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

function search(){
	
// 	$department = getDeptAccess($_SESSION["login_user"]);
// 	$typeDepartment = $department['hr_department']; // <-- 1 - HR, 2 - FD, 3 - All Dept, 4 - Project Site, 5 - PM, 6 - AM
	
	@$projects = getProjects($_SESSION["login_user"]);
	
	// =========================================================================================== \\
	
	// For Vacation HR First
	$vacationRequest_HR_First = "SELECT vri.employee_id_details, vri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM vacation_request_info as vri JOIN employee_details as ed ON (ed.id_number = vri.employee_id_details) where ed.employment_status = 1 and vri.request_status = 1 AND ed.project_id IN ($projects)";
	$vacationRequest_HR_First_data = mysql_query($vacationRequest_HR_First);
	$vacationRequest_HR_First_row = mysql_num_rows($vacationRequest_HR_First_data);
	$vacationRequest_HR_First_ctr = 0;
	$vr_hr_first_total = 0;
	while ($vacationRequest_HR_First_ctr < $vacationRequest_HR_First_row){
	
			@$vr_hr_first_total++;
	
		$vacationRequest_HR_First_ctr++;
	}// end while
	// For Vacation HR First
	
	// For Vacation FD
	$vacationRequest_FD = "SELECT vri.employee_id_details, vri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM vacation_request_info as vri JOIN employee_details as ed ON (ed.id_number = vri.employee_id_details) where ed.employment_status = 1 and vri.request_status = 2 AND ed.project_id IN ($projects)";
	$vacationRequest_FD_data = mysql_query($vacationRequest_FD);
	$vacationRequest_FD_row = mysql_num_rows($vacationRequest_FD_data);
	$vacationRequest_FD_ctr = 0;
	$vr_fd_total = 0;
	while ($vacationRequest_FD_ctr < $vacationRequest_FD_row){
		
			@$vr_fd_total++;
		
		$vacationRequest_FD_ctr++;
	}//end while
	// For Vacation FD
	
	// For Vacation HR Final
	$vacationRequest_HR_Final = "SELECT vri.employee_id_details, vri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM vacation_request_info as vri JOIN employee_details as ed ON (ed.id_number = vri.employee_id_details) where ed.employment_status = 1 and vri.request_status = 3 AND ed.project_id IN ($projects)";
	$vacationRequest_HR_Final_data = mysql_query($vacationRequest_HR_Final);
	$vacationRequest_HR_Final_row = mysql_num_rows($vacationRequest_HR_Final_data);
	$vacationRequest_HR_Final_ctr = 0;
	$vr_hr_final_total = 0;
	while ($vacationRequest_HR_Final_ctr < $vacationRequest_HR_Final_row){
			
			@$vr_hr_final_total++;
			
		$vacationRequest_HR_Final_ctr++;
	}//end while
	// For Vacation HR Final
	
	// For Vacation Visa
	$vacationRequest_Visa = "SELECT vri.employee_id_details, vri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM vacation_request_info as vri JOIN employee_details as ed ON (ed.id_number = vri.employee_id_details) where ed.employment_status = 1 and vri.request_status = 4 AND ed.project_id IN ($projects)";
	$vacationRequest_Visa_data = mysql_query($vacationRequest_Visa);
	$vacationRequest_Visa_row = mysql_num_rows($vacationRequest_Visa_data);
	$vacationRequest_Visa_ctr = 0;
	$vr_visa_total = 0;
	while ($vacationRequest_Visa_ctr < $vacationRequest_Visa_row){
		
			@$vr_visa_total++;
		
		$vacationRequest_Visa_ctr++;
	}// end while
	// For Vacation Visa
	
	// For Vacation Ticket
	$vacationRequest_Ticket = "SELECT vri.employee_id_details, vri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM vacation_request_info as vri JOIN employee_details as ed ON (ed.id_number = vri.employee_id_details) where ed.employment_status = 1 and vri.request_status = 5 AND ed.project_id IN ($projects)";
	$vacationRequest_Ticket_data = mysql_query($vacationRequest_Ticket);
	$vacationRequest_Ticket_row = mysql_num_rows($vacationRequest_Ticket_data);
	$vacationRequest_Ticket_ctr = 0;
	$vr_ticket_total = 0;
	while ($vacationRequest_Ticket_ctr < $vacationRequest_Ticket_row){
		
			@$vr_ticket_total++;
		
		$vacationRequest_Ticket_ctr++;
	}// end while
	// For Vacation Ticket
	
	// For Vacation Clearance
	$vacationRequest_Clearance = "SELECT vri.employee_id_details, vri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM vacation_request_info as vri JOIN employee_details as ed ON (ed.id_number = vri.employee_id_details) where ed.employment_status = 1 and vri.request_status = 6 AND ed.project_id IN ($projects)";
	$vacationRequest_Clearance_data = mysql_query($vacationRequest_Clearance);
	$vacationRequest_Clearance_row = mysql_num_rows($vacationRequest_Clearance_data);
	$vacationRequest_Clearance_ctr = 0;
	$vr_clearance_total = 0;
	while ($vacationRequest_Clearance_ctr < $vacationRequest_Clearance_row){
		
			@$vr_clearance_total++;
		
		$vacationRequest_Clearance_ctr++;
	}// end while
	// For Vacation Clearance
	
	// For Vacation Muqeem
	$vacationRequest_Muqeem = "SELECT vri.employee_id_details, vri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM vacation_request_info as vri JOIN employee_details as ed ON (ed.id_number = vri.employee_id_details) where ed.employment_status = 1 and vri.request_status = 7 AND ed.project_id IN ($projects)";
	$vacationRequest_Muqeem_data = mysql_query($vacationRequest_Muqeem);
	$vacationRequest_Muqeem_row = mysql_num_rows($vacationRequest_Muqeem_data);
	$vacationRequest_Muqeem_ctr = 0;
	$vr_muqeem_total = 0;
	while ($vacationRequest_Muqeem_ctr < $vacationRequest_Muqeem_row){
		
			@$vr_muqeem_total++;
		
		$vacationRequest_Muqeem_ctr++;
	}// end while
	// For Vacation Muqeem
	
	// For Vacation Closed
	$vacationRequest_Closed = "SELECT vri.employee_id_details, vri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM vacation_request_info as vri JOIN employee_details as ed ON (ed.id_number = vri.employee_id_details) where ed.employment_status = 1 and vri.request_status = 8 AND ed.project_id IN ($projects)";
	$vacationRequest_Closed_data = mysql_query($vacationRequest_Closed);
	$vacationRequest_Closed_row = mysql_num_rows($vacationRequest_Closed_data);
	$vacationRequest_Closed_ctr = 0;
	$vr_closed_total = 0;
	while ($vacationRequest_Closed_ctr < $vacationRequest_Closed_row){
		
			@$vr_closed_total++;
		
		$vacationRequest_Closed_ctr++;
	}// end while
	// For Vacation Closed
	
	// For Vacation Decline
	$vacationRequest_Declined = "SELECT vri.employee_id_details, vri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM vacation_request_info as vri JOIN employee_details as ed ON (ed.id_number = vri.employee_id_details) where ed.employment_status = 1 and vri.request_status = 9 AND ed.project_id IN ($projects)";
	$vacationRequest_Declined_data = mysql_query($vacationRequest_Declined);
	$vacationRequest_Declined_row = mysql_num_rows($vacationRequest_Declined_data);
	$vacationRequest_Declined_ctr = 0;
	$vr_declined_total = 0;
	while ($vacationRequest_Declined_ctr < $vacationRequest_Declined_row){
		
			@$vr_declined_total++;
		
		$vacationRequest_Declined_ctr++;
	}// end while
	// For Vacation Decline
	
	// =========================================================================================== \\
	
	$vacation_grand_total = $vr_hr_first_total + $vr_fd_total + $vr_hr_final_total + $vr_visa_total + $vr_ticket_total + $vr_clearance_total + $vr_muqeem_total;

	// =========================================================================================== \\
	
	return array(
			'vr_hr_first_total' => '('.$vr_hr_first_total.')',
			'vr_fd_total' => '('.$vr_fd_total.')',
			'vr_hr_final_total' => '('.$vr_hr_final_total.')',
			'vr_visa_total' => '('.$vr_visa_total.')',
			'vr_ticket_total' => '('.$vr_ticket_total.')',
			'vr_clearance_total' => '('.$vr_clearance_total.')',
			'vr_muqeem_total' => '('.$vr_muqeem_total.')',
			'vr_closed_total' => '('.$vr_closed_total.')',
			'vr_declined_total' => '( '.$vr_declined_total.')',
			'vr_grand_total' => '('.$vacation_grand_total.')'
	);// end array
	
}// end function

$result = search();
echo json_encode($result);
?>