<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$fr_tcode = $_POST['cr_code'];
@$fr_hr_received_notes = $_POST['cr_hr_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT tcode_vacation, date_created FROM career_info WHERE tcode_vacation = '".$fr_tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR received
 * 2 - HR closing
 * 3 - closed
 */
$updateHRReceived = "UPDATE career_info SET 
		first_update_by = '".$hrUpdateBy."', 
		first_created = '".$hrUpdateCreated."', 
		first_update_days = '".$elapsedDays."', 
		first_notes = '".$fr_hr_received_notes."', 
		request_status = 2 WHERE tcode_vacation = '".$fr_tcode."' ";
$updateHRReceived_data = mysql_query($updateHRReceived);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';
// $data['message'] = $updateHRFirst;

echo json_encode($data);
?>