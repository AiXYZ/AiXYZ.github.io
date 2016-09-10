<?php
ob_start();
session_start();

/*
 * 1 - HR First
 * 2 - Closed
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
	
	/* ********************************************************************************************* */
	
	// HR First
	$hr_first = "SELECT rii.emp_id_number, rii.iqama_status, ed.project_id, ed.id_number, ed.employment_status FROM renew_iqama_info as rii JOIN employee_details as ed ON (ed.id_number = rii.emp_id_number) where ed.employment_status = 1 and rii.iqama_status = 1 AND ed.project_id IN ($projects)";
	$hr_first_data =mysql_query($hr_first);
	$hr_first_rows = mysql_num_rows($hr_first_data);
	$hr_first_ctr = 0;
	$hr_first_total = 0;
	while ($hr_first_ctr < $hr_first_rows){
		
		@$hr_first_total++;
		
		$hr_first_ctr++;
	}// end while
	
	// Closed
	$closed = "SELECT rii.emp_id_number, rii.iqama_status, ed.project_id, ed.id_number, ed.employment_status FROM renew_iqama_info as rii JOIN employee_details as ed ON (ed.id_number = rii.emp_id_number) where ed.employment_status = 1 and rii.iqama_status = 2 AND ed.project_id IN ($projects)";
	$closed_data =mysql_query($closed);
	$closed_rows = mysql_num_rows($closed_data);
	$closed_ctr = 0;
	$closed_total = 0;
	while ($closed_ctr < $closed_rows){
	
		@$closed_total++;
	
		$closed_ctr++;
	}// end while
	
	return array(
			'renew_iqama_hr_first_total' => '('.$hr_first_total.')',
			'renew_iqama_closed_total' => '('.$closed_total.')',
			'renew_iqama_grand_total' => '('.$hr_first_total.')'
	);// end array
	
}// end function

$result = search();
echo json_encode($result);
?>