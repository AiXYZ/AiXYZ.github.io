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
$replacementID = $_POST['replacement_id'];

$request_type_of_exit = $_POST['type_of_exit'];
$request_replacement_options = $_POST['replacement_options'];
$request_departure_from_date = $_POST['departure_from_date'];
$request_departure_to_date = $_POST['departure_to_date'];
$request_airport_departure = $_POST['airport_departure'];
$request_airport_destination = $_POST['airport_destinations'];
@$request_notes = $_POST['request_notes'];

// This will check for the replacement
if($request_replacement_options == 'ar'){
	$request_replacement = $replacementID;
}else {
	$request_replacement = 'null';
} // end if

$created_by = $_SESSION['login_user'];

$insertRequest = "INSERT INTO exit_request_info
							(
							tcode_vacation,
							employee_id_replacement	,
							employee_id_details,
							airport_departure,
							airport_destination,
							expected_departure_from_date,
							expected_departure_to_date,
							type_of_leave,
							replacement_requirements,
							reason_for_vacation,
							date_created,
							created_by,
							request_status
							)
							VALUES
							(
							'$transactionCode',
							$request_replacement,
							'$employeeID',
							'$request_airport_departure',
							'$request_airport_destination',
							'$request_departure_from_date',
							'$request_departure_to_date',
							'$request_type_of_exit',
							'$request_replacement_options',
							'$request_notes',
							'$Default_Date_Settings',
							'$created_by',
							1
							)";
$insertRequest_data = mysql_query($insertRequest);

$data['success'] = true;
$data['message'] = $transactionCode;
// $data['message'] = 'Insert exit request';

echo json_encode($data);
?>