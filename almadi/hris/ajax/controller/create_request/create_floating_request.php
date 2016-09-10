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

$request_floating_date = $_POST['floating_date'];
@$request_notes = $_POST['floating_notes'];

$created_by = $_SESSION['login_user'];

$insertRequest = "INSERT INTO floating_personnel_info
						(
						trans_code,
						emp_id_number,
						emp_date,
						emp_notes,
						date_created,
						created_by,
						request_status
						)
						VALUES
						(
						'$transactionCode',
						'$employeeID',
						'$request_floating_date',
						'$request_notes',
						'$Default_Date_Settings',
						'$created_by',
						1
						)";
$insertRequest_data = mysql_query($insertRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
// $data['message'] = 'Insert floating request';

echo json_encode($data);
?>