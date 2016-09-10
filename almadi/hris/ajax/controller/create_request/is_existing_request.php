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
	
	// vacation
	if($request_type == 'vacation'){
		$cRequest = mysql_query(
			"SELECT COUNT(*) AS total_request FROM
			vacation_request_info WHERE
			employee_id_details = '$employee_id' AND
			request_status != '8' AND
			request_status != '9'"
			);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
			);
		
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// exit
	if($request_type == 'exit'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				exit_request_info WHERE
				employee_id_details = '$employee_id' AND
				request_status != '8' AND
				request_status != '9'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
		
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// transfer
	if($request_type == 'transfer'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				request_personnel_transfer_info WHERE
				employee_id_details = '$employee_id' AND
				request_status != '5' AND
				request_status != '6'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// bank
	if($request_type == 'bank'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				bank_request_info WHERE
				employee_id_details = '$employee_id' AND
				request_status != '5' AND
				request_status != '6'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// cash advance
	if($request_type == 'cash_advance'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				cash_advance_request_info WHERE
				employee_id_details = '$employee_id' AND
				request_status != '4' AND
				request_status != '5'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// salary increase
	if($request_type == 'salary_increase'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				cash_advance_request_info WHERE
				employee_id_details = '$employee_id' AND
				request_status != '4' AND
				request_status != '5'"
				);
	
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// health insurance
	if($request_type == 'health_insurance'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				health_insurance_info WHERE
				emp_id_number = '$employee_id' AND
				request_status != '5' AND
				request_status != '6'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
		
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// general request
	if($request_type == 'general_request'){
// 		$cRequest = mysql_query(
// 				"SELECT COUNT(*) AS total_request FROM
// 				health_insurance_info WHERE
// 				emp_id_number = '$employee_id' AND
// 				request_status != '5' AND
// 				request_status != '6'"
// 				);
	
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// new Employee
	if($request_type == 'newEmployee'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				reporting_date_info WHERE
				emp_id_number = '$employee_id' AND
				type_reporting = '2' AND
				request_status != '2'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// from vacation
	if($request_type == 'from_vacation'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				reporting_date_info WHERE
				emp_id_number = '$employee_id' AND
				type_reporting = '3' AND
				request_status != '2'" // On the pending list -> 3 PDF
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// transferred
// 	if($request_type == 'transferred'){
// 		$cRequest = mysql_query(
// 				"SELECT COUNT(*) AS total_request FROM
// 				reporting_date_info WHERE
// 				emp_id_number = '$employee_id' AND
// 				type_reporting = '1' AND
// 				request_status != '2'" // On the pending list -> 3 PDF
// 				);
		
// 		// This will check if the employee id in the project list of the login user
// 		$projectList = mysql_query(
// 				"SELECT COUNT(*) AS total_project FROM
// 				employee_details WHERE
// 				id_number = '$employee_id' AND
// 				project_id IN ($projects)"
// 				);
// 	}// end if
	
	/* --------------------------------------------------------------- */
	
	// re - new iqama
	
	/* --------------------------------------------------------------- */
	
	// extend / re entry
	if($request_type == 'extend_reentry'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				extend_info WHERE
				emp_id_number = '$employee_id' AND
				request_status != '2' AND
				request_status != '3'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// family visit
	if($request_type == 'family_visit'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				family_info WHERE
				emp_id_number = '$employee_id' AND
				request_status != '2' AND
				request_status != '3'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// change career
	if($request_type == 'career'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				career_info WHERE
				emp_id_number = '$employee_id' AND
				request_status != '2' AND
				request_status != '3'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if	
	
	/* --------------------------------------------------------------- */
	
	// floating
	if($request_type == 'floating'){
		$cRequest = mysql_query(
				"SELECT COUNT(*) AS total_request FROM
				floating_personnel_info WHERE
				emp_id_number = '$employee_id' AND
				request_status != '2' AND
				request_status != '3'"
				);
		
		// This will check if the employee id in the project list of the login user
		$projectList = mysql_query(
				"SELECT COUNT(*) AS total_project FROM
				employee_details WHERE
				id_number = '$employee_id' AND
				project_id IN ($projects)"
				);
	}// end if
	
	/* --------------------------------------------------------------- */
	
	// This is for the existing request
	@$row = mysql_fetch_object($cRequest);
	@$pending_Request = $row->total_request;
	
	if($pending_Request > '0'){
		$existing = 'TRUE';
	}else {
		$existing = 'FALSE';
	}
	
	// This is for the project list
	@$project_row = mysql_fetch_object($projectList);
	@$project_list = $project_row->total_project;
	
	if($project_list > '0'){
		$project = 'TRUE';
	}else {
		$project = 'FALSE';
	}
	
	return array(
		'request_status' => $existing,
		'project_list' => $project
	);	
	
}// end function

$result = search($_POST['employee_id'],$_POST['request_type']);
echo json_encode($result);
?>