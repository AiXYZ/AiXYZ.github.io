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
	
	/* ********************************************************************************************* */
	
	// HR First
	$hr_first = "SELECT hiri.emp_id_number, hiri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM health_insurance_info as hiri JOIN employee_details as ed ON (ed.id_number = hiri.emp_id_number) where ed.employment_status = 1 and hiri.request_status = 1 AND ed.project_id IN ($projects)";
	$hr_first_data =mysql_query($hr_first);
	$hr_first_rows = mysql_num_rows($hr_first_data);
	$hr_first_ctr = 0;
	$hr_first_total = 0;
	while ($hr_first_ctr < $hr_first_rows){
		
		@$hr_first_total++;
		
		$hr_first_ctr++;
	}// end while
	
	// Send to company
	$send_to_company = "SELECT hiri.emp_id_number, hiri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM health_insurance_info as hiri JOIN employee_details as ed ON (ed.id_number = hiri.emp_id_number) where ed.employment_status = 1 and hiri.request_status = 2 AND ed.project_id IN ($projects)";
	$send_to_company_data =mysql_query($send_to_company);
	$send_to_company_rows = mysql_num_rows($send_to_company_data);
	$send_to_company_ctr = 0;
	$send_to_company_total = 0;
	while ($send_to_company_ctr < $send_to_company_rows){
	
		@$send_to_company_total++;
	
		$send_to_company_ctr++;
	}// end while
	
	// Received from company
	$received_from_company = "SELECT hiri.emp_id_number, hiri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM health_insurance_info as hiri JOIN employee_details as ed ON (ed.id_number = hiri.emp_id_number) where ed.employment_status = 1 and hiri.request_status = 3 AND ed.project_id IN ($projects)";
	$received_from_company_data =mysql_query($received_from_company);
	$received_from_company_rows = mysql_num_rows($received_from_company_data);
	$received_from_company_ctr = 0;
	$received_from_company_total = 0;
	while ($received_from_company_ctr < $received_from_company_rows){
	
		@$received_from_company_total++;
	
		$received_from_company_ctr++;
	}// end while
	
	// Send to site
	$send_to_site = "SELECT hiri.emp_id_number, hiri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM health_insurance_info as hiri JOIN employee_details as ed ON (ed.id_number = hiri.emp_id_number) where ed.employment_status = 1 and hiri.request_status = 4 AND ed.project_id IN ($projects)";
	$send_to_site_data =mysql_query($send_to_site);
	$send_to_site_rows = mysql_num_rows($send_to_site_data);
	$send_to_site_ctr = 0;
	$send_to_site_total = 0;
	while ($send_to_site_ctr < $send_to_site_rows){
	
		@$send_to_site_total++;
	
		$send_to_site_ctr++;
	}// end while
	
	// Closed
	$closed = "SELECT hiri.emp_id_number, hiri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM health_insurance_info as hiri JOIN employee_details as ed ON (ed.id_number = hiri.emp_id_number) where ed.employment_status = 1 and hiri.request_status = 5 AND ed.project_id IN ($projects)";
	$closed_data =mysql_query($closed);
	$closed_rows = mysql_num_rows($closed_data);
	$closed_ctr = 0;
	$closed_total = 0;
	while ($closed_ctr < $closed_rows){
	
		@$closed_total++;
	
		$closed_ctr++;
	}// end while
	
	// Declined
	$declined = "SELECT hiri.emp_id_number, hiri.request_status, ed.project_id, ed.id_number, ed.employment_status FROM health_insurance_info as hiri JOIN employee_details as ed ON (ed.id_number = hiri.emp_id_number) where ed.employment_status = 1 and hiri.request_status = 6 AND ed.project_id IN ($projects)";
	$declined_data =mysql_query($declined);
	$declined_rows = mysql_num_rows($declined_data);
	$declined_ctr = 0;
	$declined_total = 0;
	while ($declined_ctr < $declined_rows){
	
		@$declined_total++;
	
		$declined_ctr++;
	}// end while
	
	$grand_total = $hr_first_total + $send_to_company_total + $received_from_company_total + $send_to_site_total;
	
	return array(
			'health_hr_first_total' => '('.$hr_first_total.')',
			'health_send_to_company_total' => '('.$send_to_company_total.')',
			'health_received_from_company_total' => '('.$received_from_company_total.')',
			'health_send_to_site_total' => '('.$send_to_site_total.')',
			'health_closed_total' => '('.$closed_total.')',
			'health_declined_total' => '('.$declined_total.')',
			'health_grand_total' => '('.$grand_total.')'
	);// end array
	
}// end function

$result = search();
echo json_encode($result);
?>