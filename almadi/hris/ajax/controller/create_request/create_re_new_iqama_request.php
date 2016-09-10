<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

$employeeID = $_POST['reIqama_EmployeeID'];

$created_by = $_SESSION['login_user'];

$insertReNewIqamaRequest = "INSERT INTO renew_iqama_info(
	tcode,
	
	send_from, 
	
	iqama_status, 
	
	send_date, 
	emp_id_number
)VALUES(
	'$transactionCode',
	
	'$created_by', 
	
	'1', 
	
	'$Default_Date_Settings', 
	'$employeeID'
)";
$insertReNewIqamaRequest_data = mysql_query($insertReNewIqamaRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
//$data['message'] = $insertVacationRequest_data;

echo json_encode($data);
?>