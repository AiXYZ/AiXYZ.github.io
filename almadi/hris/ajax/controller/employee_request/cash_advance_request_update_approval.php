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
@$approval_notes = $_POST['approval_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$approvalUpdateBy = $_SESSION['login_user'];
$approvalUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, hr_update_created FROM cash_advance_request_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"hr_update_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - Employee Recevied
 * 4 - Closed
 * 5 - Declined
 */

$updateApproval = "UPDATE cash_advance_request_info SET notes_fd = '".$approval_notes."', fd_update_by = '".$approvalUpdateBy."', fd_update_created = '".$approvalUpdateCreated."', fd_update_days = '".$elapsedDays."', request_status = 3 WHERE tcode_vacation = '".$tcode."' ";
$updateApproval_data = mysql_query($updateApproval);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateApproval;
	
// =========================== \\

echo json_encode($data);
?>