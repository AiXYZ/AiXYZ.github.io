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
@$exit_clearance_benefit = $_POST['exit_clearance_benefit'];
@$exit_clearance_ticket = $_POST['exit_clearance_ticket'];
@$exit_clearance_notes = $_POST['exit_clearance_notes'];

// @$xx = $_POST['xx'];

// =================================================================== \\

//Username and Date HR First is updated
$clearanceUpdateBy = $_SESSION['login_user'];
$clearanceUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode, date_created FROM process_ticket WHERE tcode = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

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

$insertClearance = "INSERT INTO process_clearance
					(
					tcode,
					benefit,
					ticket,
					clearance_process_notes,
					elapsed_days,
					created_by,
					date_created
					)
					VALUES
					('".$tcode."',
					'".$exit_clearance_benefit."',
					'".$exit_clearance_ticket."',
					'".$exit_clearance_notes."',
					'".$elapsedDays."',
					'".$clearanceUpdateBy."',
					'".$clearanceUpdateCreated."')";
$insertClearance_data = mysql_query($insertClearance);

// Update the exit_request_info -> request_status
$updateRequestStatus = "UPDATE exit_request_info SET request_status = 7 WHERE tcode_vacation = '".$tcode."' ";
$updateRequestStatus_data = mysql_query($updateRequestStatus);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';

// $data['message'] = $insertClearance;

echo json_encode($data);
?>