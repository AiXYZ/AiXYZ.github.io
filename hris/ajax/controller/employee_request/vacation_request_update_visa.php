<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$tcode = $_POST['tcode'];
@$visa_number = $_POST['visa_number'];
@$visa_number_of_day = $_POST['visa_number_of_day'];
@$visa_exit_before_g = $_POST['visa_exit_before_g'];
@$visa_exit_before_h = $_POST['visa_exit_before_h'];
@$visa_exit_return_g = $_POST['visa_return_g'];
@$visa_exit_return_h = $_POST['visa_return_h'];
@$visa_notes = $_POST['visa_notes'];
// // @$ = $_POST['xxx'];
// // @$ = $_POST['xxx'];


//Username and Date HR First is updated
$visaUpdateBy = $_SESSION['login_user'];
$visaUpdateCreated = $Default_Date_Settings;

$Update = "SELECT tcode_vacation, date_created FROM vacation_request_info WHERE tcode_vacation = '".$tcode."' ";
$Update_data = mysql_query($Update);
$HRCreated_date = mysql_result($Update_data,0,"date_created");

$elapsed_days = elapsed_days($HRCreated_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the FD updated up to the Current Date it was update by the HR

$insertVisa = "INSERT INTO process_visa
					(
					tcode,
					number_of_days,
					gregorian_date,
					hijiri_date,
					gregorian_return_date,
					hijiri_return_date,
					note_visa,
					elapsed_days,
					created_by,
					date_created,
					visa_number
					)
					VALUES
					(
					'".$tcode."',
					'".$visa_number_of_day."',
					'".$visa_exit_before_g."',
					'".$visa_exit_before_h."',
					'".$visa_exit_return_g."',
					'".$visa_exit_return_h."',
					'".$visa_notes."',
					'".$elapsedDays."',
					'".$visaUpdateBy."',
					'".$visaUpdateCreated."',
					'".$visa_number."'
					)";
$insertVisa_data = mysql_query($insertVisa);

// Update the vacation request for REQUEST_STATUS
/*
 * 1 - HR First
 * 2 - FD
 * 3 - HR Final
 * 4 - Visa
 * 5 - Ticket
 * 6 - Clearance
 * 7 - Muqeem
 * 8 - Closed
 * 9 - Declined
 */
$update = "UPDATE vacation_request_info SET request_status = 5 WHERE tcode_vacation = '".$tcode."' ";
$update_data = mysql_query($update);

// $data['success'] = true;
$data['message'] = 'Success! Processing Visa.';
//$data['message'] = $insertVisa;

echo json_encode($data);
?>