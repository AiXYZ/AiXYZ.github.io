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
@$last_vacation_date = $_POST['last_vacation_date'];
@$date_joined_after_vacation = $_POST['date_joined_after_vacation'];
@$days_of_last_vacation = $_POST['days_of_last_vacation'];
@$hr_first_notes = $_POST['hr_first_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, date_created FROM vacation_request_info WHERE tcode_vacation = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

//$updateHRFirst = "UPDATE vacation_request_info SET last_vacation_date = '".$last_vacation_date."', date_joined_last_vacation = '".$date_joined_after_vacation."', days_of_last_vacation = '".$days_of_last_vacation."', notes_hr = '".$hr_first_notes."', hr_update_by = '".$hrUpdateBy."', hr_update_created = '".$hrUpdateCreated."', hr_update_days = '".$elapsedDays."' WHERE tcode_vacation = '".$tcode."' ";

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
$updateHRFirst = "UPDATE vacation_request_info SET last_vacation_date = '".$last_vacation_date."', date_joined_last_vacation = '".$date_joined_after_vacation."', days_of_last_vacation = '".$days_of_last_vacation."', notes_hr = '".$hr_first_notes."', hr_update_by = '".$hrUpdateBy."', hr_update_created = '".$hrUpdateCreated."', hr_update_days = '".$elapsedDays."', request_status = 2 WHERE tcode_vacation = '".$tcode."' ";
$updateHRFirst_data = mysql_query($updateHRFirst);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';
//$data['message'] = $updateHRFirst;

echo json_encode($data);
?>