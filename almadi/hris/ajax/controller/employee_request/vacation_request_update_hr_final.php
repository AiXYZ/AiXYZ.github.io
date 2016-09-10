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
@$hr_final_notes = $_POST['hr_final_notes'];

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

$fdUpdate = "SELECT tcode_vacation, fd_update_created, date_created FROM vacation_request_info WHERE tcode_vacation = '".$tcode."' ";
$fdUpdate_data = mysql_query($fdUpdate);
$fdCreated_date = mysql_result($fdUpdate_data,0,"date_created");
$fdUpdate_date = mysql_result($fdUpdate_data,0,"fd_update_created");

$elapsed_days = elapsed_days($fdUpdate_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the FD updated up to the Current Date it was update by the HR

$total_days = elapsed_days($fdCreated_date);
@$totalDays = $total_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

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
//$updateHRFinal = "UPDATE vacation_request_info SET hr_final_update_by = '".$hrUpdateBy."', hr_final_update_created = '".$hrUpdateCreated."', hr_final_status = 'Approved', hr_final_days = '".$elapsedDays."', total_number_of_days = '".$totalDays."', notes_hr_final = '".$hr_final_notes."' WHERE tcode_vacation = '".$tcode."' ";
$updateHRFinal = "UPDATE vacation_request_info SET hr_final_update_by = '".$hrUpdateBy."', hr_final_update_created = '".$hrUpdateCreated."', hr_final_status = 'Approved', hr_final_days = '".$elapsedDays."', total_number_of_days = '".$totalDays."', notes_hr_final = '".$hr_final_notes."', request_status = 4 WHERE tcode_vacation = '".$tcode."' ";
$updateHRFinal_data = mysql_query($updateHRFinal);

$data['success'] = true;
$data['message'] = 'Success! HR Final is updated.';
//$data['message'] = $updateHRFinal;

echo json_encode($data);
?>