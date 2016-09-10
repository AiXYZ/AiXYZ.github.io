<?php
ob_start();
session_start();

include_once("../../../../inc/config.php");
include_once("../../../../inc/functions.php");

$data = array();

db_connect();
mysql_query("SET NAMES utf8");
mysql_query("set character set utf8");

@$fr_tcode = $_POST['FromV_code'];
@$fr_hr_received_notes = $_POST['FromV_hr_notes'];

//@$fr_tcode = "20160628101010";
//@$fr_hr_received_notes = "test";

// =================================================================== \\

//Username and Date HR First is updated
$hrUpdateBy = $_SESSION['login_user'];
$hrUpdateCreated = $Default_Date_Settings;

// Get the CREATED DATE
$created = "SELECT trans_code, date_created FROM reporting_date_info WHERE trans_code = '".$fr_tcode."' ";
$created_data = mysql_query($created);
$created_date = mysql_result($created_data,0,"date_created");

$elapsed_days = elapsed_days($created_date);
@$elapsedDays = $elapsed_days['days_between']; // <-- This count the number of Days from the Date Created up to the Current Date it was update by the HR

/*
 * 1 - HR received
 * 2 - HR closing
 * 3 - closed
 */
$updateHRReceived = "UPDATE reporting_date_info SET 
		hr_update_by = '".$hrUpdateBy."', 
		hr_update_created = '".$hrUpdateCreated."', 
		hr_update_days = '".$elapsedDays."', 
		hr_update_notes = '".$fr_hr_received_notes."', 
		request_status = 2 WHERE trans_code = '".$fr_tcode."' ";
$updateHRReceived_data = mysql_query($updateHRReceived);

$data['success'] = true;
$data['message'] = 'Success! Data updated on the database.';
// $data['message'] = $updateHRFirst;

echo json_encode($data);
?>