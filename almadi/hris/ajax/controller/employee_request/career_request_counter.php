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
// 	$typeDepartment = $department['department']; // <-- 1 - HR, 2 - FD, 3 - All Dept, 4 - Project Site, 5 - PM, 6 - AM
	
	@$projects = getProjects($_SESSION["login_user"]);
	
	// =========================================================================================== \\
	// For floating HR received
	
	$crRequest_HR = "SELECT cri.emp_id_number, cri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM career_info as cri JOIN employee_details as ed ON (ed.id_number = cri.emp_id_number) where ed.employment_status = 1 and cri.request_status = 1 AND ed.project_id IN ($projects)";
	$crRequest_HR_data = mysql_query($crRequest_HR);
	$crRequest_HR_row = mysql_num_rows($crRequest_HR_data);
	$crRequest_HR_ctr = 0;
	$cr_HR_total = 0;
	while ($crRequest_HR_ctr < $crRequest_HR_row){
	
		@$cr_HR_total++;
	
		$crRequest_HR_ctr++;
	}// end while

	// For floating closed
	
	$crRequest_HR_Closed = "SELECT cri.emp_id_number, cri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM career_info as cri JOIN employee_details as ed ON (ed.id_number = cri.emp_id_number) where ed.employment_status = 1 and cri.request_status = 2 AND ed.project_id IN ($projects)";
	$crRequest_HR_Closed_data = mysql_query($crRequest_HR_Closed);
	$crRequest_HR_Closed_row = mysql_num_rows($crRequest_HR_Closed_data);
	$crRequest_HR_Closed_ctr = 0;
	$cr_HR_Closed_total = 0;
	while ($crRequest_HR_Closed_ctr < $crRequest_HR_Closed_row){
	
		@$cr_HR_Closed_total++;
	
		$crRequest_HR_Closed_ctr++;
	}// end while
	
	// For floating closed	
	
	// For floating HR closing
	
	$crRequest_HR_Declined = "SELECT cri.emp_id_number, cri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM career_info as cri JOIN employee_details as ed ON (ed.id_number = cri.emp_id_number) where ed.employment_status = 1 and cri.request_status = 3 AND ed.project_id IN ($projects)";
	$crRequest_HR_Declined_data = mysql_query($crRequest_HR_Declined);
	$crRequest_HR_Declined_row = mysql_num_rows($crRequest_HR_Declined_data);
	$crRequest_HR_Declined_ctr = 0;
	$cr_HR_Declined_total = 0;
	while ($crRequest_HR_Declined_ctr < $crRequest_HR_Declined_row){
	
		@$cr_HR_Declined_total++;
	
		$crRequest_HR_Declined_ctr++;
	}// end while
	
	// For floating HR closing	
	
	// =========================================================================================== \\
	
	return array(
			'cr_Hr_total' => '('.$cr_HR_total.')',
			'cr_Closed_total' => '('.$cr_HR_Closed_total.')',
			'cr_Declined_total' => '('.$cr_HR_Declined_total.')',
			'cr_Hr_total_All' => '('.$cr_HR_total.')',
	);// end array
	
}// end function

$result = search();
echo json_encode($result);
?>