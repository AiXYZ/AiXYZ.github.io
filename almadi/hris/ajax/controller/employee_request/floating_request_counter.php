<?php
ob_start();
session_start();

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
	// For floating HR received
	
	$frRequest_HR_Received = "SELECT fri.emp_id_number, fri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM floating_personnel_info as fri JOIN employee_details as ed ON (ed.id_number = fri.emp_id_number) where ed.employment_status = 1 and fri.request_status = 1 AND ed.project_id IN ($projects)";
	$frRequest_HR_Received_data = mysql_query($frRequest_HR_Received);
	$frRequest_HR_Received_row = mysql_num_rows($frRequest_HR_Received_data);
	$frRequest_HR_Received_ctr = 0;
	$fr_HR_Received_total = 0;
	while ($frRequest_HR_Received_ctr < $frRequest_HR_Received_row){
	
		@$fr_HR_Received_total++;
	
		$frRequest_HR_Received_ctr++;
	}// end while

	// For floating HR closing
	
	$frRequest_HR_Closing = "SELECT fri.emp_id_number, fri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM floating_personnel_info as fri JOIN employee_details as ed ON (ed.id_number = fri.emp_id_number) where ed.employment_status = 1 and fri.request_status = 2 AND ed.project_id IN ($projects)";
	$frRequest_HR_Closing_data = mysql_query($frRequest_HR_Closing);
	$frRequest_HR_Closing_row = mysql_num_rows($frRequest_HR_Closing_data);
	$frRequest_HR_Closing_ctr = 0;
	$fr_HR_Closing_total = 0;
	while ($frRequest_HR_Closing_ctr < $frRequest_HR_Closing_row){
	
		@$fr_HR_Closing_total++;
	
		$frRequest_HR_Closing_ctr++;
	}// end while

	// For floating HR closing

	// For floating closed
	
	$frRequest_HR_Closed = "SELECT fri.emp_id_number, fri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM floating_personnel_info as fri JOIN employee_details as ed ON (ed.id_number = fri.emp_id_number) where ed.employment_status = 1 and fri.request_status = 3 AND ed.project_id IN ($projects)";
	$frRequest_HR_Closed_data = mysql_query($frRequest_HR_Closed);
	$frRequest_HR_Closed_row = mysql_num_rows($frRequest_HR_Closed_data);
	$frRequest_HR_Closed_ctr = 0;
	$fr_HR_Closed_total = 0;
	while ($frRequest_HR_Closed_ctr < $frRequest_HR_Closed_row){
	
		@$fr_HR_Closed_total++;
	
		$frRequest_HR_Closed_ctr++;
	}// end while
	
	// For floating closed	
	
	// =========================================================================================== \\
	
	return array(
			'fr_hr_received_total' => '('.$fr_HR_Received_total.')',
			'fr_hr_closing_total' => '('.$fr_HR_Closing_total.')',
			'fr_closed_total' => '('.$fr_HR_Closed_total.')',
			'fr_total_All' => '('.($fr_HR_Received_total+$fr_HR_Closing_total).')'
	);// end array
	
}// end function

$result = search();
echo json_encode($result);
?>