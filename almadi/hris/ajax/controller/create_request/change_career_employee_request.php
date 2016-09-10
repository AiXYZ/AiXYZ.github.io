<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

$employeeID = $_POST['cr_careerEmployeeID'];

$careerNotes = $_POST['cr_careerNotes'];

$created_by = $_SESSION['login_user'];

$insertCareerRequest = "INSERT INTO career_info(
	tcode_vacation,
	
	emp_id_number, 
	
	career_notes, 
	
	date_created, 
	created_by,
	
	request_status
)VALUES(
	'$transactionCode',
	
	'$employeeID', 
	
	'$careerNotes', 
	
	'$Default_Date_Settings', 
	'$created_by',

	'1'
)";
$insertCareerRequest_data = mysql_query($insertCareerRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
//$data['message'] = $insertVacationRequest_data;

echo json_encode($data);
?>