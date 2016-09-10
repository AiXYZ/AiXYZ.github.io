<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

$replacementID = $_POST['vr_vacationReplacementEmployeeID'];

$employeeID = $_POST['vr_vacationEmployeeID'];

$employeeDeparture = $_POST['vr_vacationAirportDeparture'];
$employeeDestination = $_POST['vr_vacationAirportDestinations'];
$employeeLeave = $_POST['vr_vacationTypeOfLeave'];
$employeeLeaveDays = $_POST['vr_vacationNumberOfDays'];
$employeeDeptFrom = $_POST['vr_vacationEdFromDate'];
$employeeDeptTo = $_POST['vr_vacationEdToDate'];
$employeeReplacementRequirements = $_POST['vr_vReplacementRequirementsOptions'];
$employeeReason = $_POST['vr_vacationNotes'];
$employeeVisa = $_POST['vr_vacationWhoWillPayForVisa'];

$created_by = $_SESSION['login_user'];

$insertVacationRequest = "INSERT INTO vacation_request_info(
	tcode_vacation,
	
	employee_id_replacement, 
	
	employee_id_details, 
	
	airport_departure, 
	airport_destination, 
	type_of_leave, 
	number_of_days, 
	expected_departure_from_date, 
	expected_departure_to_date, 
	replacement_requirements, 
	reason_for_vacation, 
	pay_visa, 
	
	date_created, 
	created_by,
	
	request_status
)VALUES(
	'$transactionCode',
	
	'$replacementID', 
	
	'$employeeID', 
	
	'$employeeDeparture', 
	'$employeeDestination', 
	'$employeeLeave', 
	'$employeeLeaveDays', 
	'$employeeDeptFrom', 
	'$employeeDeptTo', 
	'$employeeReplacementRequirements', 
	'$employeeReason', 
	'$employeeVisa', 
	
	'$Default_Date_Settings', 
	'$created_by',
	
	'1'
)";
$insertVacationRequest_data = mysql_query($insertVacationRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
//$data['message'] = $insertVacationRequest_data;

echo json_encode($data);
?>