<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

$employeeID = $_POST['ner_newEmployeeID'];

$newEmpJobSiteReportingDate = $_POST['ner_newEmpJobSiteReportingDate'];
$newEmpNotes = $_POST['ner_newEmpNotes'];

$created_by = $_SESSION['login_user'];

$insertNewEmpRequest = "INSERT INTO reporting_date_info(
	trans_code,
	
	emp_id_number, 
	
	emp_reporting_date, 
	emp_notes, 
	
	date_created, 
	created_by,
	
	type_reporting,
	request_status
)VALUES(
	'$transactionCode',
	
	'$employeeID', 
	
	'$newEmpJobSiteReportingDate', 
	'$newEmpNotes', 
	
	'$Default_Date_Settings', 
	'$created_by',
	'2',
	'3'
)";
$insertNewEmpRequest_data = mysql_query($insertNewEmpRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
//$data['message'] = $insertVacationRequest_data;

echo json_encode($data);
?>