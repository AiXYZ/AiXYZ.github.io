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

@$vacation_request_fd_total_salary = $_POST['vacation_request_fd_total_salary'];
@$vacation_request_fd_total_deduction = $_POST['vacation_request_fd_total_deduction'];
@$vacation_request_fd_total_credit = $_POST['vacation_request_fd_total_credit'];
@$vacation_request_fd_notes = $_POST['vacation_request_fd_notes'];

//Username and Date HR First is updated
$fdUpdateBy = $_SESSION['login_user'];
$fdUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, hr_update_created FROM vacation_request_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"hr_update_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

// $updateFD = "UPDATE vacation_request_info SET
// 					basic_salary = '".$vacation_request_fd_total_salary."',
// 					total_deductions = '".$vacation_request_fd_total_deduction."',
// 					credit_fd = '".$vacation_request_fd_total_credit."',
// 					notes_fd = '".$vacation_request_fd_notes."',
// 					fd_update_by = '".$fdUpdateBy."',
// 					fd_update_created = '".$fdUpdateCreated."',
// 					fd_update_days = '".$elapsedDays."'
// 					WHERE tcode_vacation = '".$tcode."'";

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

$updateFD = "UPDATE vacation_request_info SET
					basic_salary = '".$vacation_request_fd_total_salary."',
					total_deductions = '".$vacation_request_fd_total_deduction."',
					credit_fd = '".$vacation_request_fd_total_credit."',
					notes_fd = '".$vacation_request_fd_notes."',
					fd_update_by = '".$fdUpdateBy."',
					fd_update_created = '".$fdUpdateCreated."',
					fd_update_days = '".$elapsedDays."',
					request_status = 3
					WHERE tcode_vacation = '".$tcode."'";
$updateFD_data = mysql_query($updateFD);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';
//$data['message'] = $updateFD;

echo json_encode($data);
?>