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

$request_project_to = $_POST['project_to'];
$request_transfer_date = $_POST['transfer_date'];
@$request_notes = $_POST['transfer_notes'];

$created_by = $_SESSION['login_user'];

$insertRequest = "INSERT INTO request_personnel_transfer_info
						(
						tcode_vacation,
						employee_id_details,
						transfer_to,
						expected_transfer_date,
						reason_for_transfer,
						date_created,
						created_by,
						request_status
						)
						VALUES
						(
						'$transactionCode',
						'$employeeID',
						'$request_project_to',
						'$request_transfer_date',
						'$request_notes',
						'$Default_Date_Settings',
						'$created_by',
						1
						)";
$insertRequest_data = mysql_query($insertRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
// $data['message'] = 'Insert transfer request';

echo json_encode($data);
?>