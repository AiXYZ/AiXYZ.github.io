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
@$employee_received_notes = $_POST['employee_received_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$employee_receivedUpdateBy = $_SESSION['login_user'];
$employee_receivedUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, fd_update_created FROM cash_advance_request_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"fd_update_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - Approval
 * 3 - Employee Recevied
 * 4 - Closed
 * 5 - Declined
 */

$updateEmployeeReceived = "UPDATE cash_advance_request_info SET hr_final_notes = '".$employee_received_notes."', hr_final_update_by = '".$employee_receivedUpdateBy."', hr_final_update_created	 = '".$employee_receivedUpdateCreated."', hr_final_days = '".$elapsedDays."', request_status = 4 WHERE tcode_vacation = '".$tcode."' ";
$updateEmployeeReceived_data = mysql_query($updateEmployeeReceived);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateEmployeeReceived;
	
// =========================== \\

echo json_encode($data);
?>