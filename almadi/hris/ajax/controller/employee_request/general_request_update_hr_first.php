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
@$hr_first_notes = $_POST['hr_first_notes'];

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT transaction_code, date_created FROM general_request_info WHERE transaction_code = '".$tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR First
 * 2 - Assign
 * 3 - Closed
 * 4 - Declined
 */

$updateHR_First = "UPDATE general_request_info SET hr_update_note = '".$hr_first_notes."', hr_update_by = '".$hrUpdateBy."', hr_update_date = '".$hrUpdateCreated."', hr_update_days = '".$elapsedDays."', request_status = 3 WHERE transaction_code = '".$tcode."' ";
$updateHR_First_data = mysql_query($updateHR_First);

$data['success'] = true;
$data['message'] = 'Success! Edit saved.';
// $data['message'] = $updateHR_First;
	
// =========================== \\

echo json_encode($data);
?>