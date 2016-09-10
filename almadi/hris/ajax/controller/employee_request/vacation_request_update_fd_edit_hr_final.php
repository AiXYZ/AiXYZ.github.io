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
@$edit_fd_total_deduction = $_POST['edit_fd_total_deduction'];
@$edit_fd_credit = $_POST['edit_fd_credit'];
@$edit_fd_notes = $_POST['edit_fd_notes'];


// //Username and Date HR First is updated
// $hrUpdateBy = $_SESSION['login_user'];
// $hrUpdateCreated = $Default_Date_Settings;

// $elapsed_days = elapsed_days($date_created);
// @$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

$updateFD = "UPDATE vacation_request_info SET total_deductions = '".$edit_fd_total_deduction."', credit_fd = '".$edit_fd_credit."', notes_fd = '".$edit_fd_notes."' WHERE tcode_vacation = '".$tcode."' ";
$updateFD_data = mysql_query($updateFD);

$data['success'] = true;
$data['message'] = 'Success! FD details updated.';
//$data['message'] = $updateFD;

echo json_encode($data);
?>