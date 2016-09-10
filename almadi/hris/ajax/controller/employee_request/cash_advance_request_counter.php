<?php
ob_start();
session_start();

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - Employee Recevied
 * 4 - Closed
 * 5 - Declined
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
	
	/* ********************************************************************************************* */
	
	// HR First
	$hr_first = "SELECT car.employee_id_details, car.request_status, ed.project_id, ed.id_number, ed.employment_status FROM cash_advance_request_info as car JOIN employee_details as ed ON (ed.id_number = car.employee_id_details) where ed.employment_status = 1 and car.request_status = 1 AND ed.project_id IN ($projects)";
	$hr_first_data =mysql_query($hr_first);
	$hr_first_rows = mysql_num_rows($hr_first_data);
	$hr_first_ctr = 0;
	$hr_first_total = 0;
	while ($hr_first_ctr < $hr_first_rows){
		
		@$hr_first_total++;
		
		$hr_first_ctr++;
	}// end while
	
	// Approval
	$approval = "SELECT car.employee_id_details, car.request_status, ed.project_id, ed.id_number, ed.employment_status FROM cash_advance_request_info as car JOIN employee_details as ed ON (ed.id_number = car.employee_id_details) where ed.employment_status = 1 and car.request_status = 2 AND ed.project_id IN ($projects)";
	$approval_data =mysql_query($approval);
	$approval_rows = mysql_num_rows($approval_data);
	$approval_ctr = 0;
	$approval_total = 0;
	while ($approval_ctr < $approval_rows){
	
		@$approval_total++;
	
		$approval_ctr++;
	}// end while
	
	// Employee Recevied
	$employee_received = "SELECT car.employee_id_details, car.request_status, ed.project_id, ed.id_number, ed.employment_status FROM cash_advance_request_info as car JOIN employee_details as ed ON (ed.id_number = car.employee_id_details) where ed.employment_status = 1 and car.request_status = 3 AND ed.project_id IN ($projects)";
	$employee_received_data =mysql_query($employee_received);
	$employee_received_rows = mysql_num_rows($employee_received_data);
	$employee_received_ctr = 0;
	$employee_received_total = 0;
	while ($employee_received_ctr < $employee_received_rows){
	
		@$employee_received_total++;
	
		$employee_received_ctr++;
	}// end while
	
	// Closed
	$closed = "SELECT car.employee_id_details, car.request_status, ed.project_id, ed.id_number, ed.employment_status FROM cash_advance_request_info as car JOIN employee_details as ed ON (ed.id_number = car.employee_id_details) where ed.employment_status = 1 and car.request_status = 4 AND ed.project_id IN ($projects)";
	$closed_data =mysql_query($closed);
	$closed_rows = mysql_num_rows($closed_data);
	$closed_ctr = 0;
	$closed_total = 0;
	while ($closed_ctr < $closed_rows){
	
		@$closed_total++;
	
		$closed_ctr++;
	}// end while
	
	// Declined
	$declined = "SELECT car.employee_id_details, car.request_status, ed.project_id, ed.id_number, ed.employment_status FROM cash_advance_request_info as car JOIN employee_details as ed ON (ed.id_number = car.employee_id_details) where ed.employment_status = 1 and car.request_status = 5 AND ed.project_id IN ($projects)";
	$declined_data =mysql_query($declined);
	$declined_rows = mysql_num_rows($declined_data);
	$declined_ctr = 0;
	$declined_total = 0;
	while ($declined_ctr < $declined_rows){
	
		@$declined_total++;
	
		$declined_ctr++;
	}// end while
	
	$grand_total = $hr_first_total + $approval_total + $employee_received_total;
	
	return array(
			'cash_hr_first_total' => '('.$hr_first_total.')',
			'cash_approval_total' => '('.$approval_total.')',
			'cash_employee_received_total' => '('.$employee_received_total.')',
			'cash_closed_total' => '('.$closed_total.')',
			'cash_declined_total' => '('.$declined_total.')',
			'cash_grand_total' => '('.$grand_total.')'
	);// end array
	
}// end function

$result = search();
echo json_encode($result);
?>