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
@$muqeem_leaving_date_g = $_POST['exit_ksa_leaving_date_g'];
@$muqeem_leaving_date_h = $_POST['exit_ksa_leaving_date_h'];
@$muqeem_notes = $_POST['exit_muqeem_notes'];

// @$xx = $_POST['xx'];

// =================================================================== \\

//Username and Date HR First is updated
$muqeemUpdateBy = $_SESSION['login_user'];
$muqeemUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode, date_created FROM process_clearance WHERE tcode = '".$tcode."' ";
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

$insertMuqeem = "INSERT INTO process_close
					(
					tcode,
					gregorian_out_of_ksa_date,
					hijiri_out_of_ksa_date,
					close_notes,
					created_by,
					date_created,
					elapsed_days
					)
					VALUES
					('".$tcode."',
					'".$muqeem_leaving_date_g."',
					'".$muqeem_leaving_date_h."',
					'".$muqeem_notes."',
					'".$muqeemUpdateBy."',
					'".$muqeemUpdateCreated."',
					'".$elapsedDays."')";
$insertMuqeem_data = mysql_query($insertMuqeem);

// Update the exit_request_info -> request_status
$updateRequestStatus = "UPDATE exit_request_info SET request_status = 8 WHERE tcode_vacation = '".$tcode."' ";
$updateRequestStatus_data = mysql_query($updateRequestStatus);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';

// $data['message'] = $insertMuqeem;

echo json_encode($data);
?>