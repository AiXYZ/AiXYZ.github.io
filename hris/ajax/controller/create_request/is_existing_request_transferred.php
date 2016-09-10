<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$dbhandle = mysql_connect(DB_HOST, DB_USER, DB_PASS) or die("Unable to connect to MySQL");
mysql_set_charset('utf8',$dbhandle);
$selected = mysql_select_db(DB_NAME,$dbhandle) or die("Could not select database");

function search($employee_id,$request_type){
	
	@$projects = getProjects($_SESSION["login_user"]);
	
	/* --------------------------------------------------------------- */
	
	// Check if the current user login is allowed to transfer the employee
	$project_allow = "SELECT id_number, project_id FROM employee_details WHERE id_number = '".$employee_id."' AND project_id IN ($projects) ";
	$project_allow_data = mysql_query($project_allow);
	$project_allow_rows = mysql_num_rows($project_allow_data);
	
	if($project_allow_rows > 0){ // The employee is included in the project list, allowed to create request
		
		/* --------------------------------------------------------------- */
		
		// Check if the employee have already a request to be transfer, check the transfer request
		$transfer_request = "SELECT employee_id_details, request_status FROM request_personnel_transfer_info WHERE employee_id_details = '".$employee_id."' AND request_status = 4 ";
		$transfer_request_data = mysql_query($transfer_request);
		$transfer_request_rows = mysql_num_rows($transfer_request_data);
		
		if($transfer_request_rows > 0){ // The employee have a approved transfer request
			
			// Check if the employee already have a pending transferred request, check the transferred request
			$transferred_request = "SELECT emp_id_number, request_status FROM reporting_date_info WHERE emp_id_number = '".$employee_id."' AND request_status = 3";
			$transferred_request_data = mysql_query($transferred_request);
			$transferred_request_rows = mysql_num_rows($transferred_request_data);
			
			if($transferred_request_rows > 0){
				//$allow = 'no'; // Pending transferred request
				$allow = 'have_pending_transferred_pdf'; // Pending transferred request
			}else {
				$allow = 'yes';
			}
			
		}else {
			$allow = 'no_transfer_request'; // No transfer request
		}
		
		/* --------------------------------------------------------------- */
		
	}else {
		$allow = 'not_in_project_list'; // Not in the project list
	}

	
	/* --------------------------------------------------------------- */
	
	return array(
		'request_status' => $allow,
	);	
	
}// end function

$result = search($_POST['employee_id'],$_POST['request_type']);
echo json_encode($result);
?>