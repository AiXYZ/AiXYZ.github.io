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
@$clearance_benefit = $_POST['clearance_benefit'];
@$clearance_ticket = $_POST['clearance_ticket'];
@$clearance_notes = $_POST['clearance_notes'];
// @$ = $_POST['xxx'];

//Username and Date HR First is updated
$clearanceUpdateBy = $_SESSION['login_user'];
$clearanceUpdateCreated = $Default_Date_Settings;

$Update = "SELECT tcode, date_created FROM process_ticket WHERE tcode = '".$tcode."' ";
$Update_data = mysql_query($Update);
$ClearanceCreated_date = mysql_result($Update_data,0,"date_created");

$elapsed_days = elapsed_days($ClearanceCreated_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the FD updated up to the Current Date it was update by the HR

$insertClearance = "INSERT INTO process_clearance
							(
							tcode,
							benefit,
							ticket,
							clearance_process_notes,
							created_by,
							date_created,
							elapsed_days
							)
							VALUES
							(
							'".$tcode."',
							'".$clearance_benefit."',
							'".$clearance_ticket."',
							'".$clearance_notes."',
							'".$clearanceUpdateBy."',
							'".$clearanceUpdateCreated."',
							'".$elapsedDays."'
							)";
$insertClearance_data = mysql_query($insertClearance);

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
$update = "UPDATE vacation_request_info SET request_status = 7 WHERE tcode_vacation = '".$tcode."' ";
$update_data = mysql_query($update);

$data['success'] = true;
$data['message'] = 'Success! Processing Clearance.';
// $data['message'] = $insertClearance;

echo json_encode($data);
?>