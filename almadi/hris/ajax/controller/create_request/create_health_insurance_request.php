<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

$employeeID = $_POST['employee_id'];

$request_health_insurance_issues = $_POST['health_insurance_issues'];
$request_health_insurance_problem = $_POST['health_insurance_problem'];
@$request_notes = $_POST['health_insurance_notes'];

// This will check for the bank issues
if($request_health_insurance_issues == '2'){
	$health_insurance_problem = $request_health_insurance_problem;
}else {
	$health_insurance_problem = 'null';
}

$created_by = $_SESSION['login_user'];

$insertRequest = "INSERT INTO health_insurance_info
						(
						tcode_vacation,
						emp_id_number,
						health_type,
						health_issues,
						health_notes,
						date_created,
						created_by,
						request_status
						)
						VALUES
						(
						'$transactionCode',
						'$employeeID',
						'$request_health_insurance_issues',
						$health_insurance_problem,
						'$request_notes',
						'$Default_Date_Settings',
						'$created_by',
						1
						)";
$insertRequest_data = mysql_query($insertRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
// $data['message'] = 'Insert health insurance request';

echo json_encode($data);
?>