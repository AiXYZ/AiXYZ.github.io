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

$request_bank_issues = $_POST['bank_issues'];
$request_bank_problem = $_POST['bank_problem'];
@$request_notes = $_POST['bank_notes'];

// This will check for the bank issues
if($request_bank_issues == '2'){
	$bank_problem = $request_bank_problem;
}else {
	$bank_problem = 'null';
}

$created_by = $_SESSION['login_user'];

$insertRequest = "INSERT INTO bank_request_info
						(
						tcode_vacation,
						employee_id_details,
						bank_type,
						bank_issues,
						notes_bank_request,
						date_created,
						created_by,
						request_status
						)
						VALUES
						(
						'$transactionCode',
						'$employeeID',
						'$request_bank_issues',
						$bank_problem,
						'$request_notes',
						'$Default_Date_Settings',
						'$created_by',
						1
						)";
$insertRequest_data = mysql_query($insertRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
// $data['message'] = 'Insert bank request';

echo json_encode($data);
?>