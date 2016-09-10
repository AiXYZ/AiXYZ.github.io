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

$request_transferred_reporting_date = $_POST['transferred_reporting_date'];
@$request_notes = $_POST['transferred_notes'];

$created_by = $_SESSION['login_user'];

$insertRequest = "INSERT INTO reporting_date_info
						(
						trans_code,
						emp_id_number,
						emp_reporting_date,
						emp_notes,
						type_reporting,
						date_created,
						created_by,
						request_status
						)
						VALUES
						(
						'$transactionCode',
						'$employeeID',
						'$request_transferred_reporting_date',
						'$request_notes',
						1,
						'$Default_Date_Settings',
						'$created_by',
						3
						)";
$insertRequest_data = mysql_query($insertRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
// $data['message'] = 'Insert transferred request';

echo json_encode($data);
?>