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
@$send_to_bank_notes = $_POST['send_to_bank_notes'];

// // // =================================================================== \\

// //Username and Date HR First is updated
$sendtobankUpdateBy = $_SESSION['login_user'];
$sendtobankUpdateCreated = $Default_Date_Settings;

// // Get the CREATED DATE
$created = "SELECT tcode_vacation, hr_update_created FROM bank_request_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"hr_update_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

// /*
//  * 1 - HR First
//  * 2 - Send to bank
//  * 3 - Received from bank
//  * 4 - Send to site
//  * 5 - Closed
//  * 6 - Declined
//  */

$updateSendToBank = "UPDATE bank_request_info SET notes_fd = '".$send_to_bank_notes."', fd_update_by = '".$sendtobankUpdateBy."', fd_update_created = '".$sendtobankUpdateCreated."', fd_update_days = '".$elapsedDays."', request_status = 3 WHERE tcode_vacation = '".$tcode."' ";
$updateSendToBank_data = mysql_query($updateSendToBank);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateSendToBank;
	
// =========================== \\

echo json_encode($data);
?>