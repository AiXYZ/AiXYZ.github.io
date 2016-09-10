<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$fr_tcode = $_POST['fr_code'];
@$fr_hr_Closing_notes = $_POST['fr_hr_Closing_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT trans_code, hr_update_created FROM floating_personnel_info WHERE trans_code = '".$fr_tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"hr_update_created");

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
$updateHRReceived = "UPDATE floating_personnel_info SET 
		hr_final_update_by = '".$hrUpdateBy."', 
		hr_final_update_created = '".$hrUpdateCreated."', 
		hr_final_update_days = '".$elapsedDays."', 
		hr_final_update_notes = '".$fr_hr_Closing_notes."', 
		request_status = 3 WHERE trans_code = '".$fr_tcode."' ";
$updateHRReceived_data = mysql_query($updateHRReceived);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';
// $data['message'] = $updateHRFirst;

echo json_encode($data);
?>