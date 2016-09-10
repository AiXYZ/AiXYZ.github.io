<?php
ob_start();
session_start();

/*
 * 1 - HR First
 * 2 - Send to bank
 * 3 - Received from bank
 * 4 - Send to site
 * 5 - Closed
 * 6 - Declined
 * 
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
	
	$currentUser = $_SESSION["login_user"];
	
	/* ********************************************************************************************* */
	
	// HR First
	$hr_first = "SELECT gri.emp_id_number, gri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM general_request_info as gri JOIN employee_details as ed ON (ed.id_number = gri.emp_id_number) where ed.employment_status = 1 and gri.request_status = 1 AND ed.project_id IN ($projects)";
	$hr_first_data =mysql_query($hr_first);
	$hr_first_rows = mysql_num_rows($hr_first_data);
	$hr_first_ctr = 0;
	$hr_first_total = 0;
	while ($hr_first_ctr < $hr_first_rows){
		
		@$hr_first_total++;
		
		$hr_first_ctr++;
	}// end while
	
	// Assigned to
	$assigned_to = "SELECT gri.emp_id_number, gri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM general_request_info as gri JOIN employee_details as ed ON (ed.id_number = gri.emp_id_number) where ed.employment_status = 1 and gri.request_status = 2 AND ed.project_id IN ($projects)";
	$assigned_to_data =mysql_query($assigned_to);
	$assigned_to_rows = mysql_num_rows($assigned_to_data);
	$assigned_to_ctr = 0;
	$assigned_to_total = 0;
	while ($assigned_to_ctr < $assigned_to_rows){
	
		@$assigned_to_total++;
	
		$assigned_to_ctr++;
	}// end while
	
	// Assigned from
	//$assigned_from = "SELECT gri.emp_id_number, gri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM general_request_info as gri JOIN employee_details as ed ON (ed.id_number = gri.emp_id_number) where ed.employment_status = 1 and gri.request_status = 2 AND ed.project_id IN ($projects)";
	$assigned_from = "SELECT gri.emp_id_number, gri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM general_request_info as gri JOIN employee_details as ed ON (ed.id_number = gri.emp_id_number) where ed.employment_status = 1 and gri.request_status = 2 AND assigned_to = $currentUser AND ed.project_id IN ($projects)";
	$assigned_from_data =mysql_query($assigned_from);
	$assigned_from_rows = mysql_num_rows($assigned_from_data);
	$assigned_from_ctr = 0;
	$assigned_from_total = 0;
	while ($assigned_from_ctr < $assigned_from_rows){
	
		@$assigned_from_total++;
	
		$assigned_from_ctr++;
	}// end while
	
	// Closed
	$closed = "SELECT gri.emp_id_number, gri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM general_request_info as gri JOIN employee_details as ed ON (ed.id_number = gri.emp_id_number) where ed.employment_status = 1 and gri.request_status = 3 AND ed.project_id IN ($projects)";
	$closed_data =mysql_query($closed);
	$closed_rows = mysql_num_rows($closed_data);
	$closed_ctr = 0;
	$closed_total = 0;
	while ($closed_ctr < $closed_rows){
	
		@$closed_total++;
	
		$closed_ctr++;
	}// end while
	
	// Declined
	$declined = "SELECT gri.emp_id_number, gri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM general_request_info as gri JOIN employee_details as ed ON (ed.id_number = gri.emp_id_number) where ed.employment_status = 1 and gri.request_status = 4 AND ed.project_id IN ($projects)";
	$declined_data =mysql_query($declined);
	$declined_rows = mysql_num_rows($declined_data);
	$declined_ctr = 0;
	$declined_total = 0;
	while ($declined_ctr < $declined_rows){
	
		@$declined_total++;
	
		$declined_ctr++;
	}// end while
	
	$grand_total = $hr_first_total + $assigned_to_total;
	
	return array(
			'general_hr_first_total' => '('.$hr_first_total.')',
			'general_assigned_to_total' => '('.$assigned_to_total.')',
			'general_assigned_from_total' => '('.$assigned_from_total.')',
			'general_closed_total' => '('.$closed_total.')',
			'general_declined_total' => '('.$declined_total.')',
			'general_grand_total' => '('.$grand_total.')'
	);// end array
	
}// end function

$result = search();
echo json_encode($result);
?>