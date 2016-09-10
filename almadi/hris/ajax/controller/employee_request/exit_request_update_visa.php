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
@$exit_visa_number = $_POST['exit_visa_number'];
@$exit_visa_before_this_date_g = $_POST['exit_visa_before_this_date_g'];
@$exit_visa_before_this_date_h = $_POST['exit_visa_before_this_date_h'];
@$exit_visa_notes = $_POST['exit_visa_notes'];
// @$xx = $_POST['xx'];

// =================================================================== \\

//Username and Date HR First is updated
$visaUpdateBy = $_SESSION['login_user'];
$visaUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, hr_final_update_created FROM exit_request_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"hr_final_update_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

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
					NULL,
					'".$exit_visa_before_this_date_g."',
					'".$exit_visa_before_this_date_h."',
					NULL,
					NULL,
					'".$exit_visa_notes."',
					'".$elapsedDays."',
					'".$visaUpdateBy."',
					'".$visaUpdateCreated."',
					'".$exit_visa_number."'
					)";
$insertVisa_data = mysql_query($insertVisa);

// Update the exit_request_info -> request_status
$updateRequestStatus = "UPDATE exit_request_info SET request_status = 5 WHERE tcode_vacation = '".$tcode."' ";
$updateRequestStatus_data = mysql_query($updateRequestStatus);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';
// $data['message'] = $insertVisa;

echo json_encode($data);
?>