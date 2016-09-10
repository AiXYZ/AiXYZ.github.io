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

@$request_notes = $_POST['salary_increase_notes'];

$created_by = $_SESSION['login_user'];

$insertRequest = "INSERT INTO salary_increase_request_info
						(
						tcode_vacation,
						emp_id_number,
						request_notes,
						date_created,
						created_by,
						request_status
						)
						VALUES
						(
						'$transactionCode',
						'$employeeID',
						'$request_notes',
						'$Default_Date_Settings',
						'$created_by',
						1
						)";
$insertRequest_data = mysql_query($insertRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
// $data['message'] = 'Insert salary increase request';

echo json_encode($data);
?>