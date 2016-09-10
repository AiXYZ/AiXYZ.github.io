<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

// =================================================================== \\

@$tcode = $_POST['tcode'];
@$send_to_site_notes = $_POST['send_to_site_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$sendtositeUpdateBy = $_SESSION['login_user'];
$sendtositeUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, received_update_created FROM bank_request_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"received_update_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - Send to bank
 * 3 - Received from bank
 * 4 - Send to site
 * 5 - Closed
 * 6 - Declined
 */

$updateSendToSite = "UPDATE bank_request_info SET hr_final_note = '".$send_to_site_notes."', hr_final_update_by = '".$sendtositeUpdateBy."', hr_final_update_created = '".$sendtositeUpdateCreated."', hr_final_days = '".$elapsedDays."', request_status = 5 WHERE tcode_vacation = '".$tcode."' ";
$updateSendToSite_data = mysql_query($updateSendToSite);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateSendToSite;
	
// =========================== \\

echo json_encode($data);
?>